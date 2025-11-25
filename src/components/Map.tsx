import React from 'react';
import { MapPin } from 'lucide-react';

export const Map: React.FC = () => {
    return (
        <div className="w-full h-full bg-gray-200 dark:bg-zinc-800 relative overflow-hidden">
            {/* Mock Map Background */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20"
                style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            {/* Center Marker (User) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <div className="absolute -inset-8 bg-blue-500/20 rounded-full animate-ping"></div>
                </div>
            </div>

            {/* Mock Ambulances */}
            <div className="absolute top-1/3 left-1/4 animate-bounce duration-[2000ms]">
                <MapPin className="text-yellow-500 drop-shadow-lg" size={24} fill="currentColor" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 animate-bounce duration-[2500ms]">
                <MapPin className="text-yellow-500 drop-shadow-lg" size={24} fill="currentColor" />
            </div>
            <div className="absolute top-2/3 right-1/3 animate-bounce duration-[3000ms]">
                <MapPin className="text-yellow-500 drop-shadow-lg" size={24} fill="currentColor" />
            </div>
        </div>
    );
};
