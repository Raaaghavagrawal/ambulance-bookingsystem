import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, History, User, MapPin } from 'lucide-react';
import { useStore } from '../store/useStore';
import clsx from 'clsx';

export const Layout: React.FC = () => {
    const { user, currentLocation } = useStore();
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { icon: Home, label: 'Home', path: '/home' },
        { icon: History, label: 'Bookings', path: '/bookings' },
        { icon: User, label: 'Profile', path: '/profile' },
    ];

    // Hide layout on login page
    if (location.pathname === '/login' || location.pathname === '/') {
        // Also handle root path if it redirects to login or splash
        return <Outlet />;
    }

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white overflow-hidden">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-sm px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                        {user?.name?.[0] || 'U'}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Current Location</span>
                        <div className="flex items-center gap-1 text-sm font-medium">
                            <MapPin size={14} className="text-yellow-500" />
                            <span className="truncate max-w-[200px]">
                                {currentLocation?.address || 'Locating...'}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto pb-20 relative">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 pb-safe z-50">
                <div className="flex justify-around items-center h-16">
                    {navItems.map((item) => {
                        const isActive = location.pathname.startsWith(item.path);
                        return (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className={clsx(
                                    "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                                    isActive ? "text-yellow-500" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                )}
                            >
                                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                <span className="text-xs font-medium">{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};
