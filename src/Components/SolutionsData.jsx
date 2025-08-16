import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SolutionsData = () => {
  const images = [
    "https://res.cloudinary.com/dybpd6dkz/image/upload/q_auto,f_auto/v1754646019/_DSC4937_ydcjbv.jpg",
    "https://res.cloudinary.com/dybpd6dkz/image/upload/q_auto,f_auto/v1754646616/_DSC4892_vvbysp.jpg",
    "https://res.cloudinary.com/dybpd6dkz/image/upload/q_auto,f_auto/v1754646745/_DSC4946_bdxoos.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Preload the next image
  useEffect(() => {
    const nextIndex = (currentImage + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [currentImage]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative w-full bg-white px-4 sm:px-8 py-16 sm:py-24"
      id="next-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Side: Sliding Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-[600px] h-auto mx-auto relative"
        >
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Enviro Safety Glass product ${currentImage + 1}`}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[#1D293D] relative"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Welcome to{" "}
            <span className="underline decoration-4 decoration-[#0084D1] underline-offset-4">
              Enviro Safety Glass
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-[#1D293D]/80"
          >
            At{" "}
            <span className="text-[#0084D1] font-semibold">
              Enviro Safety Glass
            </span>
            , we craft high-performance glass solutions that combine strength,
            style, and safety.
            <br />
            <br />
            Our vision:{" "}
            <em className="text-[#0084D1] font-bold">
              "Your Vision. Our Glass."
            </em>{" "}
            — where modern design meets unmatched craftsmanship.
          </motion.p>

          {/* Decorative Divider */}
          <div className="mt-8 sm:mt-10">
            <motion.div
              animate={{ width: ["0%", "75%"] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-1 bg-[#0084D1] rounded-full shadow-md"
            ></motion.div>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">
              Our products are
            </h3>

            <div className="flex flex-wrap gap-3 text-sm sm:text-base font-medium uppercase tracking-wide">
              {[
                "Increased Strength",
                "Humidity Resistant",
                "Shatterproof",
                "UV Resistant",
              ].map((feature, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-2 bg-[#0084D1]/10 text-[#0084D1] rounded-full transition"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 sm:mt-10"
          >
            <Link
              to="/Products"
              className="inline-block bg-[#0084D1] hover:bg-[#0070B8] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              View Our Products
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Background Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[100px] sm:text-[150px] font-black text-[#1D293D] hidden lg:block pointer-events-none select-none"
        >
          01
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsData;
