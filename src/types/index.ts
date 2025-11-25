export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email?: string;
  photoURL?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

export type AmbulanceType = 'Basic' | 'ICU' | 'Neonatal' | 'Mortuary' | 'Air';

export interface Ambulance {
  id: string;
  driverName: string;
  driverPhone: string;
  type: AmbulanceType;
  plateNumber: string;
  location: Location;
  isAvailable: boolean;
  rating: number;
  pricePerKm: number;
  basePrice: number;
  eta?: number; // in minutes, calculated dynamically
}

export type BookingStatus = 'pending' | 'confirmed' | 'driver_assigned' | 'en_route' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  userId: string;
  ambulanceId?: string;
  pickupLocation: Location;
  dropLocation: Location;
  status: BookingStatus;
  totalPrice?: number;
  distance?: number;
  createdAt: number; // timestamp
  driverLocation?: Location; // For live tracking
}
