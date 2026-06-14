import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-6 py-8 flex justify-between items-center relative z-50" data-jc-id="EKXZWG">
      <Link to="/" className="text-3xl font-bold font-display text-[#181E4B]" data-jc-id="EKXZ5R">
        Jadoo
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 items-center font-medium text-[#212832]" data-jc-id="EKXYBR">
        <Link
          to="/"
          className="hover:text-[#DF6951] transition-colors"
        data-jc-id="EKXXLV">
          Destinations
        </Link>
        <Link to="/hotels" className="hover:text-[#DF6951] transition-colors" data-jc-id="EKXWRP">
          Hotels
        </Link>
        <Link to="/flights" className="hover:text-[#DF6951] transition-colors" data-jc-id="EKXW03">
          Flights
        </Link>
        <Link to="/bookings" className="hover:text-[#DF6951] transition-colors" data-jc-id="EKXUPR">
          Bookings
        </Link>
        <a href="#login" className="hover:text-[#DF6951] transition-colors" data-jc-id="PUM87Y">
          Login
        </a>
        <button className="border border-[#212832] rounded-md px-5 py-2 hover:bg-[#212832] hover:text-white transition-all" data-jc-id="PUM7GI">
          Sign up
        </button>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-[#DF6951]" data-jc-id="PUM6KM">
          <span data-jc-id="PUM5UQ">EN</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          data-jc-id="PUM5A6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            data-jc-id="PUM4F5"></path>
          </svg>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden" data-jc-id="PUM2BF">
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#212832]" data-jc-id="PUM28O">
          {isOpen ? <X size={28} data-jc-id="PUM1I8"/> : <Menu size={28} data-jc-id="PUM1H5"/>}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg md:hidden p-6 flex flex-col space-y-4 rounded-lg z-50" data-jc-id="PULL4B">
          <Link
            to="/"
            className="text-[#212832] hover:text-[#DF6951]"
            onClick={() => setIsOpen(false)}
          data-jc-id="PULKB0">
            Destinations
          </Link>
          <Link 
            to="/hotels" 
            className="text-[#212832] hover:text-[#DF6951]"
            onClick={() => setIsOpen(false)}
          data-jc-id="PULIUC">
            Hotels
          </Link>
          <Link 
            to="/flights" 
            className="text-[#212832] hover:text-[#DF6951]"
            onClick={() => setIsOpen(false)}
          data-jc-id="PULHD1">
            Flights
          </Link>
          <Link 
            to="/bookings" 
            className="text-[#212832] hover:text-[#DF6951]"
            onClick={() => setIsOpen(false)}
          data-jc-id="PULFVO">
            Bookings
          </Link>
          <a href="#login" className="text-[#212832] hover:text-[#DF6951]" data-jc-id="PULEE9">
            Login
          </a>
          <button className="border border-[#212832] rounded-md px-5 py-2 w-full" data-jc-id="PUKY25">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
