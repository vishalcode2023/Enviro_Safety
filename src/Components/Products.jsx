import React, { useState } from 'react';
import Navbar from '../Routers/Navbar'; // Adjust path if necessary
import { motion } from 'framer-motion';
import Footer from './Footer'; // Adjust path if necessary
import AdditionalPage from './AdditionalPage'; // Adjust path if necessary
import { Link } from 'react-router-dom';

const glassProductsData = [
  {
    id: 'clear_glass',
    name: 'Clear Glass',
    description: 'Our standard clear glass provides excellent light transmission and clarity, perfect for a wide range of applications requiring transparency.',
    images: [
      { src: 'https://via.placeholder.com/300x200?text=Clear+Glass', title: 'Standard Clear Glass' },
      { src: 'https://via.placeholder.com/300x200?text=Pure+Transparency', title: 'Pure Transparency' },
    ],
  },
  {
    id: 'extra_clear_glass',
    name: 'Extra Clear Glass',
    description: 'Experience superior clarity with our extra clear glass, also known as low-iron glass. It offers maximum light transmission and a neutral edge appearance, eliminating the green tint common in standard glass.',
    images: [
      { src: 'https://via.placeholder.com/300x200?text=Extra+Clear+Glass+Panel', title: 'Extra Clear Glass Panel' },
      { src: 'https://via.placeholder.com/300x200?text=Low+Iron+Glass', title: 'Low Iron Glass' },
      { src: 'https://via.placeholder.com/300x200?text=Enhanced+Clarity', title: 'Enhanced Clarity' },
    ],
  },
  {
    id: 'toughened_tempered',
    name: 'Toughened / Tempered Glass',
    description: 'Offering you a complete choice of products which include Toughened Tempered Safety Glass, Premium Tempered Safety Glass and High Quality Tempered Safety Glass.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447900922/BY/AA/FG/13150124/toughened-tempered-safety-glass-250x250.jpg', title: 'Toughened Tempered Safety Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447902126/EQ/VS/QI/13150124/premium-tempered-safety-glass-250x250.jpg', title: 'Premium Tempered Safety Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447903623/PX/LX/YQ/13150124/high-quality-tempered-safety-glass-250x250.jpg', title: 'High Quality Tempered Safety Glass' },
    ],
  },
  {
    id: 'laminated_glass_office',
    name: 'Laminated Glass for Office Workstation - 25 Colors',
    description: 'Providing you the best range of Laminated Safety Glass, Laminated Glass, Blue Laminated Glass, Green Laminated Glass and High Quality Laminated Glass with effective & timely delivery.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447906021/XB/LN/KA/13150124/laminated-safety-glass-250x250.jpg', title: 'Laminated Safety Glass' },
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447906719/UK/EM/FH/13150124/laminated-glass-250x250.jpg', title: 'Laminated Glass' },
    ],
  },
  {
    id: 'fabric_laminated_glass',
    name: 'Fabric Laminated Glass',
    description: 'Our product range includes a wide range of Heat Strengthened Glass, Premium Quality Heat Strengthened Glass, High Quality Heat Strengthened Glass and Durable Heat Strengthened Glass.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447904109/DU/TB/ZT/13150124/heat-strengthened-glass-250x250.jpg', title: 'Fabric Laminated Glass Sample' },
    ],
  },
  {
    id: 'design_glass',
    name: 'Design Glass',
    description: 'Prominent & Leading Manufacturer from Mysuru, we offer Shower Cubicle.',
    images: [
      { src: 'https://cdn.ecommercedns.uk/files/3/234443/1/22322411/lisna-waters-lw20-1200-x-800-hydro-shower-cabin-left-handed-whit_medium.jpg', title: 'Abstract Design Glass' },
    ],
  },
  {
    id: 'lacquered_glass_45_colors',
    name: 'Lacquered Glass - 45 Colors',
    description: 'Providing you the best range of Tempered Glass Shower Enclosure with effective & timely delivery.',
    images: [
      { src: 'https://www.aisglass.com/wp-content/uploads/2021/02/shutterstock_750800815.jpg', title: 'Colored Lacquered Glass' },
    ],
  },
  {
    id: 'glass_blocks',
    name: 'Glass Blocks',
    description: 'Providing you the best range of Laminated Safety Glass, Laminated Glass, Blue Laminated Glass, Green Laminated Glass and High Quality Laminated Glass with effective & timely delivery.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447906021/XB/LN/KA/13150124/laminated-safety-glass-250x250.jpg', title: 'Standard Glass Blocks' },
    ],
  },
  {
    id: 'glass_pillars',
    name: 'Glass Pillars',
    description: 'Offering you a complete choice of products which include Toughened Tempered Safety Glass, Premium Tempered Safety Glass and High Quality Tempered Safety Glass.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447900922/BY/AA/FG/13150124/toughened-tempered-safety-glass-250x250.jpg', title: 'Decorative Glass Pillar' },
    ],
  },
  {
    id: 'clear_extra_clear_mirrors',
    name: 'Clear and Extra Clear Mirrors',
    description: 'Our product range includes a wide range of Heat Strengthened Glass, Premium Quality Heat Strengthened Glass, High Quality Heat Strengthened Glass and Durable Heat Strengthened Glass.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447904109/DU/TB/ZT/13150124/heat-strengthened-glass-250x250.jpg', title: 'Clear Mirror' },
    ],
  },
  {
    id: 'crystallia_mirrors',
    name: 'Crystallia Mirrors',
    description: 'Providing you the best range of Annealed Glass with effective & timely delivery.',
    images: [
      { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447903234/SO/AS/IF/13150124/annealed-glass-250x250.jpg', title: 'Crystallia Mirror Design' },
    ],
  },
  {
    id: 'led_mirrors',
    name: 'LED Mirrors',
    description: 'Providing you the best range of Tempered Glass Shower Enclosure with effective & timely delivery.',
    images: [
      { src: 'https://www.aisglass.com/wp-content/uploads/2021/02/shutterstock_750800815.jpg', title: 'Illuminated LED Mirror' },
    ],
  },
  {
    id: 'butchwork_design_glass',
    name: 'Butchwork Design Glass',
    description: 'Providing you the best range of Glass Shower Enclosure with effective & timely delivery.',
    images: [
      { src: 'https://images.unsplash.com/photo-1706670368974-af427a98e816?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Artistic Butchwork Glass' },
    ],
  },
  {
    id: 'glass_mosaic',
    name: 'Glass Mosaic',
    description: 'Prominent & Leading Manufacturer from Mysuru, we offer Shower Cubicle.',
    images: [
      { src: 'https://cdn.ecommercedns.uk/files/3/234443/1/22322411/lisna-waters-lw20-1200-x-800-hydro-shower-cabin-left-handed-whit_medium.jpg', title: 'Colorful Glass Mosaic' },
    ],
  },
  {
    id: 'creative_resins_europe',
    name: 'Creative Resins Europe',
    description: 'A range of innovative resin products for glass decoration and creative applications from Europe.',
    images: [
      { src: 'https://via.placeholder.com/300x200?text=Creative+Resins', title: 'Resin Decorated Glass' },
    ],
  },
];


