import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { Auth } from './components/Auth';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { History } from './pages/History';
import { Profile } from './pages/Profile';
import { DeliveryPartner } from './types';
import { Lock } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [partner, setPartner] = useState<DeliveryPartner | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (u) {
          const ref = db.ref(`deliveryPartners/${u.uid}`);
          ref.on('value', snap => {
              if (snap.exists()) {
                  setPartner({ ...snap.val(), id: u.uid });
              } else {
                  // Handle case where auth exists but db record doesn't (rare edge case)
                  setPartner(null);
              }
              setLoading(false);
          });
      } else {
          setPartner(null);
          setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-blue-50 text-blue-600 font-bold">Loading Fleet...</div>;

  if (!user || !partner) return <Auth />;

  if (!partner.isApproved) {
      return (
          <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Account Pending</h2>
              <p className="text-gray-500 mb-8 max-w-xs">Your profile is currently under review by the admin team. Please check back later.</p>
              <button onClick={() => auth.signOut()} className="text-blue-600 font-bold hover:underline">Logout</button>
          </div>
      );
  }

  const renderContent = () => {
      switch(activeTab) {
          case 'home': return <Home partner={partner} />;
          case 'dashboard': return <Dashboard partner={partner} />;
          case 'history': return <History partner={partner} />;
          case 'profile': return <Profile partner={partner} />;
          default: return <Home partner={partner} />;
      }
  };

  return (
    <Layout partner={partner} activeTab={activeTab} onTabChange={setActiveTab}>
        {renderContent()}
    </Layout>
  );
}