import React from 'react';
import { useStore } from '../store/useStore';
import { LogOut, ChevronRight, Shield, CreditCard, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Profile: React.FC = () => {
    const { user, setUser } = useStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate('/login');
    };

    const menuItems = [
        { icon: Shield, label: 'Safety & Privacy' },
        { icon: CreditCard, label: 'Payment Methods' },
        { icon: Bell, label: 'Notifications' },
    ];

    return (
        <div className="p-4 bg-gray-50 dark:bg-zinc-900 min-h-full">
            <h1 className="text-2xl font-bold mb-6 dark:text-white">Profile</h1>

            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 mb-6 flex items-center gap-4 shadow-sm border border-gray-100 dark:border-zinc-700">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    {user?.name?.[0] || 'U'}
                </div>
                <div>
                    <h2 className="text-xl font-bold dark:text-white">{user?.name || 'User Name'}</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{user?.phoneNumber}</p>
                </div>
            </div>

            <div className="space-y-2">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className="w-full bg-white dark:bg-zinc-800 p-4 rounded-xl flex items-center justify-between shadow-sm border border-gray-100 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 dark:bg-zinc-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300">
                                <item.icon size={20} />
                            </div>
                            <span className="font-medium dark:text-white">{item.label}</span>
                        </div>
                        <ChevronRight size={20} className="text-gray-400" />
                    </button>
                ))}

                <button
                    onClick={handleLogout}
                    className="w-full bg-white dark:bg-zinc-800 p-4 rounded-xl flex items-center justify-between shadow-sm border border-gray-100 dark:border-zinc-700 mt-6 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-500">
                            <LogOut size={20} />
                        </div>
                        <span className="font-medium">Logout</span>
                    </div>
                </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-8">
                Version 1.0.0
            </p>
        </div>
    );
};
