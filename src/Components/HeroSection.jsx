import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Loader2 } from "lucide-react";

// Parent container for staggering words
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

// Word animation
const wordVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [startLoading, setStartLoading] = useState(false);

  // Lazy-load video only when HeroSection enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartLoading(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(document.querySelector("#hero-section"));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="hero-section" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      {startLoading && (
        <motion.video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dybpd6dkz/video/upload/q_auto,f_auto/v1723628192/Glass_WEB_Video1_Re_1_1_ztjjbx.mp4"
          poster="https://res.cloudinary.com/dybpd6dkz/image/upload/q_auto,f_auto/Glass_WEB_Video1_Re_1_1_preview.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Full-Screen Loader */}
      <AnimatePresence>
        {!videoLoaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <Loader2 className="w-16 h-16 text-white animate-spin" />
              <p className="text-white text-lg font-medium tracking-wide">
                Loading...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centered Content */}
      {videoLoaded && (
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Heading with staggered words */}
          <motion.h1 className="text-white my-72 text-[14vw] sm:text-[9vw] md:text-[8vw] lg:text-[10vw] font-extrabold tracking-tight leading-none drop-shadow-lg mb-4 flex flex-wrap justify-center gap-x-2 gap-y-1 sm:gap-x-4">
            {["Enviro", "Safety", "Glass"].map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={wordVariants}
            className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide max-w-xl mx-auto drop-shadow-md mt-2"
          >
            Your Vision Our Glass
          </motion.p>

          {/* Scroll Down Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, 15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: 2,
            }}
            className="mt-12 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 shadow-xl backdrop-blur-sm transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
            onClick={() => {
              const nextSection = document.getElementById("next-section");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <ChevronDown size={24} className="text-white/90 animate-bounce" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
