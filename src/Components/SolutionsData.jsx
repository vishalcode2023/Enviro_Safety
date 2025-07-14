import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Using Lucide React for icons

const solutionsData = [
  {
    id: 1,
    title: 'Automotive Glass',
    description: 'Enhance safety and aesthetics with our precision-crafted glass solutions for automobiles, engineered to meet the highest standards of quality and durability.',
    icon: '', // Emoji for simplicity, can be replaced with Lucide icon
    number: '01',
  },
  {
    id: 2,
    title: 'Architectural Glass',
    description: 'Transform spaces into masterpieces with our wide range of architectural glass solutions, blending innovation and creativity for unparalleled beauty and functionality.',
    icon: '', // Emoji for simplicity
    number: '02',
  },
  {
    id: 3,
    title: 'Industrial Glass',
    description: 'Find reliable and robust glass processing solutions for industrial applications, designed to withstand challenging environments and deliver optimal performance.',
    icon: '', // Emoji for simplicity
    number: '03',
  },
  {
    id: 4,
    title: 'Interior Solutions',
    description: 'Discover the future of living with our ModDwell Glass range, offering an array of visionary glass products that redefine interior design and elevate daily experiences.',
    icon: '', // Emoji for simplicity
    number: '04',
  },
];

const SolutionsOverview = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" },
  };

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12"
        >
          Our <span className="text-yellow-400">Core Solutions</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionsData.map((solution, index) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-start text-white border border-gray-700 hover:border-yellow-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-5xl font-bold text-gray-500 mr-4">{solution.number}</span>
                <span className="text-4xl text-yellow-400">{solution.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{solution.title}</h3>
              <p className="text-gray-400 text-base mb-6 flex-grow">{solution.description}</p>
  
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsOverview;
