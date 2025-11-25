import { create } from 'zustand';
import type { User, Location, Booking, Ambulance } from '../types';

interface AppState {
    user: User | null;
    currentLocation: Location | null;
    pickupLocation: Location | null;
    dropLocation: Location | null;
    currentBooking: Booking | null;
    availableAmbulances: Ambulance[];

    setUser: (user: User | null) => void;
    setCurrentLocation: (location: Location) => void;
    setPickupLocation: (location: Location | null) => void;
    setDropLocation: (location: Location | null) => void;
    setBooking: (booking: Booking | null) => void;
    setAmbulances: (ambulances: Ambulance[]) => void;
}

export const useStore = create<AppState>((set) => ({
    user: null,
    currentLocation: null,
    pickupLocation: null,
    dropLocation: null,
    currentBooking: null,
    availableAmbulances: [],

    setUser: (user) => set({ user }),
    setCurrentLocation: (location) => set({ currentLocation: location }),
    setPickupLocation: (location) => set({ pickupLocation: location }),
    setDropLocation: (location) => set({ dropLocation: location }),
    setBooking: (booking) => set({ currentBooking: booking }),
    setAmbulances: (ambulances) => set({ availableAmbulances: ambulances }),
}));
