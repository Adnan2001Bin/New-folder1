import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Flights from './pages/Flights';
import Bookings from './pages/Bookings';

function App() {
  return (
    <BrowserRouter data-jc-id="Z3M6NG">
      <div className='bg-white min-h-screen overflow-hidden' data-jc-id="Z3M6L3">
        <Navbar data-jc-id="Z3M5XQ"/>
        <Routes data-jc-id="Z3M5W1">
          <Route path="/" element={<Home />} data-jc-id="Z3M5UC"/>
          <Route path="/hotels" element={<Hotels />} data-jc-id="Z3M580"/>
          <Route path="/flights" element={<Flights />} data-jc-id="Z3M53J"/>
          <Route path="/bookings" element={<Bookings />} data-jc-id="Z3M4GC"/>
        </Routes>
        <Footer data-jc-id="Z3M3RH"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
