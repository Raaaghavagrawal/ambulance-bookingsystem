# AmbuBook - Emergency Ambulance Booking System

A complete ambulance booking application built with React, TypeScript, Tailwind CSS, and Zustand.

## Features

- **User Authentication**: Phone number login (mocked).
- **Live Map**: Interactive map with ambulance tracking (simulated).
- **Booking Flow**: Select pickup/drop locations, choose ambulance type, and book.
- **Real-time Tracking**: Track your ambulance with ETA and driver details.
- **Booking History**: View past bookings.
- **Profile**: Manage user profile.
- **Responsive Design**: Mobile-first UI with dark mode support.

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS v4
- React Router DOM
- Zustand (State Management)
- Lucide React (Icons)
- Vite

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5170`.

## Project Structure

- `src/components`: Reusable UI components (Layout, Map, etc.)
- `src/pages`: Application screens (Login, Home, Tracking, etc.)
- `src/store`: Global state management with Zustand
- `src/types`: TypeScript interfaces
- `src/utils`: Helper functions and mock data

## Note

This is a frontend implementation with mock data and simulated backend interactions. To make it fully functional, integrate with a real backend (e.g., Firebase) and map provider (e.g., Google Maps/Mapbox).
