import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map } from '../components/Map';
import { useStore } from '../store/useStore';
import { Search } from 'lucide-react';

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const { setCurrentLocation } = useStore();

    useEffect(() => {
        // Mock getting location
        setCurrentLocation({
            latitude: 12.9716,
            longitude: 77.5946,
            address: 'MG Road, Bangalore, Karnataka',
        });
    }, [setCurrentLocation]);

    return (
        <div className="h-full relative flex flex-col">
            {/* Map Background */}
            <div className="flex-1 relative">
                <Map />

                {/* Search Bar Overlay */}
                <div className="absolute top-4 left-4 right-4 z-10">
                    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-3 flex items-center gap-3 border border-gray-100 dark:border-zinc-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <input
                            type="text"
                            placeholder="Where to?"
                            className="flex-1 bg-transparent outline-none text-sm font-medium dark:text-white"
                            readOnly
                            onClick={() => navigate('/select-ambulance')}
                        />
                        <Search size={18} className="text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Bottom Action Sheet */}
            <div className="bg-white dark:bg-zinc-900 rounded-t-3xl p-6 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-20 -mt-6">
                <div className="w-12 h-1 bg-gray-300 dark:bg-zinc-700 rounded-full mx-auto mb-6"></div>

                <h3 className="text-lg font-bold mb-4 dark:text-white">Emergency Help Needed?</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-900/50 flex flex-col items-center gap-2 cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                        onClick={() => navigate('/select-ambulance')}>
                        {/* Using emoji as placeholder icon for simplicity and reliability */}
                        <span className="text-4xl">🚑</span>
                        <span className="font-bold text-red-600 dark:text-red-400">Ambulance</span>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/50 flex flex-col items-center gap-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        <span className="text-4xl">🏥</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">Hospitals</span>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/select-ambulance')}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-xl text-lg shadow-lg shadow-yellow-400/20 transition-all active:scale-[0.98]"
                >
                    Book Ambulance Now
                </button>
            </div>
        </div>
    );
};
