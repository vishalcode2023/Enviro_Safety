import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752326395/Screenshot_2025-07-12_183915_dcqpmk.png",
  "https://images.unsplash.com/photo-1651420952022-2d2e666e87df?q=80&w=1124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1631263137336-fd1ccc8c6a4f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalTime = 3000;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F4F9F8] text-gray-900">
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20 relative">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base font-semibold text-blue-700 mb-4 uppercase tracking-widest"
        >
          Shaping Tomorrow's World
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-800 leading-tight mb-8"
        >
          Pioneering Glass Innovations with Unmatched Expertise
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 sm:px-10 sm:py-4 bg-transparent border-2 border-gray-700 text-gray-700 font-semibold rounded-lg shadow-md transition-all duration-300 self-start"
        >
          <Link to="/contact">Get Started</Link>
        </motion.button>
      </div>

      <div className="w-full md:w-1/2 min-h-[480px] md:min-h-screen relative overflow-hidden">
        <motion.img
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          src={images[currentImageIndex]}
          alt="Modern Building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-10 md:hidden"></div>
      </div>
    </div>
  );
};

export default HeroSection;
