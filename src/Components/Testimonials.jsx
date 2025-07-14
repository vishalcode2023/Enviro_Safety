import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Import necessary modules
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonialsData = [
  {
    id: 1,
    quote: "The manufacturing plant is spic and span. Client cooperation is great. Fast, courteous, and Easy service.",
    name: "Vijay Kumar",
    title: "A Valued Customer",
  },
  {
    id: 2,
    quote: "Enviro Safety Glass delivered exceptional quality and service. Our project wouldn't have been the same without their expertise!",
    name: "Priya Sharma",
    title: "Architectural Firm Lead",
  },
  {
    id: 3,
    quote: "The precision of their glass solutions is unmatched. A truly reliable partner for our manufacturing needs.",
    name: "Rajesh Kumar",
    title: "Automotive Engineer",
  },
  {
    id: 4,
    quote: "Innovative products and a commitment to sustainability. Enviro Safety Glass truly stands out in the industry.",
    name: "Anjali Singh",
    title: "Sustainable Design Consultant",
  },
];

const TestimonialsCarousel = () => { // Renamed component internally
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden" // Added overflow-hidden
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Testimonials</p> */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Hear from Our Happy Customers
        </h2>
        <p className="text-5xl font-bold text-yellow-400 mb-12">"</p> {/* Large quote mark */}

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true} // Enable navigation arrows
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper !pb-10" // Add padding bottom for pagination dots
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible" // Animate each slide as it comes into view
                whileHover="hover"
                className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col h-full items-center justify-center border border-gray-700 hover:border-yellow-500 transition-all duration-300"
              >
                <p className="text-lg sm:text-xl text-gray-300 italic mb-8 leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-xl sm:text-2xl mb-1">{testimonial.name}</p>
                  <p className="text-md text-gray-400">{testimonial.title}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default TestimonialsCarousel; // Exporting the renamed component
