import React from 'react';
import Navbar from '../Routers/Navbar'; // Assuming Navbar is in the same directory or adjust path
import { motion } from 'framer-motion'; // Import motion for animations
import Footer from './Footer';
import AdditionalPage from './AdditionalPage';

const featuresData = [
  {
    feature: 'Process Type',
    description: 'Horizontal Roller-Hearth Convection Furnace',
  },
  {
    feature: 'Glass Types',
    description: 'Clear, extra clear, tinted, solar-control coated, low-E coated',
  },
  {
    feature: 'Additional Processing Capabilities',
    description: 'Ceramic-frit, Innovink digital printing, sand-blasting, acid-etching, holes, cut-outs and notches',
  },
  {
    feature: 'Product Enhancement',
    description: 'Can be converted to ECOSAFE (insulated glass) and LAMISAFE (laminated glass)',
  },
  {
    feature: 'Edge Types',
    description: 'Rough grind, arise, super polished',
  },
  {
    feature: 'Compressive Strength (Surface)',
    description: '69 MPa (10,000 psi) minimum',
  },
  {
    feature: 'Glass Thickness',
    description: '4 mm to 25 mm',
  },
];

const dimensionsData = [
  {
    feature: 'Minimum Size',
    description: '50 mm X 50 mm',
  },
  {
    feature: 'Maximum Size',
    description: '3000 mm X 5000 mm (8 to 12 mm) 2440 mm X 3660 mm (4 mm and 5 mm) 3000 mm X 5100 mm (6 mm) 19mm to 25mm available on request',
  },
];

const Solutions = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12 leading-tight"
        >
          Technical <span className="text-teal-600">Specifications</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl w-full mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200"
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white grid grid-cols-2 text-lg sm:text-xl font-bold uppercase tracking-wide py-5 px-6">
            <div className="col-span-1">Feature</div>
            <div className="col-span-1">Description</div>
          </div>

          {/* Table Rows */}
          {featuresData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid grid-cols-2 py-4 px-6 border-b border-gray-200 last:border-b-0
                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                hover:bg-teal-50 hover:bg-opacity-80 transition-all duration-300
              `}
            >
              <div className="col-span-1 text-gray-800 font-semibold text-base sm:text-lg">
                {item.feature}
              </div>
              <div className="col-span-1 text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* New Dimensions Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mt-16 mb-12 leading-tight"
        >
          Product <span className="text-blue-600">Dimensions</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl w-full mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200"
        >
          {/* Table Header for Dimensions */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white grid grid-cols-2 text-lg sm:text-xl font-bold uppercase tracking-wide py-5 px-6">
            <div className="col-span-1">Feature</div>
            <div className="col-span-1">Description</div>
          </div>

          {/* Table Rows for Dimensions */}
          {dimensionsData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid grid-cols-2 py-4 px-6 border-b border-gray-200 last:border-b-0
                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                hover:bg-blue-50 hover:bg-opacity-80 transition-all duration-300
              `}
            >
              <div className="col-span-1 text-gray-800 font-semibold text-base sm:text-lg">
                {item.feature}
              </div>
              <div className="col-span-1 text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AdditionalPage/>
      <Footer/>
    </div>
  )
}

export default Solutions
