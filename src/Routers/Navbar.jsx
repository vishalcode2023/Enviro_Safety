import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/Products", label: " Products " },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full fixed top-0 left-0 z-40 bg-transparent">
        <div className="w-[95%] mx-auto bg-black/80 backdrop-blur-sm rounded-full shadow-lg px-6 py-3 flex justify-between items-center mt-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dybpd6dkz/image/upload/v1753333882/WhatsApp_Image_2025-07-21_at_3.51.15_PM_m2fvxl.jpg"
              alt="Logo"
              className="w-14 h-10 sm:w-16 sm:h-12 object-contain rounded-full"
            />
            <div className="flex flex-col ml-3">
              <span className="text-base sm:text-lg text-white font-bold">
                Enviro Safety Glass
              </span>
              <span className="text-xs sm:text-sm text-white">
                Your Vision Our Glass
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex gap-8 text-white font-semibold">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Menu Button (Mobile Only) */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-sm sm:text-base font-bold text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black text-white z-50 p-5 sm:p-12 flex flex-col justify-between"
          >
            {/* Top Row: Enviro logo and close button */}
            <div className="w-full flex justify-between items-center mb-6">
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dybpd6dkz/image/upload/v1753333882/WhatsApp_Image_2025-07-21_at_3.51.15_PM_m2fvxl.jpg"
                  alt="Logo"
                  className="w-12 h-12 object-contain rounded-xl"
                />
                <div className="ml-3">
                  <span className="text-xl font-bold block">
                    Enviro Safety Glass
                  </span>
                  <span className="text-sm text-gray-300">
                    Your Vision Our Glass
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm sm:text-base font-semibold border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
              >
                Close
              </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col sm:flex-row flex-grow items-center justify-center gap-10">
              {/* Left: Play Reel */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="sm:w-1/3 flex flex-col items-center sm:items-start"
              >
                <div className="rounded-xl overflow-hidden max-w-[600px] w-full mb-4 shadow-2xl">
                  <video
                    className="w-full h-auto object-cover rounded-xl shadow-xl"
                    src="https://res.cloudinary.com/dybpd6dkz/video/upload/Glass_WEB_Video1_Re_1_1_ztjjbx.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </motion.div>

              {/* Right: Navigation Links */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="sm:w-1/2 flex flex-col items-center sm:items-end text-right"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                  className="flex flex-col gap-4 text-4xl sm:text-5xl font-semibold w-full"
                >
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ x: -10 }}
                      className="transition-all duration-300 relative group"
                    >
                      <Link
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className="transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="w-full pt-6 mt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
              <span>Your Vision Our Glass</span>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                {["Instagram"].map((social, i) => (
                  <a
                    key={i}
                    href="https://www.instagram.com/enviro_safetyglass/"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    {social}
                    <span className="ml-1 text-xs font-bold rotate-45">↑</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
