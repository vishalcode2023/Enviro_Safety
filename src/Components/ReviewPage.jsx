import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "../Routers/Navbar";

const BACKGROUND_COLOR_LIGHT_GRAY = "#F9FAFB";
const PRIMARY_TEXT_COLOR_DARK_BLUE = "#1D293D";
const ACCENT_COLOR_BLUE = "#0084D1";
const SECONDARY_TEXT_COLOR_GRAY = "#4B5563";
const TERTIARY_TEXT_COLOR_DARKER_GRAY = "#374151";
const QUOTES_COLOR_BLUE = "#0084D1";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Architect, Mysuru",
    quote:
      "The glass quality is exceptional. It adds a modern and elegant touch to every project I design.",
    image: "/Images/Test1.jpg",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    title: "Interior Designer, Mysuru",
    quote:
      "I love how customizable and durable these glasses are. Perfect for all kinds of interiors!",
    image: "/Images/Test2.jpg",
  },
  {
    id: 3,
    name: "Vikram Singh",
    title: "Homeowner, Mysuru",
    quote:
      "The soundproof glass has completely changed our home experience. Peaceful and stylish!",
    image: "/Images/Test3.jpg",
  },
  {
    id: 4,
    name: "Meera Patel",
    title: "Hotel Manager, Mysuru",
    quote:
      "Guests always compliment the glass designs in our lobby. It has elevated our brand image.",
    image: "/Images/Test4.jpg",
  },
  {
    id: 5,
    name: "Siddharth Rao",
    title: "Café Owner, Mysuru",
    quote:
      "The decorative glass partitions have completely transformed my café’s interiors. Customers love the aesthetics.",
    image: "/Images/Test5.jpg",
  },
  {
    id: 6,
    name: "Riya Mehta",
    title: "Entrepreneur, Mysuru",
    quote:
      "Beautiful, durable, and premium quality glass. It has given my office a new modern vibe.",
    image: "/Images/Test6.jpg",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
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

const Reviews = () => {
  return (
    <>
      <Navbar />

      {/* === VIDEO SECTION MOVED TO TOP === */}
      <section className="pt-20 md:pt-28 pb-10 bg-gray-50 py-20 px-5">
        <div className="text-center mb-12">
          <motion.h3
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3 }}
          >
            See Our <span className="text-[#0084D1]">Craftsmanship</span>
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
            Watch how our innovative glass solutions are meticulously crafted
            and flawlessly integrated into stunning projects.
          </motion.p>
        </div>

        <motion.div
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mx-auto"
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            poster="/Images/video_poster.jpg"
            className="w-full h-full object-cover absolute top-0 left-0"
          >
            <source src="/videos/Reviewvideo.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>
      </section>

      {/* === TESTIMONIAL SECTION BELOW VIDEO === */}
      <section className="py-20 md:py-32 px-6 bg-gray-50">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Hear from our{" "}
            <span style={{ color: ACCENT_COLOR_BLUE }}>happy clients!</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: SECONDARY_TEXT_COLOR_GRAY }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            Read what architects, designers, and homeowners have to say about
            the exceptional quality and impact of our glass solutions.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              }}
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <p
                  className="italic mb-4"
                  style={{ color: TERTIARY_TEXT_COLOR_DARKER_GRAY }}
                >
                  <span
                    className="text-2xl pr-1"
                    style={{ color: QUOTES_COLOR_BLUE }}
                  >
                    “
                  </span>
                  {testimonial.quote}
                  <span
                    className="text-2xl pl-1"
                    style={{ color: QUOTES_COLOR_BLUE }}
                  >
                    ”
                  </span>
                </p>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: PRIMARY_TEXT_COLOR_DARK_BLUE }}
                >
                  {testimonial.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {testimonial.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Reviews;
