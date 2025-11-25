import type { Ambulance } from '../types';

export const generateMockAmbulances = (centerLat: number, centerLng: number): Ambulance[] => {
    const types = ['Basic', 'ICU', 'Neonatal', 'Mortuary'] as const;

    return Array.from({ length: 8 }).map((_, i) => ({
        id: `amb-${i}`,
        driverName: `Driver ${i + 1}`,
        driverPhone: '9876543210',
        type: types[Math.floor(Math.random() * types.length)],
        plateNumber: `KA-01-AB-${1000 + i}`,
        location: {
            latitude: centerLat + (Math.random() - 0.5) * 0.02,
            longitude: centerLng + (Math.random() - 0.5) * 0.02,
        },
        isAvailable: true,
        rating: 4.5 + Math.random() * 0.5,
        pricePerKm: 20 + Math.floor(Math.random() * 30),
        basePrice: 300 + Math.floor(Math.random() * 200),
        eta: Math.floor(Math.random() * 15) + 2,
    }));
};
