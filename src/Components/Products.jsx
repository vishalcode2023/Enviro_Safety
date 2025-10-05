import React, { useState } from "react";
import Navbar from "../Routers/Navbar";
import { motion } from "framer-motion";
import Footer from "./Footer";
import AdditionalPage from "./AdditionalPage";
import { Link } from "react-router-dom";
import ProductVideo from "./ProductVideo";

const glassProductsData = [
  {
    id: " Lacquered Glass",
    name: " Lacquered Glass",
    description:
      "Stylish and functional Lacquered Glass solutions for your interiors.",
    images: [
      {
        src: "/Images/ultrawhite15.jpg",
        title: "Ultra White Glass",
      },
    ],
  },
  {
    id: " Partition glass",
    name: " Partition glass",
    description:
      "Stylish and functional  partition glass solutions for your interiors.",
    images: [
      { src: "/Images/partition_Glass1.jpg", title: "Grey Tinted Glass" },
      { src: "/Images/partitionGlassextra2.jpg", title: "Extra Clear Matt Glass" },
      { src: "/Images/clearsplash.jpg", title: "Clear Splash Glass" },
      { src: "/Images/Extraclearmatt.jpg", title: "Extra Clear Matt Glass" },
      { src: "/Images/HitchCrossGlass13.jpg", title: " Hitch Cross Glass" },
      { src: "/Images/BronzeTinted16.jpg", title: " Bronze Tinted Glass" },
    ],
  },
  {
    id: "Fluted Glass",
    name: "Fluted Glass",
    description:
      "Collection of Fluted Glass for decorative and functional use.",
    images: [
      { src: "/Images/FlutedGlass.jpg", title: "Bronze Fluted Glass" },
      { src: "/Images/Clearflutedglass.jpg", title: "Clear Fluted Glass" },
      { src: "/Images/BronzeOneWayFluted.jpg", title: "Bronze One Way Fluted" },
      { src: "/Images/ConvexFluted11.jpg", title: "Convex Fluted Glass" },
      { src: "/Images/ChampagneFluted14.jpg", title: "Champagne Fluted Glass" },
      { src: "/Images/GreyFluted17.jpg", title: "Grey Fluted Glass" },
    ],
  },
  {
    id: "mirror",
    name: "Mirror",
    description: "Collection of mirrors for decorative and functional use.",
    images: [
      { src: "/Images/clearmirror3.jpg", title: "Clear Mirror" },
      { src: "/Images/GreyMattMinrror.jpg", title: "Grey Matt Mirror" },
      { src: "/Images/Extraclearmirror.jpg", title: "Extra Clear Mirror" },
      { src: "/Images/Clearmirror12.jpg", title: "Clear Mirror" },
    ],
  },
  {
    id: "bricks",
    name: "Bricks",
    description: "High-strength construction bricks for building projects.",
    images: [
      { src: "/Images/Bricks1.jpg", title: "Bricks" },
      { src: "/Images/Bricks38.jpg", title: "Bricks" },
      { src: "/Images/Bricks39.jpg", title: "Bricks" },
      { src: "/Images/Bricks40.jpg", title: "Bricks" },
      { src: "/Images/Bricks41.jpg", title: "Bricks" },
      { src: "/Images/Bricks42.jpg", title: "Bricks" },
      { src: "/Images/Bricks43.jpg", title: "Bricks" },
      { src: "/Images/Bricks44.jpg", title: "Bricks" },
      { src: "/Images/Bricks45.jpg", title: "Bricks" },
      { src: "/Images/Bricks46.jpg", title: "Bricks" },
      { src: "/Images/Bricks47.jpg", title: "Bricks" },
      { src: "/Images/Bricks48.jpg", title: "Bricks" },
      { src: "/Images/Bricks49.jpg", title: "Bricks" },
      { src: "/Images/Bricks50.jpg", title: "Bricks" },
      { src: "/Images/Bricks51.jpg", title: "Bricks" },
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
    id: "fabric_lamination",
    name: "Fabric Lamination",
    description:
      "Premium lamination services with various fabrics for interiors.",
    images: [
      { src: "/Images/Frabiclimination19.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabicliminationgrey20.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination21.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination22.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination23.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination24.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination25.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabicliminationgrey26.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabicliminationg27.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination28.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination30.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination31.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination32.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination33.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination34.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination35.jpg", title: "Fabric Lamination" },
      { src: "/Images/Frabiclimination36.jpg", title: "Fabric Lamination" },
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
  {
    id: "zolon_fittings",
    name: "Zolon - Glass Fitting",
    description: "Complete list of Zolon Glons fittings with prices.",
    images: [
      {
        src: "https://placehold.co/600x400?text=Zolon+Fitting",
        title: "Zolon Fittings Price List",
      },
    ],
    fittings: [
      { name: "Single Cylinder Set - 90KG", price: "₹3281" },
      { name: "Double Cylinder Set - 120KG", price: "₹4688" },
      { name: "Double Cylinder Set - 150KG", price: "₹5156" },
      { name: "L-connector", price: "₹207" },
      { name: "2 Knit", price: "₹177" },
      { name: "Round Handle", price: "₹1297" },
      { name: "Wall to Glass Hinges", price: "₹859" },
      { name: "Glass to Glass Hinges", price: "₹854" },
      { name: "Glass to Glass Hinges (Heavy)", price: "₹1250" },
      { name: "B-3", price: "₹171" },
      { name: "B-4", price: "₹180" },
      { name: "B-5", price: "₹188" },
      { name: "B-6", price: "₹180" },
      { name: "B-7", price: "₹289" },
      { name: "B-8", price: "₹285" },
      { name: "Shower Handle", price: "₹703" },
      { name: "One Side Panel", price: "₹438" },
      { name: "Top Patch with Pivot Big", price: "₹781" },
      { name: "Top Patch Small", price: "₹391" },
      { name: "Wall to Glass Lock", price: "₹859" },
      { name: "Glass to Glass Lock", price: "₹781" },
      { name: "Wall to Glass Connector", price: "₹172" },
      { name: "Glass to Glass Connector", price: "₹344" },
      { name: "Glass to Glass Connector - 180D", price: "₹336" },
    ],
  },
  {
    id: "zolon_railing",
    name: "Zolon - Railing Production",
    description: "Complete list of Zolon Railing products with prices.",
    images: [
      {
        src: "https://placehold.co/600x400?text=Zolon+Railing",
        title: "Zolon Railing Production",
      },
    ],
  },
  {
    id: "glass_aluminum_slider",
    name: "Glass Aluminum Slider",
    description:
      "Durable aluminum sliders with glass panels for doors and windows.",
    images: [
      {
        src: "https://placehold.co/600x400?text=Coming_Soon",
        title: "Glass Aluminum Slider",
      },
    ],
  },
];

const Products = () => {
  const [activeGlassTab, setActiveGlassTab] = useState(glassProductsData[0].id);
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-16 min-h-screen">
        <section className="py-12 sm:py-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-700"
          >
            {glassProductsData.find((p) => p.id === activeGlassTab)?.name}
            <div className="h-1 bg-[#1D293D] w-16 mt-3 rounded-full"></div>
          </motion.h2>

          {/* Mobile Tab Bar */}
          <div className="md:hidden flex overflow-x-auto gap-4 py-4 mb-8 custom-scrollbar">
            {glassProductsData.map((productType) => (
              <motion.button
                key={productType.id}
                onClick={() => setActiveGlassTab(productType.id)}
                className={`flex-shrink-0 text-sm py-2 px-4 rounded-full transition-colors duration-200 font-semibold border-2
                  ${
                    activeGlassTab === productType.id
                      ? "bg-[#0084D1] text-white border-[#0084D1]"
                      : "bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200"
                  }`}
              >
                {productType.name}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <div className="md:w-1/4 lg:w-1/5 bg-[#1D293D] p-6 rounded-lg hidden md:block text-white">
              <h3 className="text-xl font-bold mb-6 uppercase">
                Products Available
              </h3>
              <ul className="space-y-3">
                {glassProductsData.map((productType) => (
                  <li key={productType.id}>
                    <button
                      onClick={() => setActiveGlassTab(productType.id)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 text-base font-medium flex items-center justify-between ${
                        activeGlassTab === productType.id
                          ? "bg-[#0084D1] text-white font-semibold"
                          : "text-gray-300 hover:bg-[#2A3B56] hover:text-white"
                      }`}
                    >
                      <span className="flex-grow">{productType.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4 lg:w-4/5">
              {glassProductsData
                .filter((productType) => productType.id === activeGlassTab)
                .map((productType) => (
                  <motion.div
                    key={productType.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto md:mx-0 mb-12"
                  >
                    <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                      {productType.description}
                    </p>

                    {/* Fittings / Railing Table or Images */}
                    {productType.fittings ? (
                      <div className="overflow-x-auto border rounded-lg shadow-md">
                        <table className="w-full text-sm text-left text-gray-700">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-3">Item Name</th>
                              <th className="px-4 py-3">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {productType.fittings.map((fit, idx) => (
                              <tr
                                key={idx}
                                className="border-t hover:bg-gray-50"
                              >
                                <td className="px-4 py-3">{fit.name}</td>
                                <td className="px-4 py-3">{fit.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productType.images.map((image, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.04] hover:shadow-2xl border border-gray-200 flex flex-col transition-all duration-300"
                          >
                            <div className="relative w-full h-56 sm:h-64 md:h-72">
                              <img
                                src={image.src}
                                alt={image.title}
                                loading="lazy"  // ✅ Lazy load
                                width="100%"
                                height="100%"
                                className="w-full h-full object-cover rounded-t-2xl"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src =
                                    "https://placehold.co/600x400?text=Image+Not+Found";
                                }}
                              />
                            </div>
                            <div className="flex flex-col p-4 items-center flex-grow">
                              <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                                {image.title}
                              </h4>
                              <Link to="/contact" className="w-full mt-auto">
                                <button className="w-full bg-[#0084D1] hover:bg-blue-700 text-white py-2.5 rounded-full text-sm font-semibold transition-colors">
                                  Talk with Expert
                                </button>
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
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
