
import React, { useEffect, useState, useRef } from 'react';
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
  
  // Map Ref
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const routingControlRef = useRef<any>(null);

  useEffect(() => {
    // 1. Fetch Settings
    const settingsRef = db.ref('adminSettings');
    const settingsListener = settingsRef.on('value', s => s.exists() && setSettings(s.val()));
    
    // 2. Fetch Restaurants (for coordinates)
    const restRef = db.ref('restaurants');
    const restListener = restRef.on('value', s => {
        if(s.exists()) setRestaurants(s.val());
    });

    // 3. Location Watch with Fallback Strategy
    let watchId: number;

    const startLocationWatch = (useHighAccuracy: boolean) => {
        if (!('geolocation' in navigator)) {
            console.warn("Geolocation not supported");
            return;
        }

        // Clear existing watch if any
        if (watchId) navigator.geolocation.clearWatch(watchId);

        const options = { 
            enableHighAccuracy: useHighAccuracy, 
            timeout: 30000, // 30s timeout
            maximumAge: 30000 // Accept cached positions up to 30s old
        };

        const onSuccess = (p: GeolocationPosition) => {
            setMyLoc({ lat: p.coords.latitude, lng: p.coords.longitude });
        };

        const onError = (err: GeolocationPositionError) => {
            console.warn(`Home Map Geo Error (${err.code}): ${err.message}`);
            // If Timeout (3) and we were using High Accuracy, try Low Accuracy
            if (err.code === 3 && useHighAccuracy) {
                console.log("Home Map: High accuracy timed out, switching to low accuracy...");
                startLocationWatch(false);
            }
        };

        // Try to get current position immediately
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        // Start watching
        watchId = navigator.geolocation.watchPosition(onSuccess, onError, options);
    };

    // Start with High Accuracy
    startLocationWatch(true);

    return () => {
        settingsRef.off('value', settingsListener);
        restRef.off('value', restListener);
        if (watchId) navigator.geolocation.clearWatch(watchId);
    };
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
      
      // Restaurant Location
      const rLat = r?.lat || 28.6139;
      const rLng = r?.lng || 77.2090;
      
      // Customer Location (Strict usage of order data)
      // Fallback only if data is completely missing (prevents crash, though logic implies data exists)
      const cLat = order.customerLat || (rLat + 0.02); 
      const cLng = order.customerLng || (rLng + 0.02);

      const dist = calculateDistance(rLat, rLng, cLat, cLng);
      
      // Use billDetails deliveryFee as payout source of truth if available, else calculate
      if (order.billDetails?.deliveryFee) {
          return {
              distance: parseFloat(dist.toFixed(1)),
              payout: order.billDetails.deliveryFee // Payout equals the Delivery Fee collected from user
          }
      }

      // Fallback calculation for legacy orders
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

  // --- LEAFLET MAP LOGIC ---
  const currentStep = activeOrder?.status === OrderStatus.OUT_FOR_DELIVERY ? 'DROP' : 'PICKUP';
  const restaurant = activeOrder ? restaurants[activeOrder.restaurantId] : null;
  
  // Restaurant Coordinates
  const rLat = restaurant?.lat || 28.6139;
  const rLng = restaurant?.lng || 77.2090;
  
  // Customer Coordinates - Checks deliveryCoordinates first (accurate), then customerLat/Lng
  const cLat = activeOrder?.deliveryCoordinates?.lat ?? activeOrder?.customerLat ?? (rLat + 0.01);
  const cLng = activeOrder?.deliveryCoordinates?.lng ?? activeOrder?.customerLng ?? (rLng + 0.01);
  
  // Partner Live Coordinates
  const myLat = myLoc?.lat || rLat;
  const myLng = myLoc?.lng || rLng;

  // ROUTING ENDPOINTS
  // Phase 1 (PICKUP): Origin = Partner, Destination = Restaurant
  // Phase 2 (DROP):   Origin = Restaurant, Destination = Customer
  
  const originLat = currentStep === 'PICKUP' ? myLat : rLat;
  const originLng = currentStep === 'PICKUP' ? myLng : rLng;
  
  const targetLat = currentStep === 'PICKUP' ? rLat : cLat;
  const targetLng = currentStep === 'PICKUP' ? rLng : cLng;

  useEffect(() => {
      if (!activeOrder || !mapContainerRef.current || !restaurant) return;

      const L = (window as any).L;
      if (!L) return;

      // Initialize Map if not exists
      if (!mapInstanceRef.current) {
          mapInstanceRef.current = L.map(mapContainerRef.current).setView([originLat, originLng], 13);
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OpenStreetMap contributors'
          }).addTo(mapInstanceRef.current);
      }

      const map = mapInstanceRef.current;

      // Define Icons
      const bikeIcon = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/3082/3082383.png',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
      });

      const restaurantIcon = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/3448/3448606.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
      });

      const customerIcon = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
      });

      // Icon Logic based on Phase
      // PICKUP Phase: Start = Bike, End = Restaurant
      // DROP Phase:   Start = Restaurant, End = Customer
      const startIcon = currentStep === 'PICKUP' ? bikeIcon : restaurantIcon;
      const endIcon = currentStep === 'PICKUP' ? restaurantIcon : customerIcon;

      // Clear previous routing control
      if (routingControlRef.current) {
          map.removeControl(routingControlRef.current);
          routingControlRef.current = null;
      }

      // Add Routing
      if ((window as any).L.Routing) {
          try {
            routingControlRef.current = (window as any).L.Routing.control({
                waypoints: [
                    L.latLng(originLat, originLng),
                    L.latLng(targetLat, targetLng)
                ],
                lineOptions: {
                    styles: [{ color: currentStep === 'PICKUP' ? '#f97316' : '#16a34a', weight: 6 }]
                },
                createMarker: function(i: number, waypoint: any, n: number) {
                    return L.marker(waypoint.latLng, {
                        icon: i === 0 ? startIcon : endIcon
                    });
                },
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                show: false // Hide instructions panel
            }).addTo(map);
          } catch (e) {
              console.error("Routing Error:", e);
          }
      }

  }, [activeOrder?.id, currentStep, originLat, originLng, targetLat, targetLng, restaurant]);

  // Cleanup Map on unmount or order finish
  useEffect(() => {
      if (!activeOrder && mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
          routingControlRef.current = null;
      }
  }, [activeOrder]);


  // --- RENDER STATES ---

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

  if (activeOrder) {
      return (
          <div className="h-full flex flex-col">
              {/* Leaflet Map */}
              <div className="flex-1 bg-gray-100 relative group overflow-hidden z-0">
                  <div ref={mapContainerRef} className="w-full h-full" style={{ zIndex: 0 }} />
                  
                  {/* Overlay Status */}
                  <div className={`absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full shadow-lg font-bold text-sm flex items-center gap-2 animate-bounce z-[400] border border-gray-200 dark:border-gray-700 whitespace-nowrap ${currentStep === 'PICKUP' ? 'bg-orange-600 text-white' : 'bg-green-600 text-white'}`}>
                      <Navigation className="w-4 h-4 fill-current" />
                      {currentStep === 'PICKUP' ? 'Navigating to Restaurant' : 'Navigating to Customer'}
                  </div>

                  <button 
                    onClick={() => openGoogleMaps(originLat, originLng, targetLat, targetLng)}
                    className="absolute bottom-6 right-4 bg-white dark:bg-gray-800 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-full shadow-xl z-[400] flex items-center gap-2 font-bold text-sm border border-gray-200 dark:border-gray-700"
                  >
                      <ExternalLink className="w-4 h-4" /> Open Google Maps
                  </button>
              </div>

              {/* Action Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] -mt-6 relative z-[500]">
                  <div className="flex justify-between items-center mb-6">
                      <div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                              {currentStep === 'PICKUP' ? activeOrder.restaurantName : 'Customer Drop-off'}
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
                        className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg rounded-xl shadow-lg flex items-center justify-center gap-2"
                      >
                          Confirm Pickup <ArrowRight className="w-6 h-6" />
                      </button>
                  ) : (
                      <button 
                        onClick={() => updateStatus(OrderStatus.DELIVERED)}
                        className="w-full py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold text-lg rounded-xl shadow-lg flex items-center justify-center gap-2"
                      >
                          Mark Delivered <Check className="w-6 h-6" />
                      </button>
                  )}
              </div>
          </div>
      );
  }

  // --- NO ACTIVE ORDER ---
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
