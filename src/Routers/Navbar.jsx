import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F4F9F8] px-6 py-4 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to='/' className="flex items-center space-x-3">
          <img
            src="https://4.imimg.com/data4/QR/PG/MY-13150124/enviro-safety-glass-120x120.jpg"
            alt="logo"
            className="h-10 w-20 object-cover"
          />
          <span className="text-xl font-bold text-gray-800 tracking-wide">
            Enviro Safety Glass
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden text-lg md:flex items-center space-x-8">
          <Link to="/products" className="text-slate-800 hover:text-slate-600">Products</Link>
          <Link to="/Solutions" className="text-slate-800 hover:text-slate-600">Solutions</Link>
          <Link
            to="/contact"
            className="ml-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F4F9F8] shadow-md py-4 px-6 md:hidden z-40">
          <div className="space-y-4 text-lg">
            <Link to="/products" className="block text-slate-800 hover:text-slate-600">Products</Link>
            <Link to="/Solutions" className="block text-slate-800 hover:text-slate-600">Solutions</Link>
            <Link
              to="/contact"
              className="block text-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


