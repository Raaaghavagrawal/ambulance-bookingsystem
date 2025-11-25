import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Loader2, CheckCircle } from 'lucide-react';

export const ConfirmBooking: React.FC = () => {
    const navigate = useNavigate();
    const { currentBooking, setBooking } = useStore();
    const [status, setStatus] = useState<'searching' | 'found'>('searching');

    useEffect(() => {
        if (!currentBooking) {
            navigate('/home');
            return;
        }

        // Simulate finding driver
        const timer = setTimeout(() => {
            setStatus('found');
            setBooking({
                ...currentBooking,
                status: 'driver_assigned',
                driverLocation: {
                    latitude: currentBooking.pickupLocation.latitude + 0.001,
                    longitude: currentBooking.pickupLocation.longitude + 0.001,
                }
            });

            // Navigate to tracking after a delay
            setTimeout(() => {
                navigate('/tracking');
            }, 2000);
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentBooking, navigate, setBooking]);

    return (
        <div className="flex flex-col h-full items-center justify-center bg-gray-50 dark:bg-zinc-900 p-6 text-center">
            {status === 'searching' ? (
                <>
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-yellow-400/30 rounded-full animate-ping"></div>
                        <div className="relative w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                            <Loader2 size={48} className="text-black animate-spin" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 dark:text-white">Finding nearby ambulance...</h2>
                    <p className="text-gray-500 dark:text-gray-400">Please wait while we connect you with the nearest driver.</p>
                </>
            ) : (
                <>
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 animate-bounce">
                        <CheckCircle size={48} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 dark:text-white">Driver Assigned!</h2>
                    <p className="text-gray-500 dark:text-gray-400">Driver is on the way to your location.</p>
                </>
            )}
        </div>
    );
};
