import React, { useState } from "react";
import Navbar from "../Routers/Navbar"; // Adjust path if necessary
import { motion } from "framer-motion";
import Footer from "./Footer"; // Adjust path if necessary
import AdditionalPage from "./AdditionalPage"; // Adjust path if necessary
import { Link } from "react-router-dom";

const glassProductsData = [
  {
    id: "laminated_glass_extra",
    name: "Laminated Glass",
    description:
      "High strength laminated glass designed for enhanced safety, sound insulation, and aesthetics. Available in multiple thicknesses and finishes.",
    images: [
      {
        src: "https://5.imimg.com/data5/SELLER/Default/2024/9/447906021/XB/LN/KA/13150124/laminated-safety-glass-250x250.jpg",
        title: "Standard Laminated Glass",
      },
      {
        src: "https://5.imimg.com/data5/SELLER/Default/2024/9/447906719/UK/EM/FH/13150124/laminated-glass-250x250.jpg",
        title: "Colored Laminated Glass",
      },
    ],
  },
  {
    id: "tempered_safety_glass",
    name: "Tempered Safety Glass",
    description:
      "Durable tempered safety glass designed for impact resistance and shatter protection, ideal for high-traffic areas.",
    images: [
      {
        src: "https://5.imimg.com/data5/SELLER/Default/2024/9/447902126/EQ/VS/QI/13150124/premium-tempered-safety-glass-250x250.jpg",
        title: "Premium Tempered Safety Glass",
      },
      {
        src: "https://5.imimg.com/data5/SELLER/Default/2024/9/447900922/BY/AA/FG/13150124/toughened-tempered-safety-glass-250x250.jpg",
        title: "Toughened Tempered Safety Glass",
      },
    ],
  },
  {
    id: "heat_strengthened_glass",
    name: "Heat Strengthened Glass",
    description:
      "Provides increased strength compared to annealed glass, offering better resistance to thermal stress and impact.",
    images: [
      {
        src: "https://5.imimg.com/data5/SELLER/Default/2024/9/447904109/DU/TB/ZT/13150124/heat-strengthened-glass-250x250.jpg",
        title: "Heat Strengthened Glass",
      },
    ],
  },
  {
    id: "annealed_glass",
    name: "Annealed Glass",
    description:
      "Standard float glass slowly cooled to relieve internal stresses, offering versatility for cutting, drilling, and lamination.",
    images: [
      {
        src: "https://5.imimg.com/data5/SELLER/Default/2024/9/447903234/SO/AS/IF/13150124/annealed-glass-250x250.jpg",
        title: "Annealed Glass",
      },
    ],
  },
  {
    id: "toughened_glass",
    name: "Toughened Glass",
    description:
      "High-strength toughened glass with superior thermal and mechanical resistance, designed for safety and durability.",
    images: [
      {
        src: "https://5.imimg.com/data5/SELLER/Default/2024/9/447900922/BY/AA/FG/13150124/toughened-tempered-safety-glass-250x250.jpg",
        title: "Toughened Glass Panel",
      },
    ],
  },
  {
    id: "shower_enclosure",
    name: "Shower Enclosure",
    description:
      "Modern glass shower enclosures combining durability, style, and ease of maintenance for bathrooms.",
    images: [
      {
        src: "https://www.aisglass.com/wp-content/uploads/2021/02/shutterstock_750800815.jpg",
        title: "Tempered Glass Shower Enclosure",
      },
    ],
  },
  {
    id: "shower_cubicle",
    name: "Shower Cubicle",
    description:
      "Compact and elegant shower cubicles designed to optimize space and enhance bathroom aesthetics.",
    images: [
      {
        src: "https://cdn.ecommercedns.uk/files/3/234443/1/22322411/lisna-waters-lw20-1200-x-800-hydro-shower-cabin-left-handed-whit_medium.jpg",
        title: "Glass Shower Cubicle",
      },
    ],
  },
];

const Products = () => {
  const [activeGlassTab, setActiveGlassTab] = useState("LaminatedGlass");

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
            {activeGlassTab.toUpperCase().replace(/_/g, " ")} GLASS
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
                        ${
                          activeGlassTab === productType.id
                            ? "bg-[#0084D1] text-white font-semibold"
                            : "text-gray-300 hover:bg-[#1D293D] hover:text-white"
                        }`}
                    >
                      <span className="flex-grow">{productType.name}</span>
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
              <div
                className="flex overflow-x-auto whitespace-nowrap pb-4 mb-8 sm:mb-12 md:hidden
                          snap-x snap-mandatory scroll-p-4 no-scrollbar"
              >
                {" "}
                {/* Added scroll utilities and no-scrollbar */}
                {glassProductsData.map((productType) => (
                  <motion.button
                    key={productType.id}
                    onClick={() => setActiveGlassTab(productType.id)}
                    className={`flex-shrink-0 px-6 py-2 rounded-full font-semibold transition-all duration-300 text-base shadow-md mr-3 last:mr-0
                                ${
                                  activeGlassTab === productType.id
                                    ? "bg-[#0084D1] text-white scale-105 shadow-lg" // Increased shadow for active
                                    : "bg-white text-[#1D293D] border border-gray-300 hover:bg-gray-100"
                                }`}
                    whileHover={{
                      scale: 1.07,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }} // Stronger hover shadow
                    whileTap={{ scale: 0.95 }}
                  >
                    {productType.name}
                  </motion.button>
                ))}
              </div>

              {/* Display active product details */}
              {/* Display product details */}
              {(activeGlassTab === "all"
                ? glassProductsData
                : glassProductsData.filter(
                    (productType) => productType.id === activeGlassTab
                  )
              ).map((productType) => (
                <motion.div
                  key={productType.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-7xl mx-auto md:mx-0 mb-12"
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {productType.name}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                    {productType.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
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
                              e.currentTarget.src =
                                "https://placehold.co/600x400?text=Image+Error";
                              e.currentTarget.alt = "Image Not Found";
                            }}
                          />
                        </div>
                        <div className="flex flex-col p-4 sm:p-5 items-center justify-between flex-grow">
                          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 text-center">
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
