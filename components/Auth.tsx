import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { Bike, Mail, Lock, User, ArrowRight, Truck, FileText } from 'lucide-react';
import { DeliveryPartner } from '../types';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleType, setVehicleType] = useState('Bike');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        if (isLogin) {
            await auth.signInWithEmailAndPassword(email, password);
        } else {
            const userCred = await auth.createUserWithEmailAndPassword(email, password);
            if (userCred.user) {
                const newPartner: DeliveryPartner = {
                    id: userCred.user.uid,
                    name,
                    email,
                    phone,
                    vehicleType: vehicleType as any,
                    vehicleNumber,
                    licenseNumber,
                    isApproved: false,
                    isOnline: false,
                    joinedAt: Date.now()
                };
                await db.ref(`deliveryPartners/${userCred.user.uid}`).set(newPartner);
            }
        }
    } catch (err: any) {
        setError(err.message);
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-black p-4 font-sans">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                    <Bike className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-black italic tracking-tighter mb-1">OrderEat</h1>
                <p className="text-blue-100 font-medium tracking-widest text-xs uppercase">Delivery Partner Fleet</p>
            </div>

            {/* Form */}
            <div className="p-8">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{isLogin ? 'Welcome Back' : 'Join the Fleet'}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-6">
                    {isLogin ? 'Login to start accepting orders' : 'Complete your profile to get approved'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <>
                            <div>
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                    <input type="text" className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Phone</label>
                                <input type="tel" className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500" placeholder="+91 9876543210" value={phone} onChange={e => setPhone(e.target.value)} required />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Vehicle Type</label>
                                    <select className="w-full px-2 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none" value={vehicleType} onChange={e => setVehicleType(e.target.value)}>
                                        <option value="Bike">Bike</option>
                                        <option value="Scooter">Scooter</option>
                                        <option value="Car">Car</option>
                                        <option value="Cycle">Cycle</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Vehicle No.</label>
                                    <input type="text" className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none" placeholder="DL 01 AB 1234" value={vehicleNumber} onChange={e => setVehicleNumber(e.target.value)} required />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Driving License No.</label>
                                <div className="relative">
                                    <FileText className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                    <input type="text" className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500" placeholder="License Number" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} required />
                                </div>
                            </div>
                        </>
                    )}

                    <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <input type="email" className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500" placeholder="partner@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                    </div>

                    <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <input type="password" className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
                        </div>
                    </div>

                    {error && <div className="p-3 bg-red-50 text-red-500 text-xs rounded-lg font-medium">{error}</div>}

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-200 dark:shadow-blue-900/50"
                    >
                        {loading ? 'Processing...' : (isLogin ? 'Login' : 'Submit Application')}
                        {!loading && <ArrowRight className="w-4 h-4" />}
                    </button>
                </form>

                <div className="mt-6 text-center text-xs">
                    <span className="text-gray-500 dark:text-gray-400">{isLogin ? "New to OrderEat? " : "Already registered? "}</span>
                    <button 
                        onClick={() => setIsLogin(!isLogin)} 
                        className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {isLogin ? 'Apply Now' : 'Login Here'}
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};