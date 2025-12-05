
import React, { useState, useEffect } from 'react';
import { Home, List, User, LogOut, Power, Sun, Moon, MapPin } from 'lucide-react';
import { auth, db } from '../firebase';
import { DeliveryPartner } from '../types';

interface LayoutProps {
  partner: DeliveryPartner;
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ partner, children, activeTab, onTabChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  // --- Real-time Location Tracking ---
  useEffect(() => {
    let watchId: number;

    if (partner.isOnline) {
        if ('geolocation' in navigator) {
            watchId = navigator.geolocation.watchPosition(
                (pos) => {
                    // Update location in Firebase
                    db.ref(`deliveryPartners/${partner.id}`).update({
                        currentLocation: {
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude,
                            updatedAt: Date.now()
                        }
                    });
                },
                (err) => {
                    console.error(`Location error (${err.code}): ${err.message}`);
                },
                // Increased timeout to 30s to prevent timeouts on mobile
                { enableHighAccuracy: true, maximumAge: 10000, timeout: 30000 }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    return () => {
        if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [partner.isOnline, partner.id]);

  useEffect(() => {
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleOnline = async () => {
      const now = Date.now();
      const todayStr = new Date().toDateString();
      
      const isGoingOffline = partner.isOnline; // Current state is True, becoming False
      
      let updates: any = { 
          isOnline: !partner.isOnline,
          lastActiveDate: todayStr 
      };

      if (isGoingOffline) {
          // Going Offline: Calculate session duration
          const lastOnline = partner.lastOnlineAt || now;
          const sessionDuration = now - lastOnline;
          
          // Check if date changed since last active, if so reset daily counter, else add to it
          let currentTotal = (partner.lastActiveDate === todayStr) ? (partner.dailyActiveMs || 0) : 0;
          
          updates.dailyActiveMs = currentTotal + sessionDuration;
          updates.lastOnlineAt = null; // Clear live timestamp
      } else {
          // Going Online
          updates.lastOnlineAt = now;
          // If first time logging in today, reset daily counter
          if (partner.lastActiveDate !== todayStr) {
              updates.dailyActiveMs = 0;
          }
      }

      await db.ref(`deliveryPartners/${partner.id}`).update(updates);
  };

  return (
    <div className="h-screen w-full bg-gray-50 dark:bg-gray-900 flex flex-col font-sans overflow-hidden">
        
        {/* Top Bar */}
        <div className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center shadow-sm shrink-0 z-20">
            <div>
                <h1 className="text-xl font-black italic tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">OrderEat</h1>
                <div className="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400">
                    <MapPin className="w-3 h-3" /> Delivery Partner
                </div>
            </div>
            
            <div className="flex items-center gap-3">
                <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
                >
                    {isDarkMode ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
                </button>
                <div 
                    onClick={toggleOnline}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition ${partner.isOnline ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-500 border border-gray-200'}`}
                >
                    <div className={`w-2 h-2 rounded-full ${partner.isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                    <span className="text-xs font-bold uppercase">{partner.isOnline ? 'Online' : 'Offline'}</span>
                </div>
            </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative pb-20">
            {children}
        </main>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 px-6 py-3 flex justify-between items-center z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] safe-area-bottom">
            <button 
                onClick={() => onTabChange('home')}
                className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
                <Home className={`w-6 h-6 ${activeTab === 'home' ? 'fill-current' : ''}`} />
                <span className="text-[10px] font-bold">Duty</span>
            </button>
            
            <button 
                onClick={() => onTabChange('dashboard')}
                className={`flex flex-col items-center gap-1 ${activeTab === 'dashboard' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
                <div className="bg-blue-600 text-white rounded-full p-3 -mt-8 shadow-lg border-4 border-white dark:border-gray-900">
                    <span className="text-lg font-bold">₹</span>
                </div>
                <span className="text-[10px] font-bold">Earnings</span>
            </button>

            <button 
                onClick={() => onTabChange('history')}
                className={`flex flex-col items-center gap-1 ${activeTab === 'history' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
                <List className="w-6 h-6" />
                <span className="text-[10px] font-bold">History</span>
            </button>

            <button 
                onClick={() => onTabChange('profile')}
                className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
                <User className={`w-6 h-6 ${activeTab === 'profile' ? 'fill-current' : ''}`} />
                <span className="text-[10px] font-bold">Profile</span>
            </button>
        </div>
    </div>
  );
};
