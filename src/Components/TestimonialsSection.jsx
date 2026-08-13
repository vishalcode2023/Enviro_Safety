import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Import motion for animations
import { PlayCircle } from "lucide-react"; // Optional: for a play button overlay on video

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// --- Define Colors for Consistency (based on your reference image and existing code) ---
const BACKGROUND_COLOR_WHITE = "#FFFFFF";
const PRIMARY_TEXT_COLOR_DARK_BLUE = "#1D293D"; // This matches your h2 text color
const ACCENT_COLOR_BLUE = "#0084D1"; // This matches your h2 span color
const SECONDARY_TEXT_COLOR_GRAY = "#4B5563"; // For sub-headlines and descriptive text
const TERTIARY_TEXT_COLOR_LIGHT_GRAY = "#6B7280"; // For names/roles in cards (if you uncomment)

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row h-full min-h-[320px] overflow-hidden">
      {/* Left image section */}
      <div className="md:w-1/3 w-full h-64 md:h-auto">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right text section */}
      <div className="p-6 flex flex-col justify-center text-center md:text-left md:w-2/3">
        <p
          className="text-lg font-semibold mb-4"
          style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}
        >
          <span className="text-2xl pr-1" style={{ color: ACCENT_COLOR_BLUE }}>
            “
          </span>
          {testimonial.quote}
          <span className="text-2xl pl-1" style={{ color: ACCENT_COLOR_BLUE }}>
            ”
          </span>
        </p>
        <p
          className="font-bold text-xl"
          style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}
        >
          {testimonial.name}
        </p>
        {/* Uncomment the line below if you want to display the title/role */}
        {/* <p className="text-sm" style={{ color: TERTIARY_TEXT_COLOR_LIGHT_GRAY }}>{testimonial.title}</p> */}
      </div>
    </div>
  );
};

// --- Animation Variants ---
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ravi Kumar",
      title: "Architect, Bengaluru",
      quote:
        "The quality of the safety glass was outstanding. Perfect clarity and durability — it has added a premium look to our office space.",
      image: "/Images/Test1.jpg",
    },
    {
      id: 2,
      name: "Anjali Sharma",
      title: "Interior Designer, Mumbai",
      quote:
        "We used their fluted glass for a recent project. Clients loved the modern touch, and the finish was flawless!",
      image: "/Images/Test2.jpg",
    },
    {
      id: 3,
      name: "Vikram Patel",
      title: "Homeowner, Ahmedabad",
      quote:
        "Installed tempered glass for our balcony. It feels safe, stylish, and easy to maintain. Truly satisfied with the service.",
      image: "/Images/Test3.jpg",
    },
    {
      id: 4,
      name: "Priya Nair",
      title: "Café Owner, Kochi",
      quote:
        "The decorative glass partitions have completely transformed my café’s interiors. Customers keep complimenting the aesthetics.",
      image: "/Images/Test4.jpg",
    },
    {
      id: 5,
      name: " Vikram ",
      title: "Café Owner, Kochi",
      quote:
        "The decorative glass partitions have completely transformed my café’s interiors. Customers keep complimenting the aesthetics.",
      image: "/Images/Test5.jpg",
    },
    {
      id: 6,
      name: "Arjun Mehta",
      title: "Hotel Manager, Mumbai",
      quote:
        "We installed their glass doors in our lobby and the ambience changed overnight. Guests love the modern look.",
      image: "/Images/Test6.jpg",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 font-sans"
      style={{ backgroundColor: BACKGROUND_COLOR_WHITE }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold leading-tight"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <span style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}>
              Hear from our{" "}
            </span>
            <span style={{ color: ACCENT_COLOR_BLUE }}>happy clients!</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mt-4 max-w-3xl mx-auto"
            style={{ color: SECONDARY_TEXT_COLOR_GRAY }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            Discover how Enviro Safety Glass has transformed spaces and elevated
            experiences for our valued partners.
          </motion.p>
        </div>

        {/* Testimonials Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mb-20 md:mb-28" // Added margin below Swiper
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="pb-12 h-full">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Video Testimonial / Corporate Video Section */}
        <div className="text-center mb-12 mt-16 md:mt-24">
          <motion.h3
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3 }}
          >
            See Our Impact in Action
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
            style={{ color: SECONDARY_TEXT_COLOR_GRAY }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 }}
          >
            Watch how our innovative glass solutions are implemented in
            real-world projects.
          </motion.p>
        </div>

        <motion.div
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mx-auto"
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // style={{ maxWidth: '1000px', border: `4px solid ${ACCENT_COLOR_BLUE}` }} // Blue border for consistency
        >
          {/* Replace with your actual video embed code (e.g., YouTube, Vimeo iframe) */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/videos/Reviewvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            title="Enviro Safety Glass Solutions Video"
          ></video>

          {/* Optional: Overlay with a play button if you want to control play behavior
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <PlayCircle size={80} color="white" fill="white" className="cursor-pointer hover:scale-110 transition-transform"/>
          </div>
          */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
