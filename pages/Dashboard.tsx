
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { DeliveryPartner, Order } from '../types';
import { TrendingUp, Clock, Wallet, Banknote } from 'lucide-react';

interface DashboardProps {
  partner: DeliveryPartner;
}

export const Dashboard: React.FC<DashboardProps> = ({ partner }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<'today' | 'week' | 'all'>('all'); // Default to all to show total earnings first
  const [liveActiveMinutes, setLiveActiveMinutes] = useState(0);

  // --- 1. Fetch Orders ---
  useEffect(() => {
    const ref = db.ref('orders');
    const listener = ref.on('value', snap => {
        if(snap.exists()) {
            const data = snap.val();
            const list = Object.keys(data).map(k => ({...data[k], id: k})) as Order[];
            // STRICT FILTERING: Only Delivered orders assigned to this partner
            const myDeliveries = list.filter(o => o.deliveryPartnerId === partner.id && o.status === 'DELIVERED');
            setOrders(myDeliveries);
        } else {
            setOrders([]);
        }
    });
    return () => ref.off('value', listener);
  }, [partner.id]);

  // --- 2. Live Active Time Timer ---
  useEffect(() => {
      let interval: any;
      
      // Only run timer if online and we have a start time
      if (partner.isOnline && partner.lastOnlineAt) {
          // Update immediately
          const updateTime = () => {
             const diff = Date.now() - (partner.lastOnlineAt || Date.now());
             setLiveActiveMinutes(Math.floor(diff / 1000 / 60));
          };
          updateTime();
          
          interval = setInterval(updateTime, 60000); // Update every minute
      } else {
          setLiveActiveMinutes(0);
      }

      return () => clearInterval(interval);
  }, [partner.isOnline, partner.lastOnlineAt]);


  // --- 3. Calculations ---
  
  // Filter Orders based on UI Selection
  const filteredOrders = orders.filter(o => {
      const date = new Date(o.createdAt);
      const now = new Date();
      if (filter === 'today') return date.toDateString() === now.toDateString();
      if (filter === 'week') {
          const weekAgo = new Date(now.setDate(now.getDate() - 7));
          return date >= weekAgo;
      }
      return true; // 'all'
  });

  // Strict summation of partnerPayout
  const totalEarnings = filteredOrders.reduce((acc, o) => acc + (o.partnerPayout || 0), 0);

  // Cash Collected (Cash to Deposit back to OrderEat)
  // Logic: Sum of totalAmount for orders that are COD and Delivered
  const cashCollected = filteredOrders.reduce((acc, o) => {
      if (o.paymentMethod === 'COD') {
          return acc + o.totalAmount;
      }
      return acc;
  }, 0);

  // Calculate Total Active Hours (Stored + Live)
  const calculateActiveTime = () => {
      // Check if stored data is for today
      const todayStr = new Date().toDateString();
      const storedMs = (partner.lastActiveDate === todayStr) ? (partner.dailyActiveMs || 0) : 0;
      
      const totalMinutes = Math.floor(storedMs / 1000 / 60) + liveActiveMinutes;
      
      const h = Math.floor(totalMinutes / 60);
      const m = totalMinutes % 60;
      return `${h}h ${m}m`;
  };

  return (
    <div className="p-4 space-y-6">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Earnings</h2>
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                {['today', 'week', 'all'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f as any)}
                        className={`px-3 py-1 rounded-md text-xs font-bold capitalize transition ${filter === f ? 'bg-white dark:bg-gray-700 shadow text-blue-600' : 'text-gray-500'}`}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/20">
            <p className="text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">Total Earnings ({filter})</p>
            <h3 className="text-4xl font-black mb-4">₹{totalEarnings.toFixed(0)}</h3>
            <div className="flex gap-4">
                <div className="bg-white/20 rounded-lg px-3 py-2 flex-1">
                    <p className="text-[10px] text-blue-100 uppercase">Deliveries</p>
                    <p className="text-lg font-bold">{filteredOrders.length}</p>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-2 flex-1">
                    <p className="text-[10px] text-blue-100 uppercase">Avg / Order</p>
                    <p className="text-lg font-bold">₹{filteredOrders.length > 0 ? (totalEarnings/filteredOrders.length).toFixed(0) : 0}</p>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                    <Clock className="w-4 h-4"/>
                </div>
                <p className="text-xs text-gray-500">Active Hours (Today)</p>
                <p className="text-lg font-bold text-gray-800 dark:text-white">{calculateActiveTime()}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
                    <Banknote className="w-4 h-4"/>
                </div>
                <p className="text-xs text-gray-500">Cash to Deposit</p>
                <p className="text-lg font-bold text-gray-800 dark:text-white">₹{cashCollected.toLocaleString()}</p>
            </div>
        </div>

        {/* Incentives / Wallet Mockup */}
        <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-900/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Wallet className="w-5 h-5"/>
                 </div>
                 <div>
                     <p className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase">Wallet Balance</p>
                     <p className="text-sm text-purple-600/80 dark:text-purple-400/80">Pending Payout</p>
                 </div>
            </div>
            <h3 className="text-xl font-black text-purple-700 dark:text-purple-400">₹{totalEarnings.toFixed(0)}</h3>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Recent Payouts Activity</h3>
            <div className="space-y-4">
                {filteredOrders.length === 0 ? (
                    <p className="text-center text-gray-400 text-sm py-4">No deliveries in this period.</p>
                ) : (
                    filteredOrders.slice(0, 5).map(o => (
                        <div key={o.id} className="flex justify-between items-center border-b border-gray-50 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                            <div>
                                <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">{o.restaurantName}</p>
                                <p className="text-xs text-gray-400">{new Date(o.createdAt).toLocaleTimeString()}</p>
                            </div>
                            <span className="font-bold text-green-600 text-sm">+ ₹{o.partnerPayout?.toFixed(0)}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    </div>
  );
};
