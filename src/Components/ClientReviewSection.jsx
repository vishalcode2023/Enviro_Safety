import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react'; // Icons for reviews

// --- Define Colors for Consistency (based on your reference image) ---
const BACKGROUND_COLOR_WHITE = '#FFFFFF';
const PRIMARY_TEXT_COLOR_DARK_BLUE = '#1E3A8A'; // Dark blue for main ABOUT text
const ACCENT_COLOR_BLUE = '#3B82F6'; // Bright blue for US text and accents
const SECONDARY_TEXT_COLOR_GRAY = '#4B5563'; // Gray for descriptions and review text
const TERTIARY_TEXT_COLOR_LIGHT_GRAY = '#6B7280'; // Lighter gray for names/roles

// --- Client Review Data ---
const clientReviews = [
  {
    name: "Architectural Visionaries Inc.",
    role: "Lead Architect, The Apex Tower",
    rating: 5,
    quote: "Enviro Safety Glass delivered beyond expectation. Their bespoke solutions for The Apex Tower were not only aesthetically stunning but also met the most stringent safety standards. A truly innovative partner.",
  },
  {
    name: "Urban Developments Ltd.",
    role: "Project Manager, Grand Residences",
    rating: 5,
    quote: "The quality and precision of Enviro Safety Glass products are unparalleled. Their team worked seamlessly with ours, ensuring timely delivery and impeccable installation for the Grand Residences project.",
  },
  {
    name: "Eco-Design Studios",
    role: "Founder, Green Eco-Hub",
    rating: 4,
    quote: "We were particularly impressed with their commitment to sustainable practices. Enviro Safety Glass provided eco-friendly glass options that perfectly aligned with our Green Eco-Hub's environmental goals.",
  },
  {
    name: "Innovate Interiors Co.",
    role: "Interior Designer, Modern Office Spaces",
    rating: 5,
    quote: "For our modern office spaces, we needed sleek, durable, and sound-reducing glass. Enviro Safety Glass offered solutions that transformed the office, enhancing both function and form. Highly recommended.",
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } // Slightly delayed entrance
  }
};


// --- Client Review Section Component ---
const ClientReviewSection = () => {
  return (
    <section style={{ backgroundColor: BACKGROUND_COLOR_WHITE }} className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 md:mb-20">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-4"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <span style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}>CLIENT</span>
            <br />
            <span style={{ color: ACCENT_COLOR_BLUE }}>REVIEWS</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mt-6 max-w-2xl"
            style={{ color: SECONDARY_TEXT_COLOR_GRAY }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            Hear directly from our satisfied partners and discover the impact of our glass solutions.
          </motion.p>
        </div>

        {/* Client Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32">
          {clientReviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              style={{ borderTop: `4px solid ${ACCENT_COLOR_BLUE}` }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < review.rating ? ACCENT_COLOR_BLUE : 'none'}
                    stroke={ACCENT_COLOR_BLUE}
                    strokeWidth={1.5}
                    className="mr-1"
                  />
                ))}
              </div>
              <p className="text-lg italic mb-6" style={{ color: SECONDARY_TEXT_COLOR_GRAY }}>
                <Quote size={20} className="inline-block mr-2 text-gray-400 -translate-y-1" />
                {review.quote}
              </p>
              <p className="font-bold" style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}>{review.name}</p>
              <p className="text-sm" style={{ color: TERTIARY_TEXT_COLOR_LIGHT_GRAY }}>{review.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial / Corporate Video Section */}
        <motion.div
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mx-auto"
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ maxWidth: '1000px', border: `4px solid ${ACCENT_COLOR_BLUE}` }}
        >
          {/* Replace with your actual video embed code (e.g., YouTube, Vimeo iframe) */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&mute=1&modestbranding=1&rel=0"
            title="Enviro Safety Glass Customer Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
          {/* Or for a simple <video> tag if you host the video directly */}
          {/*
          <video 
            controls 
            className="w-full h-full object-cover"
            poster="https://via.placeholder.com/1920x1080/E0F2F7/3B82F6?text=Video+Thumbnail" // Placeholder thumbnail
          >
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          */}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default ClientReviewSection;