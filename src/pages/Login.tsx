import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Login: React.FC = () => {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const setUser = useStore((state) => state.setUser);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (phone.length < 10) return;

        // Mock login
        setUser({
            id: 'user-1',
            name: 'Raghav Agrawal',
            phoneNumber: phone,
        });

        navigate('/home');
    };

    return (
        <div className="flex flex-col h-screen bg-yellow-400 text-black p-6">
            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <span className="text-yellow-400 text-4xl font-bold">A</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">AmbuBook</h1>
                <p className="text-lg font-medium opacity-80">Emergency Ambulance Booking</p>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-t-3xl p-8 -mx-6 -mb-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Get Started</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="98765 43210"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all dark:text-white"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black dark:bg-yellow-400 text-yellow-400 dark:text-black py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        Continue
                        <ArrowRight size={20} />
                    </button>
                </form>
                <p className="text-center text-xs text-gray-500 mt-6">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
};
