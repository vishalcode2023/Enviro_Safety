import React from "react";
import Footer from "./Footer";
import Navbar from "../Routers/Navbar";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Architect, Bangalore",
    quote:
      "The glass quality is exceptional. It adds a modern and elegant touch to every project I design.",
    image: "/Images/Test1.jpg",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    title: "Interior Designer, Mumbai",
    quote:
      "I love how customizable and durable these glasses are. Perfect for all kinds of interiors!",
    image: "/Images/Test2.jpg",
  },
  {
    id: 3,
    name: "Vikram Singh",
    title: "Homeowner, Delhi",
    quote:
      "The soundproof glass has completely changed our home experience. Peaceful and stylish!",
    image: "/Images/Test3.jpg",
  },
  {
    id: 4,
    name: "Meera Patel",
    title: "Hotel Manager, Jaipur",
    quote:
      "Guests always compliment the glass designs in our lobby. It has elevated our brand image.",
    image: "/Images/Test4.jpg",
  },
  {
    id: 5,
    name: "Siddharth Rao",
    title: "Café Owner, Kochi",
    quote:
      "The decorative glass partitions have completely transformed my café’s interiors. Customers love the aesthetics.",
    image: "/Images/Test5.jpg",
  },
  {
    id: 6,
    name: "Riya Mehta",
    title: "Entrepreneur, Pune",
    quote:
      "Beautiful, durable, and premium quality glass. It has given my office a new modern vibe.",
    image: "/Images/Test6.jpg",
  },
];

const Reviews = () => {
  return (
    <>
    <Navbar/>
      <section className="py-38 px-6  bg-gray-50">
        {/* Title */}
        <h2 className="text-5xl font-bold text-darkBlue text-center mb-12 text-[#1D293D]">
          Hear from our <span className="text-[#0084D1]">happy clients!</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              {/* Image Section */}
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Section */}
              <div className="p-6">
                <p className="text-gray-700 italic mb-4">
                  “{testimonial.quote}”
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {testimonial.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Reviews;
