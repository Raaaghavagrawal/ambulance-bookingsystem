import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Bookings: React.FC = () => {
    // Mock bookings
    const bookings = [
        {
            id: 'bk-1',
            date: '25 Nov, 10:30 AM',
            pickup: 'MG Road, Bangalore',
            drop: 'Apollo Hospital, Bannerghatta',
            price: 450,
            status: 'completed',
            type: 'Basic'
        },
        {
            id: 'bk-2',
            date: '20 Nov, 02:15 PM',
            pickup: 'Indiranagar, Bangalore',
            drop: 'Manipal Hospital, Old Airport Rd',
            price: 1200,
            status: 'completed',
            type: 'ICU'
        },
        {
            id: 'bk-3',
            date: '15 Nov, 08:00 PM',
            pickup: 'Koramangala, Bangalore',
            drop: 'St. John\'s Hospital',
            price: 0,
            status: 'cancelled',
            type: 'Basic'
        }
    ];

    return (
        <div className="p-4 bg-gray-50 dark:bg-zinc-900 min-h-full">
            <h1 className="text-2xl font-bold mb-6 dark:text-white">My Bookings</h1>

            <div className="space-y-4">
                {bookings.map((booking) => (
                    <div key={booking.id} className="bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-zinc-700">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{booking.date}</span>
                                <h3 className="font-bold text-lg dark:text-white">₹{booking.price}</h3>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${booking.status === 'completed'
                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                }`}>
                                {booking.status}
                            </span>
                        </div>

                        <div className="space-y-3 relative">
                            {/* Connecting Line */}
                            <div className="absolute left-[0.45rem] top-2 bottom-4 w-0.5 bg-gray-200 dark:bg-zinc-700"></div>

                            <div className="flex items-start gap-3">
                                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-zinc-800 z-10 shrink-0"></div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Pickup</p>
                                    <p className="text-sm font-medium dark:text-white">{booking.pickup}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white dark:border-zinc-800 z-10 shrink-0"></div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Drop-off</p>
                                    <p className="text-sm font-medium dark:text-white">{booking.drop}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-700 flex justify-between items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{booking.type} Ambulance</span>
                            <button className="text-sm font-bold text-yellow-500 flex items-center gap-1">
                                View Details <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