const Products = () => {
  const [activeGlassTab, setActiveGlassTab] = useState('extra_clear_glass');

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <div className="pt-28 px-4 sm:px-6 lg:px-16 min-h-screen">
        <section className="py-16">
          {/* Main Title - Mobile Adjustments */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 sm:mb-12 leading-tight text-left
                       bg-clip-text  text-gray-700"
          >
            {activeGlassTab.toUpperCase().replace(/_/g, ' ')} GLASS
            {/* Underline for mobile remains left-aligned */}
            <div className="h-1 bg-[#1D293D] w-20 mt-4"></div>
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar for product categories (md and up) */}
            <div className="md:w-1/4 lg:w-1/5 bg-[#1D293D] p-6 rounded-lg md:block hidden text-white">
              <h3 className="text-xl font-bold mb-6 uppercase">
                Products Available
              </h3>
              <ul className="space-y-3">
                {glassProductsData.map((productType) => (
                  <li key={productType.id}>
                    <button
                      onClick={() => setActiveGlassTab(productType.id)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 text-base font-medium flex items-center justify-between
                        ${activeGlassTab === productType.id
                          ? 'bg-[#0084D1] text-white font-semibold'
                          : 'text-gray-300 hover:bg-[#1D293D] hover:text-white'
                        }`}
                    >
                      <span className="flex-grow">
                        {productType.name}
                      </span>
                      {activeGlassTab === productType.id && (
                        <span className="h-full w-1 bg-white rounded-full block ml-2 self-stretch"></span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content Area */}
            <div className="md:w-3/4 lg:w-4/5">
              {/* Product category buttons for small screens - Enhanced for mobile */}
              <div className="flex overflow-x-auto whitespace-nowrap pb-4 mb-8 sm:mb-12 md:hidden
                          snap-x snap-mandatory scroll-p-4 no-scrollbar"> {/* Added scroll utilities and no-scrollbar */}
                {glassProductsData.map((productType) => (
                  <motion.button
                    key={productType.id}
                    onClick={() => setActiveGlassTab(productType.id)}
                    className={`flex-shrink-0 px-6 py-2 rounded-full font-semibold transition-all duration-300 text-base shadow-md mr-3 last:mr-0
                                ${activeGlassTab === productType.id
                                  ? 'bg-[#0084D1] text-white scale-105 shadow-lg' // Increased shadow for active
                                  : 'bg-white text-[#1D293D] border border-gray-300 hover:bg-gray-100'
                                }`}
                    whileHover={{ scale: 1.07, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} // Stronger hover shadow
                    whileTap={{ scale: 0.95 }}
                  >
                    {productType.name}
                  </motion.button>
                ))}
              </div>

              {/* Display active product details */}
              {glassProductsData.map((productType) => (
                activeGlassTab === productType.id && (
                  <motion.div
                    key={productType.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto md:mx-0"
                  >
                    <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 text-left leading-relaxed"> {/* Text alignment for description */}
                      {productType.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8"> {/* Adjusted gap */}
                      {productType.images.map((image, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.3 }}
                          className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.04] hover:shadow-2xl border border-gray-200 flex flex-col"
                        >
                          <div className="relative w-full h-56 sm:h-64 md:h-72">
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-full object-cover rounded-t-2xl"
                              onError={(e) => {
                                e.currentTarget.src = 'https://placehold.co/600x400?text=Image+Error';
                                e.currentTarget.alt = 'Image Not Found';
                              }}
                            />
                          </div>
                          <div className="flex flex-col p-4 sm:p-5 items-center justify-between flex-grow"> {/* Adjusted padding */}
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center"> {/* Adjusted text size */}
                              {image.title}
                            </h4>
                            <Link to="/contact" className="w-full">
                              <button className="w-full bg-[#0084D1] hover:bg-blue-700 text-white py-2.5 px-5 rounded-full text-sm font-semibold transition-all duration-300">
                                Talk with Expert
                              </button>
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </section>
      </div>
      <AdditionalPage />
      <Footer />
    </div>
  );
};

export default Products;