import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row h-full min-h-[320px] overflow-hidden">
      {/* Left image section (Full Height Image) */}
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
      name: 'Carol Danvers',
      title: 'UX Designer',
      quote:
        "We've been working with Vaneza.co on multiple projects. They consistently deliver high quality designs for all our platforms. Highly recommended!",
      image: 'https://imgs.search.brave.com/jrJ4UGG7H_q6AUtQvoCdEWFYop4h2X660AU8ZwRXw-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1jaGVlcmZ1/bC1oYXBweS1naXJs/LXNtaWxpbmctbGF1/Z2hpbmctd2l0aC1j/bG9zZWQtZXllc18x/NzY0MjAtOTYwMi5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw',
    },
    {
      id: 2,
      name: 'Desh Rath',
      title: 'UX Specialist',
      quote:
        "They always prioritize user experience and provide thoughtful recommendations. Truly professional and efficient.",
      image: 'https://imgs.search.brave.com/0Yon9Dz1tiTLLUbQaI1O1RtZrRQ44YAftxQ8qafU8tk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzE1LzQ5LzQ4/LzM2MF9GXzEyMTU0/OTQ4ODlfOHN1UnBw/UFBSUk5IcW4walNm/SDltTjdGS0RmMnpx/bWkuanBn',
    },
    {
      id: 3,
      name: 'Jane Doe',
      title: 'Product Manager',
      quote:
        'Fantastic service! Visually appealing and user-friendly designs. Delivered exactly what we envisioned.',
      image: 'https://imgs.search.brave.com/goM1In0U1xsSTmaH47JTqyNCnqkrbogd-CFKH49iKss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9zaHV0dGVy/c3RvY2svcGhvdG9z/LzE4NjUxNTMzOTUv/ZGlzcGxheV8xNTAw/L3N0b2NrLXBob3Rv/LXBvcnRyYWl0LW9m/LXlvdW5nLXNtaWxp/bmctd29tYW4tbG9v/a2luZy1hdC1jYW1l/cmEtd2l0aC1jcm9z/c2VkLWFybXMtaGFw/cHktZ2lybC1zdGFu/ZGluZy1pbi0xODY1/MTUzMzk1LmpwZw',
    },
    {
      id: 4,
      name: 'John Smith',
      title: 'CEO, Tech Solutions',
      quote:
        'Working with this team has transformed our product. Their attention to detail is exceptional.',
      image: 'https://imgs.search.brave.com/k_EBpeJxtvQnaFCvScU83zpIugS8962RqUYBmLBGkkw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzE3LzE4Lzgz/LzM2MF9GXzE1MTcx/ODgzODRfcUM3UzBl/ckpLdDhDWVJFc3lN/SGUwbGFuaGxSYnE5/TGcuanBn',
    },
  ];

  return (
    <section className="py-16  font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-darkBlue text-center mb-12 text-[#1D293D]">
          Listen from our <span className='text-[#0084D1]'>clients!</span>
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
            delay: 2500,
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
