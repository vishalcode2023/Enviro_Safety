import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dt2juqy9s/video/upload/2450251-uhd_3840_2160_30fps_js3w8d.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-5 text-center mt-40 sm:mt-38 md:mt-32">
        {/* Heading */}
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white text-[14vw] sm:text-[8vw] md:text-[9vw] font-extrabold tracking-tight leading-tight drop-shadow-xl mb-2"
        >
          <span className="text-white bg-clip-text">Enviro Safety Glass</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-white/90 text-base sm:text-lg md:text-2xl  font-medium tracking-wide"
        >
          Your Vision Our Glass
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            delay: 2,
          }}
          className="mt-12 w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 shadow-lg backdrop-blur-sm hover:scale-110 transition-all duration-300 cursor-pointer"
          onClick={() => {
            const nextSection = document.getElementById("next-section");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ChevronDown size={28} className="text-white/80" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
