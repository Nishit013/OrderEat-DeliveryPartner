
import React, { useState } from 'react';
import { DeliveryPartner } from '../types';
import { User, Shield, Bike, Mail, Phone, Edit2, Save, X, AlertTriangle, CreditCard } from 'lucide-react';
import { auth, db } from '../firebase';

export const Profile: React.FC<{ partner: DeliveryPartner }> = ({ partner }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Edit States
  const [editName, setEditName] = useState(partner.name);
  const [editPhone, setEditPhone] = useState(partner.phone);
  const [editUpi, setEditUpi] = useState(partner.upiId || '');
  
  const handleSaveProfile = async () => {
      const confirm = window.confirm("Updating your profile will revoke your current approval. You will need to wait for Admin approval again to access the app. Continue?");
      if (!confirm) return;

      try {
          await db.ref(`deliveryPartners/${partner.id}`).update({
              name: editName,
              phone: editPhone,
              upiId: editUpi,
              isApproved: false // REVOKE APPROVAL ON EDIT
          });
          // App.tsx will automatically detect isApproved: false and show the pending screen
      } catch (e) {
          console.error("Failed to update profile", e);
          alert("Failed to update profile. Please try again.");
      }
  };

  const cancelEdit = () => {
      setEditName(partner.name);
      setEditPhone(partner.phone);
      setEditUpi(partner.upiId || '');
      setIsEditing(false);
  };

  return (
    <div className="p-4 space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Profile</h2>
            {!isEditing && (
                <button 
                    onClick={() => setIsEditing(true)} 
                    className="p-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-100 transition"
                >
                    <Edit2 className="w-5 h-5" />
                </button>
            )}
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center relative overflow-hidden">
            <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 relative z-10">
                <span className="text-4xl font-black text-blue-600 dark:text-blue-400">{partner.name[0]}</span>
            </div>
            
            {isEditing ? (
                 <div className="w-full space-y-3 relative z-10">
                     <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-900/30 text-xs text-left flex gap-2 items-start mb-4">
                        <AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0" />
                        <span className="text-yellow-700 dark:text-yellow-500 font-medium">Warning: Saving changes will temporarily lock your account for Admin re-approval.</span>
                     </div>
                     <div>
                         <label className="text-xs font-bold text-gray-500 uppercase block text-left mb-1">Full Name</label>
                         <input 
                            type="text" 
                            value={editName} 
                            onChange={e => setEditName(e.target.value)}
                            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                     </div>
                 </div>
            ) : (
                <>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{partner.name}</h3>
                    <p className="text-gray-500 text-sm">Joined {new Date(partner.joinedAt).toLocaleDateString()}</p>
                    <div className={`mt-3 px-3 py-1 rounded-full text-xs font-bold uppercase ${partner.isApproved ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {partner.isApproved ? 'Verified Partner' : 'Pending Approval'}
                    </div>
                </>
            )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-bold text-gray-500 text-xs uppercase tracking-wider">
                Personal Details
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                <div className="p-4 flex items-center gap-4">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="font-medium text-gray-800 dark:text-gray-200">{partner.email}</p>
                    </div>
                </div>
                <div className="p-4 flex items-center gap-4">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                        <p className="text-xs text-gray-400">Phone</p>
                        {isEditing ? (
                             <input 
                                type="tel" 
                                value={editPhone} 
                                onChange={e => setEditPhone(e.target.value)}
                                className="w-full p-1 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                            />
                        ) : (
                            <p className="font-medium text-gray-800 dark:text-gray-200">{partner.phone}</p>
                        )}
                    </div>
                </div>
                 <div className="p-4 flex items-center gap-4">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                        <p className="text-xs text-gray-400">UPI ID (For Payouts)</p>
                         {isEditing ? (
                             <input 
                                type="text" 
                                value={editUpi} 
                                onChange={e => setEditUpi(e.target.value)}
                                placeholder="e.g. name@upi"
                                className="w-full p-1 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                            />
                        ) : (
                            <p className="font-medium text-gray-800 dark:text-gray-200">{partner.upiId || 'Not Set'}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-bold text-gray-500 text-xs uppercase tracking-wider">
                Vehicle & License
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                <div className="p-4 flex items-center gap-4">
                    <Bike className="w-5 h-5 text-gray-400" />
                    <div>
                        <p className="text-xs text-gray-400">Vehicle</p>
                        <p className="font-medium text-gray-800 dark:text-gray-200">{partner.vehicleType} - {partner.vehicleNumber}</p>
                    </div>
                </div>
                <div className="p-4 flex items-center gap-4">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <div>
                        <p className="text-xs text-gray-400">License Number</p>
                        <p className="font-medium text-gray-800 dark:text-gray-200">{partner.licenseNumber}</p>
                    </div>
                </div>
            </div>
        </div>

        {isEditing ? (
            <div className="flex gap-3">
                <button 
                    onClick={cancelEdit}
                    className="flex-1 py-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold rounded-xl flex items-center justify-center gap-2"
                >
                    <X className="w-4 h-4" /> Cancel
                </button>
                <button 
                    onClick={handleSaveProfile}
                    className="flex-1 py-4 bg-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                    <Save className="w-4 h-4" /> Save Changes
                </button>
            </div>
        ) : (
            <button 
                onClick={() => auth.signOut()}
                className="w-full py-4 bg-red-50 dark:bg-red-900/20 text-red-600 font-bold rounded-xl flex items-center justify-center gap-2"
            >
                Logout
            </button>
        )}
    </div>
  );
};
