
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { DeliveryPartner, Order, OrderStatus, AdminSettings, Restaurant } from '../types';
import { MapPin, Navigation, ArrowRight, X, Check, Phone, Package, Power, ExternalLink, DollarSign } from 'lucide-react';

interface HomeProps {
  partner: DeliveryPartner;
}

export const Home: React.FC<HomeProps> = ({ partner }) => {
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const [availableOrders, setAvailableOrders] = useState<Order[]>([]);
  const [restaurants, setRestaurants] = useState<Record<string, Restaurant>>({});
  const [settings, setSettings] = useState<AdminSettings | null>(null);
  
  // Location
  const [myLoc, setMyLoc] = useState<{lat: number, lng: number} | null>(null);

  useEffect(() => {
    // 1. Fetch Settings
    db.ref('adminSettings').on('value', s => s.exists() && setSettings(s.val()));
    
    // 2. Fetch Restaurants (for coordinates)
    db.ref('restaurants').on('value', s => {
        if(s.exists()) setRestaurants(s.val());
    });

    // 3. Location Watch
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(p => setMyLoc({lat: p.coords.latitude, lng: p.coords.longitude}));
        const watch = navigator.geolocation.watchPosition(p => setMyLoc({lat: p.coords.latitude, lng: p.coords.longitude}));
        return () => navigator.geolocation.clearWatch(watch);
    }
  }, []);

  useEffect(() => {
    if (!partner.isOnline) {
        setAvailableOrders([]);
        setActiveOrder(null);
        return;
    }

    const ref = db.ref('orders');
    const listener = ref.on('value', snap => {
        if (snap.exists()) {
            const data = snap.val();
            const list = Object.keys(data).map(k => ({...data[k], id: k})) as Order[];
            
            // Check for MY active order
            const myActive = list.find(o => o.deliveryPartnerId === partner.id && o.status !== OrderStatus.DELIVERED && o.status !== OrderStatus.CANCELLED);
            
            if (myActive) {
                setActiveOrder(myActive);
                setAvailableOrders([]); // Don't show new orders if busy
            } else {
                setActiveOrder(null);
                // Filter for available orders: ONLY READY_FOR_PICKUP and Unassigned
                // Removed CONFIRMED and PREPARING statuses per request
                const pool = list.filter(o => 
                    o.status === OrderStatus.READY_FOR_PICKUP 
                    && !o.deliveryPartnerId
                );
                
                setAvailableOrders(pool);
            }
        }
    });
    return () => ref.off('value', listener);
  }, [partner.id, partner.isOnline]);

  // --- Distance & Payout Logic ---
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const R = 6371; // km
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      return R * c;
  };

  const getOrderMetrics = (order: Order) => {
      const r = restaurants[order.restaurantId];
      
      // Use coordinates if available, else fallbacks (New Delhi Area)
      const rLat = r?.lat || 28.6139;
      const rLng = r?.lng || 77.2090;
      
      // Customer coordinates or slight offset from restaurant for demo
      const cLat = order.customerLat || (rLat + 0.02); 
      const cLng = order.customerLng || (rLng + 0.02);

      const dist = calculateDistance(rLat, rLng, cLat, cLng);
      
      // Fee Formula: 
      // 0-2 km: Base Fee
      // >2 km: Base Fee + (Extra Dist * Per Km)
      // Use safe defaults if settings are not loaded yet
      const baseFee = Number(settings?.deliveryBaseFee || 40);
      const perKm = Number(settings?.deliveryPerKm || 10);

      let fee = baseFee;
      
      if (dist > 2) {
          const extraDistance = dist - 2;
          fee += extraDistance * perKm;
      }
      
      return { 
          distance: parseFloat(dist.toFixed(1)), 
          payout: Math.round(fee) 
      };
  };

  const acceptOrder = async (order: Order) => {
      const { payout } = getOrderMetrics(order);
      
      await db.ref(`orders/${order.id}`).update({
          deliveryPartnerId: partner.id,
          deliveryPartner: {
              id: partner.id,
              name: partner.name,
              phone: partner.phone,
              vehicleNumber: partner.vehicleNumber
          },
          partnerPayout: payout
      });
  };

  const updateStatus = async (status: OrderStatus) => {
      if (!activeOrder) return;
      await db.ref(`orders/${activeOrder.id}`).update({ status });
  };

  const openGoogleMaps = (startLat: number, startLng: number, endLat: number, endLng: number) => {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${startLat},${startLng}&destination=${endLat},${endLng}&travelmode=driving`;
      window.open(url, '_blank');
  };

  // --- RENDER ---

  if (!partner.isOnline) {
      return (
          <div className="h-full flex flex-col items-center justify-center p-8 text-center text-gray-500">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                  <Power className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">You are Offline</h2>
              <p className="text-sm">Go online to start receiving delivery requests.</p>
          </div>
      );
  }

  // --- ACTIVE DELIVERY VIEW ---
  if (activeOrder) {
      const restaurant = restaurants[activeOrder.restaurantId];
      // Phase 1: To Restaurant (Pickup) -> Status is NOT OUT_FOR_DELIVERY
      // Phase 2: To Customer (Drop) -> Status IS OUT_FOR_DELIVERY
      const currentStep = activeOrder.status === OrderStatus.OUT_FOR_DELIVERY ? 'DROP' : 'PICKUP';
      
      const rLat = restaurant?.lat || 28.6139;
      const rLng = restaurant?.lng || 77.2090;
      const cLat = activeOrder.customerLat || 28.5355;
      const cLng = activeOrder.customerLng || 77.3910;
      const myLat = myLoc?.lat || rLat; // Fallback
      const myLng = myLoc?.lng || rLng;

      const targetLat = currentStep === 'PICKUP' ? rLat : cLat;
      const targetLng = currentStep === 'PICKUP' ? rLng : cLng;
      const originLat = currentStep === 'PICKUP' ? myLat : rLat;
      const originLng = currentStep === 'PICKUP' ? myLng : rLng;

      return (
          <div className="h-full flex flex-col">
              {/* Dynamic Map Embed */}
              <div className="flex-1 bg-gray-100 relative group overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={`https://maps.google.com/maps?q=${targetLat},${targetLng}&hl=en&z=15&output=embed`}
                    className="w-full h-full opacity-80"
                  ></iframe>
                  
                  {/* Overlay Info */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg font-bold text-sm flex items-center gap-2 animate-bounce z-10 border border-gray-200 dark:border-gray-700">
                      <Navigation className="w-4 h-4 text-blue-600 fill-current" />
                      {currentStep === 'PICKUP' ? 'Go to Restaurant' : 'Go to Customer'}
                  </div>

                  <button 
                    onClick={() => openGoogleMaps(originLat, originLng, targetLat, targetLng)}
                    className="absolute bottom-6 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-xl z-10 flex items-center gap-2 font-bold text-sm"
                  >
                      <ExternalLink className="w-4 h-4" /> Start Navigation
                  </button>
              </div>

              {/* Action Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] -mt-6 relative z-20">
                  <div className="flex justify-between items-center mb-6">
                      <div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                              {currentStep === 'PICKUP' ? activeOrder.restaurantName : 'Customer Delivery'}
                          </h3>
                          <p className="text-sm text-gray-500 max-w-[200px] truncate">
                              {currentStep === 'PICKUP' ? restaurant?.address : activeOrder.deliveryAddress}
                          </p>
                      </div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentStep === 'PICKUP' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                          {currentStep === 'PICKUP' ? <Package className="w-6 h-6" /> : <MapPin className="w-6 h-6" />}
                      </div>
                  </div>

                  <div className="flex gap-3 mb-6">
                      <button className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl font-bold text-gray-700 dark:text-gray-200 flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" /> Call
                      </button>
                      {activeOrder.paymentMethod === 'COD' && currentStep === 'DROP' && (
                          <div className="flex-1 py-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl font-bold flex items-center justify-center gap-2 border border-green-200 dark:border-green-900/30">
                              <DollarSign className="w-4 h-4" /> Collect ₹{activeOrder.totalAmount}
                          </div>
                      )}
                  </div>

                  {currentStep === 'PICKUP' ? (
                      <button 
                        onClick={() => updateStatus(OrderStatus.OUT_FOR_DELIVERY)}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-200 dark:shadow-blue-900/50 flex items-center justify-center gap-2"
                      >
                          Order Picked Up <ArrowRight className="w-6 h-6" />
                      </button>
                  ) : (
                      <button 
                        onClick={() => updateStatus(OrderStatus.DELIVERED)}
                        className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-green-200 dark:shadow-green-900/50 flex items-center justify-center gap-2"
                      >
                          Mark Delivered <Check className="w-6 h-6" />
                      </button>
                  )}
              </div>
          </div>
      );
  }

  // --- NO ACTIVE ORDER: SHOW FEED ---
  return (
    <div className="p-4 space-y-4">
        {availableOrders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-pulse">
                <div className="w-40 h-40 bg-blue-50 dark:bg-blue-900/10 rounded-full flex items-center justify-center mb-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Finding Orders...</h3>
                <p className="text-gray-500 text-sm">Stay online and keep moving to hotspots.</p>
            </div>
        ) : (
            <div className="space-y-4">
                <h3 className="font-bold text-gray-500 text-xs uppercase tracking-widest">New Requests ({availableOrders.length})</h3>
                {availableOrders.map(order => {
                    const { distance, payout } = getOrderMetrics(order);
                    const restaurant = restaurants[order.restaurantId];
                    return (
                        <div key={order.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden relative animate-in slide-in-from-bottom duration-500">
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center shrink-0">
                                            <Package className="w-6 h-6 text-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 dark:text-white text-lg">₹{payout}</h4>
                                            <p className="text-xs text-gray-500">Est. Earning</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">Total Distance</p>
                                        <p className="font-bold text-gray-800 dark:text-gray-200">
                                            {distance} km
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 relative pl-4 border-l-2 border-dashed border-gray-200 dark:border-gray-700 ml-2">
                                    <div className="relative">
                                        <div className="absolute -left-[23px] top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                                        <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">{order.restaurantName}</p>
                                        <p className="text-xs text-gray-500 truncate">{restaurant?.address || 'Restaurant Location'}</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[23px] top-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                                        <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">Customer</p>
                                        <p className="text-xs text-gray-500 truncate">{order.deliveryAddress}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Swipe Actions (Simulated with Buttons) */}
                            <div className="flex border-t border-gray-100 dark:border-gray-700">
                                <button className="flex-1 py-4 bg-gray-50 dark:bg-gray-700/50 text-red-500 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition flex items-center justify-center gap-2">
                                    <X className="w-5 h-5" /> Reject
                                </button>
                                <button 
                                    onClick={() => acceptOrder(order)}
                                    className="flex-[2] py-4 bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-inner"
                                >
                                    Accept Order <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        )}
    </div>
  );
};
