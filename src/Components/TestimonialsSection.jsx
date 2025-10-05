import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
        <p className="text-darkBlue text-lg font-semibold mb-4">
          <span className="text-accentBlue text-2xl pr-1">“</span>
          {testimonial.quote}
          <span className="text-accentBlue text-2xl pl-1">”</span>
        </p>
        <p className="text-darkBlue font-bold text-xl">{testimonial.name}</p>
        {/* <p className="text-gray-600 text-sm">{testimonial.title}</p> */}
      </div>
    </div>
  );
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
    <section className="py-16 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-darkBlue text-center mb-12 text-[#1D293D]">
          Hear from our <span className="text-[#0084D1]">happy clients!</span>
        </h2>

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
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="pb-12 h-full">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
