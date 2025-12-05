
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { Order, DeliveryPartner } from '../types';
import { Package, Banknote } from 'lucide-react';

export const History: React.FC<{ partner: DeliveryPartner }> = ({ partner }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const ref = db.ref('orders');
    const listener = ref.on('value', snap => {
        if(snap.exists()) {
            const data = snap.val();
            const list = Object.keys(data).map(k => ({...data[k], id: k})) as Order[];
            // Show only delivered or cancelled that were assigned to this partner
            const history = list.filter(o => o.deliveryPartnerId === partner.id && (o.status === 'DELIVERED' || o.status === 'CANCELLED'));
            setOrders(history.sort((a,b) => b.createdAt - a.createdAt));
        }
    });
    return () => ref.off('value', listener);
  }, [partner.id]);

  return (
    <div className="p-4 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Delivery History</h2>
        
        {orders.length === 0 ? (
            <p className="text-center text-gray-400 py-10">No history available.</p>
        ) : (
            <div className="space-y-4">
                {orders.map(order => (
                    <div key={order.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800 dark:text-white">{order.restaurantName}</h4>
                            <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${order.status === 'DELIVERED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {order.status}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">{new Date(order.createdAt).toLocaleString()}</p>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-50 dark:border-gray-700">
                            <div className="flex items-center gap-1 text-green-600 font-bold">
                                <span>₹</span>
                                {order.partnerPayout?.toFixed(0) || 0} Earning
                            </div>
                            <div className="flex items-center gap-1 text-gray-400 text-xs">
                                <Package className="w-3 h-3" /> Order #{order.id.slice(-6)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
};
