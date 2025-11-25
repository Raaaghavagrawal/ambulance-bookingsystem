import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { SelectAmbulance } from './pages/SelectAmbulance';
import { ConfirmBooking } from './pages/ConfirmBooking';
import { Tracking } from './pages/Tracking';
import { Bookings } from './pages/Bookings';
import { Profile } from './pages/Profile';
import { useStore } from './store/useStore';

function App() {
  const user = useStore((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={user ? "/home" : "/login"} replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/select-ambulance" element={<SelectAmbulance />} />
          <Route path="/confirm-booking" element={<ConfirmBooking />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
