import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, Shield, Star } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Map } from '../components/Map';

export const Tracking: React.FC = () => {
    const navigate = useNavigate();
    const { currentBooking, availableAmbulances } = useStore();
    const [eta, setEta] = useState(5);

    const driver = availableAmbulances.find(a => a.id === currentBooking?.ambulanceId);

    useEffect(() => {
        if (!currentBooking) {
            navigate('/home');
        }
    }, [currentBooking, navigate]);

    useEffect(() => {
        const timer = setInterval(() => {
            setEta((prev) => (prev > 1 ? prev - 1 : 1));
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="h-full relative flex flex-col">
            {/* Map Area */}
            <div className="flex-1 relative">
                <Map />

                {/* Top Status Bar */}
                <div className="absolute top-4 left-4 right-4 z-10">
                    <div className="bg-black/80 backdrop-blur-md text-white p-4 rounded-xl flex justify-between items-center shadow-lg">
                        <div>
                            <p className="text-xs text-gray-300 uppercase font-bold tracking-wider">Arriving In</p>
                            <p className="text-2xl font-bold text-yellow-400">{eta} mins</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-300 uppercase font-bold tracking-wider">Status</p>
                            <p className="text-sm font-medium">On the way</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Driver Details Sheet */}
            <div className="bg-white dark:bg-zinc-900 rounded-t-3xl p-6 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-20 -mt-6">
                <div className="w-12 h-1 bg-gray-300 dark:bg-zinc-700 rounded-full mx-auto mb-6"></div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden border-2 border-yellow-400">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${driver?.driverName || 'Driver'}`} alt="Driver" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold dark:text-white">{driver?.driverName || 'Driver'}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <span>{driver?.rating || '4.8'}</span>
                            <span>•</span>
                            <span>{driver?.plateNumber || 'KA-01-AB-1234'}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{driver?.type} Ambulance</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
                            <Phone size={20} />
                        </button>
                        <button className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                            <MessageSquare size={20} />
                        </button>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl mb-6 flex items-start gap-3">
                    <Shield className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                        <h4 className="font-bold text-sm dark:text-white">Safety Protocols</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Driver is wearing a mask and the ambulance is sanitized.
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/home')}
                    className="w-full bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white font-bold py-4 rounded-xl text-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                >
                    Cancel Booking
                </button>
            </div>
        </div>
    );
};
