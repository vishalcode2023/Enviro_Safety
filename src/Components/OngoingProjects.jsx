import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../Routers/Navbar"; // Assuming this path is correct
import Footer from "./Footer"; // Assuming this path is correct

// --- Define Colors for Consistency (based on your code) ---
const BACKGROUND_COLOR_LIGHT_GRAY = '#F9FAFB'; // A light, clean background
const PRIMARY_TEXT_COLOR_DARK_BLUE = '#1D293D'; // Dark blue for main headings
const ACCENT_COLOR_BLUE = '#0084D1'; // Bright blue for highlights
const SECONDARY_TEXT_COLOR_GRAY = '#4B5563'; // For descriptive text
const OVERLAY_COLOR_BLACK_TRANSPARENT = 'rgba(0, 0, 0, 0.4)'; // For image overlay


// --- Gallery Images Data for the Parallax Grid ---
// Added different heights and captions for variety
const galleryImages = [
  { src: "/Images/partition_Glass1.jpg", alt: "Grey Tinted Glass", caption: "Grey Tinted Glass - Facade", initialY: 0, delay: 0.05 },
  { src: "/Images/partitionGlassextra2.jpg", alt: "Luxury Residential Interior", caption: "Extra Clear Matt Glass", initialY: 30, delay: 0.1 },
  { src: "/Images/FlutedGlass.jpg", alt: "Commercial Building Entrance", caption: "Bronze Fluted Glass", initialY: 0, delay: 0.15 },
  { src: "/Images/BronzeOneWayFluted.jpg", alt: "Skylight Installation", caption: "Bronze One Way Fluted", initialY: 30, delay: 0.2 },
  { src: "/Images/GreyFluted17.jpg", alt: "Grey Fluted Glass", caption: "Grey Fluted Glass", initialY: 0, delay: 0.25 },
  { src: "/Images/Clearmirror12.jpg", alt: "Clear Mirror", caption: "Clear Mirror", initialY: 30, delay: 0.3 },
  { src: "/Images/Bricks1.jpg", alt: "Bespoke Glass Art", caption: "Bricks", initialY: 0, delay: 0.35 },
  { src: "/Images/Bricks51.jpg", alt: "Balcony Glass Railing", caption: "Bricks", initialY: 30, delay: 0.4 },
  { src: "/Images/Frabiclimination19.jpg", alt: "Smart Glass Integration", caption: "Fabric Lamination", initialY: 0, delay: 0.45 },
  { src: "/Images/Frabicliminationgrey20.jpg", alt: "Curved Glass Enclosure", caption: "Fabric Lamination", initialY: 30, delay: 0.5 },
];


// --- Animation Variants ---
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
  }
};

const imageCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0, // This will be overridden by the parallax effect for the grid as a whole, but keeps card animation
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};


const OngoingProjects = () => {
  // Ref for the image grid container to apply parallax
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"] // When target starts entering, to when it leaves
  });

  // Transform scroll position to vertical movement for the image grid
  const imageGridY = useTransform(scrollYProgress, [0, 1], [-100, 100]); // Moves grid up/down by 100px


  return (
    <>
      <Navbar />
      <section className="py-20 md:py-32 px-6" style={{ backgroundColor: BACKGROUND_COLOR_LIGHT_GRAY }}>
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16 md:mb-20">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
              style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Our <span style={{ color: ACCENT_COLOR_BLUE }}>Ongoing Projects</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{ color: SECONDARY_TEXT_COLOR_GRAY }}
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
            >
              Witness the future of architectural innovation taking shape through our current ventures.
            </motion.p>
          </div>

          {/* Project Overview Video Section */}
          <div className="text-center mb-20 md:mb-32">
            <motion.div
              className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mx-auto"
              variants={videoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              
            >
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/Images/ongoing_project_video_poster.jpg" // CHANGE THIS TO YOUR VIDEO POSTER IMAGE
                className="w-full h-full object-cover absolute top-0 left-0"
              >
                <source src="/videos/Ongoing.mp4" type="video/mp4" /> {/* CHANGE THIS TO YOUR VIDEO FILE */}
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Parallax Image Gallery Grid */}
          <div className="text-center mb-16 md:mb-20">
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-4"
                style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3 }}
            >
                Project Highlights Gallery
            </motion.h2>
            <motion.p
                className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
                style={{ color: SECONDARY_TEXT_COLOR_GRAY }}
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4 }}
            >
                A visual journey through the intricate details and grand scale of our current undertakings.
            </motion.p>
          </div>
          
          <motion.div
            ref={galleryRef} // Attach ref for scroll parallax
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 justify-center items-end"
            style={{ y: imageGridY }} // Apply the parallax lift effect here
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative w-full overflow-hidden group cursor-pointer rounded-lg shadow-lg" // Added rounded corners and shadow
                style={{
                  height: index % 2 === 0 ? '280px' : '320px', // Alternating heights
                  marginBottom: image.initialY, // Uses initialY for staggering vertical start
                }}
                variants={imageCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={image.initialY} // Passes custom prop for initial animation offset
                transition={{ delay: image.delay }} // Staggered delay for each image
                whileHover={{ scale: 1.03, zIndex: 10, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Optional: Caption Overlay on Hover */}
                <div 
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: OVERLAY_COLOR_BLACK_TRANSPARENT }} // Use consistent overlay color
                >
                  <p className="text-sm font-semibold">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OngoingProjects;