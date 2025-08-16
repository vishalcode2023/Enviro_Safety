import React from 'react';
import { motion } from 'framer-motion';

const ShowcaseGrid = () => {
  const data = [
    {
      title: "COMMERCIAL BUILDINGS",
      subtitle: "LAMINATED SAFETY GLASS",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754650684/WhatsApp_Image_2025-08-08_at_4.26.43_PM_ndi6og.jpg",
    },
    {
      title: "RESIDENTIAL WORKS",
      subtitle: "LACQUERED GLASS - SAINT GOBAIN",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754646889/_DSC4876_qfzqqt.jpg",
    },
    {
      title: "INSTITUTIONAL PROJECTS",
      subtitle: "DECORATIVE SAFETY GLASS",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754651031/WhatsApp_Image_2025-08-08_at_4.33.22_PM_wytaiy.jpg",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sky-600 font-semibold uppercase tracking-wider mb-2"
        >
          Our Showcase
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-10xl lg:text-5xl font-extrabold text-gray-800"
        >
          Future Map
        </motion.h2>
      </div>

      {/* Grid Section */}
      <div className="space-y-16">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="w-full lg:w-2/3 relative overflow-hidden rounded-xl shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-8 left-8 z-10 text-white">
                <h2 className="text-3xl md:text-4xl font-bold">{item.title}</h2>
              </div>
            </div>

            {/* Subtitle */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-1 w-10 bg-black"></div>
                <span className="uppercase tracking-wider text-gray-700 font-medium text-sm">
                  {item.subtitle}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseGrid;
