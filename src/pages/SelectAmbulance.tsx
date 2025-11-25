import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { useStore } from '../store/useStore';
import { generateMockAmbulances } from '../utils/mockData';
import type { Ambulance } from '../types';
import clsx from 'clsx';

export const SelectAmbulance: React.FC = () => {
    const navigate = useNavigate();
    const { currentLocation, setBooking, setAmbulances, availableAmbulances } = useStore();
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [pickup, setPickup] = useState(currentLocation?.address || '');
    const [drop, setDrop] = useState('');

    useEffect(() => {
        // Generate mock ambulances if not already
        if (availableAmbulances.length === 0 && currentLocation) {
            const mocks = generateMockAmbulances(currentLocation.latitude, currentLocation.longitude);
            setAmbulances(mocks);
        }
    }, [currentLocation, availableAmbulances.length, setAmbulances]);

    // Group ambulances by type and get the nearest one for each type
    const ambulanceTypes = availableAmbulances.reduce((acc, curr) => {
        if (!acc[curr.type] || curr.eta! < acc[curr.type].eta!) {
            acc[curr.type] = curr;
        }
        return acc;
    }, {} as Record<string, Ambulance>);

    const handleBook = () => {
        if (!selectedType) return;

        const selectedAmbulance = ambulanceTypes[selectedType];

        setBooking({
            id: `bk-${Date.now()}`,
            userId: 'user-1',
            ambulanceId: selectedAmbulance.id,
            pickupLocation: currentLocation!,
            dropLocation: { latitude: 0, longitude: 0, address: drop }, // Mock drop loc
            status: 'pending',
            totalPrice: selectedAmbulance.basePrice,
            distance: 5.2,
            createdAt: Date.now(),
        });

        navigate('/confirm-booking');
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-zinc-900">
            {/* Header */}
            <div className="bg-white dark:bg-zinc-900 p-4 shadow-sm z-10">
                <div className="flex items-center gap-3 mb-4">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full">
                        <ArrowLeft size={24} className="dark:text-white" />
                    </button>
                    <h1 className="text-xl font-bold dark:text-white">Select Ambulance</h1>
                </div>

                {/* Location Inputs */}
                <div className="flex flex-col gap-4 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[1.35rem] top-8 bottom-8 w-0.5 bg-gray-300 dark:bg-zinc-700 border-l border-dashed"></div>

                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full ring-4 ring-green-100 dark:ring-green-900/30"></div>
                        <div className="flex-1 bg-gray-100 dark:bg-zinc-800 rounded-lg px-3 py-2">
                            <span className="text-xs text-gray-500 block">Pickup</span>
                            <input
                                value={pickup}
                                onChange={(e) => setPickup(e.target.value)}
                                className="w-full bg-transparent outline-none text-sm font-medium dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full ring-4 ring-red-100 dark:ring-red-900/30"></div>
                        <div className="flex-1 bg-gray-100 dark:bg-zinc-800 rounded-lg px-3 py-2">
                            <span className="text-xs text-gray-500 block">Drop-off</span>
                            <input
                                value={drop}
                                onChange={(e) => setDrop(e.target.value)}
                                placeholder="Enter hospital or location"
                                className="w-full bg-transparent outline-none text-sm font-medium dark:text-white"
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambulance List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">AVAILABLE RIDES</h2>

                {Object.values(ambulanceTypes).map((amb) => (
                    <div
                        key={amb.type}
                        onClick={() => setSelectedType(amb.type)}
                        className={clsx(
                            "bg-white dark:bg-zinc-800 p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-4",
                            selectedType === amb.type
                                ? "border-yellow-400 shadow-md bg-yellow-50 dark:bg-yellow-900/10"
                                : "border-transparent hover:border-gray-200 dark:hover:border-zinc-700"
                        )}
                    >
                        {/* Icon/Image */}
                        <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-2xl">
                            🚑
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg dark:text-white">{amb.type}</h3>
                                <span className="font-bold text-lg dark:text-white">₹{amb.basePrice}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                <Clock size={14} />
                                <span>{amb.eta} mins away</span>
                                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                <User size={14} />
                                <span>4 seats</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 line-clamp-1">
                                Includes oxygen, stretcher, and first-aid kit.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer CTA */}
            <div className="p-4 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
                <button
                    disabled={!selectedType || !drop}
                    onClick={handleBook}
                    className="w-full bg-black dark:bg-yellow-400 text-yellow-400 dark:text-black py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    Book {selectedType || 'Ambulance'}
                </button>
            </div>
        </div>
    );
};
