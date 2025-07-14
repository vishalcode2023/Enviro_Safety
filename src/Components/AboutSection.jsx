import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // For carousel navigation, if implemented

const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F4F9F8] text-gray-900">
      {/* Left Section: Image Carousel / Showcase */}
      <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center p-4 lg:p-8">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full max-w-lg lg:max-w-none h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Main Image */}
          <img
            src="https://res.cloudinary.com/dt2juqy9s/image/upload/v1752327404/Screenshot_2025-07-12_190628_hirq7b.png"
            alt="Modern Glass Building"
            className="w-full h-full object-cover"
          />
          {/* Optional: Navigation Arrows for a carousel if multiple images were used */}
          {/*
          <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"><ChevronLeft size={24} /></button>
          <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"><ChevronRight size={24} /></button>
          */}
        </motion.div>

        {/* Stats Cards */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-lg lg:max-w-none">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 bg-[#1a446c] text-white p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-4xl sm:text-5xl font-extrabold">500+</p>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 bg-gray-800 text-white p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
            <p className="text-4xl sm:text-5xl font-extrabold">750+</p>
          </motion.div>
        </div>
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-sm sm:text-base font-semibold text-gray-600 mb-4 uppercase tracking-widest"
        >
          About Enviro Safety Glass
        </motion.p>

        <motion.h1
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 text-gray-800"
        >
          Precision. <br />
          Excellence. <br />
          Innovation.
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
        >
          Enviro Safety Glass is a leading manufacturer of high-quality glass solutions,
          committed to delivering superior products for automotive, architectural,
          and specialized industrial applications. With decades of experience,
          we blend advanced technology with sustainable practices to meet the evolving
          needs of our clients.
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8"
        >
          We pride ourselves on our environmentally conscious production methods and
          our pioneering work in Digital Ceramic Printing and Smart Glass solutions.
          Every year, we supply over 1 million square meters of glass products,
          ensuring safety, durability, and aesthetic appeal for every project.
        </motion.p>

        {/* Call to Action Button */}
        {/* <motion.button
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 sm:px-10 sm:py-4 bg-teal-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 self-start"
        >
          Discover Our Story
        </motion.button> */}
      </div>
    </div>
  );
};

export default AboutSection;
