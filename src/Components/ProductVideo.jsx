// ProductVideo.jsx
import React from "react";
import { motion } from "framer-motion";

const ProductVideo = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          <span className="block text-[#1D293D]">HOW</span>
          <span className="block text-[#0084D1]">SAFETY GLASS</span>
          <span className="block text-[#1D293D]">WORKS</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          At <span className="font-semibold text-blue-600">Enviro Safety Glass</span>, 
          we demonstrate how our advanced glass solutions are built for 
          <span className="font-semibold"> strength, safety, and durability</span>. 
          Watch how innovation meets design in this short video.
        </p>
      </motion.div>

      {/* Right Side - Video */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-2xl shadow-2xl"
      >
        <video
          autoPlay
          muted
          loop
          controls
          className="w-full h-full object-cover rounded-2xl"
          src="/videos/Productsvideo.mp4" // Replace with actual path
          type="video/mp4"
        />

        {/* Overlay Play Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.svg
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-20 h-20 text-white opacity-70"
            fill="currentColor"
            viewBox="0 0 84 84"
          >
            <circle cx="42" cy="42" r="42" fill="currentColor" />
            <polygon points="34,28 58,42 34,56" fill="#000000" />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductVideo;
