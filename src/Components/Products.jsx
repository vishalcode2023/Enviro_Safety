import React, { useState } from 'react';
import Navbar from '../Routers/Navbar';
import { motion } from 'framer-motion';
import Footer from './Footer';
import AdditionalPage from './AdditionalPage';

const glassProductsData = [
  {
    id: 'laminated',
    name: 'Laminated Glass',
    description: 'Providing you the best range of Laminated Safety Glass, Laminated Glass, Blue Laminated Glass, Green Laminated Glass and High Quality Laminated Glass with effective & timely delivery.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447906021/XB/LN/KA/13150124/laminated-safety-glass-250x250.jpg', title: 'Laminated Safety Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447906719/UK/EM/FH/13150124/laminated-glass-250x250.jpg', title: 'Laminated Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447900314/XL/HS/SF/13150124/blue-laminated-glass-250x250.jpg', title: 'Blue Laminated Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447907180/ED/LQ/IU/13150124/green-laminated-glass-250x250.jpg', title: 'Green Laminated Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447906441/CP/NG/QN/13150124/high-quality-laminated-glass-250x250.jpg', title: 'High Quality Laminated Glass' },
    ],
  },
  {
    id: 'tempered_safety',
    name: 'Tempered Safety Glass',
    description: 'Offering you a complete choice of products which include Toughened Tempered Safety Glass, Premium Tempered Safety Glass and High Quality Tempered Safety Glass.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447900922/BY/AA/FG/13150124/toughened-tempered-safety-glass-250x250.jpg', title: 'Toughened Tempered Safety Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447902126/EQ/VS/QI/13150124/premium-tempered-safety-glass-250x250.jpg', title: 'Premium Tempered Safety Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447903623/PX/LX/YQ/13150124/high-quality-tempered-safety-glass-250x250.jpg', title: 'High Quality Tempered Safety Glass' },
    ],
  },
  {
    id: 'heat_strengthened',
    name: 'Heat Strengthened Glass',
    description: 'Our product range includes a wide range of Heat Strengthened Glass, Premium Quality Heat Strengthened Glass, High Quality Heat Strengthened Glass and Durable Heat Strengthened Glass.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447904109/DU/TB/ZT/13150124/heat-strengthened-glass-250x250.jpg', title: 'Heat Strengthened Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447904109/DU/TB/ZT/13150124/heat-strengthened-glass-250x250.jpg', title: 'Premium Quality Heat Strengthened Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447904109/DU/TB/ZT/13150124/heat-strengthened-glass-250x250.jpg', title: 'High Quality Heat Strengthened Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447904109/DU/TB/ZT/13150124/heat-strengthened-glass-250x250.jpg', title: 'Durable Heat Strengthened Glass' },
    ],
  },
  {
    id: 'annealed',
    name: 'Annealed Glass',
    description: 'Providing you the best range of Annealed Glass with effective & timely delivery.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447903234/SO/AS/IF/13150124/annealed-glass-250x250.jpg', title: 'Annealed Glass' },
    ],
  },
  {
    id: 'toughened',
    name: 'Toughened Glass',
    description: 'Providing you the best range of Tempered Glass Shower Enclosure with effective & timely delivery.',
    images: [
      { src: 'https://www.aisglass.com/wp-content/uploads/2021/02/shutterstock_750800815.jpg', title: 'Tempered Glass Shower Enclosure' },
    ],
  },
  {
    id: 'shower_enclosure',
    name: 'Shower Enclosure',
    description: 'Providing you the best range of Glass Shower Enclosure with effective & timely delivery.',
    images: [
      { src: 'https://images.unsplash.com/photo-1706670368974-af427a98e816?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Glass Shower Enclosure' },
    ],
  },
  {
    id: 'shower_cubicle',
    name: 'Shower Cubicle',
    description: 'Prominent & Leading Manufacturer from Mysuru, we offer Shower Cubicle.',
    images: [
      { src: 'https://cdn.ecommercedns.uk/files/3/234443/1/22322411/lisna-waters-lw20-1200-x-800-hydro-shower-cabin-left-handed-whit_medium.jpg', title: 'Shower Cubicle' },
    ],
  },
];

const Products = () => {
  const [activeGlassTab, setActiveGlassTab] = useState(glassProductsData[0].id);

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
      <div className=" py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center">

        {/* Glass Products Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 "> {/* Removed bg-white */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#009689] to-teal-700 pb-2"
          >
            Our <span className="text-gray-900">Glass Products</span>
          </motion.h2>

          {/* Tabs for Glass Products */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 p-2 ">
            {glassProductsData.map((productType) => (
              <motion.button
                key={productType.id}
                onClick={() => setActiveGlassTab(productType.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 transform
                  ${activeGlassTab === productType.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {productType.name}
              </motion.button>
            ))}
          </div>

          {/* Content for Active Tab */}
          {glassProductsData.map((productType) => (
            activeGlassTab === productType.id && (
              <motion.div
                key={productType.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                  {productType.name}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
                  {productType.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                  {productType.images.map((image, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200"
                    >
                      <div className="relative w-full h-48 sm:h-56 md:h-64">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover rounded-t-xl"
                          onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/600x400?text=Image+Error';
                            e.currentTarget.alt = 'Image Not Found';
                          }}
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="text-md sm:text-lg font-semibold text-gray-800">{image.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>     
              </motion.div>
            )
          ))}
        </section>
      </div>
      <AdditionalPage/>
      <Footer/>
    </div>
  )
}

export default Products
