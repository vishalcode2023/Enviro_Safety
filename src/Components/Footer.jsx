import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'; // Social media and contact icons

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const linkVariants = {
    hover: { x: 5 }, // Slight movement on hover
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold text-white mb-4">Enviro Safety Glass</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Pioneering glass innovations with unmatched expertise for automotive, architectural, and industrial applications.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="https://www.facebook.com/sharer.php?u=https://www.indiamart.com/envirosafetyglass/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook size={20} />
            </a>
            {/* Added a placeholder for Twitter as no URL was provided */}
            {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter size={20} />
            </a> */}
            {/* <a href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fwww.indiamart.com%2Fenvirosafetyglass%2F" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin size={20} />
            </a> */}
            {/* Added a placeholder for Instagram as no URL was provided */}
            <a href="https://www.instagram.com/enviro_safetyglass/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram size={20} />
            </a> 
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <motion.li variants={linkVariants} whileHover="hover">
              <Link to="/Products" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <ArrowRight size={16} className="mr-2" /> Products
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <Link to="/solutions" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <ArrowRight size={16} className="mr-2" /> Solutions
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <ArrowRight size={16} className="mr-2" /> Contact
              </Link>
            </motion.li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start text-gray-400">
              <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
              <a href="mailto:envirosafetyglass07@gmail.com" className="hover:text-white transition-colors duration-300">envirosafetyglass07@gmail.com</a>
            </li>
            <li className="flex items-start text-gray-400">
              <Phone size={20} className="mr-3 mt-1 flex-shrink-0" />
              <a href="tel:+91" className="hover:text-white transition-colors duration-300">+91 90087 00000 ,</a>
              <a href=" tel:+91" className="hover:text-white transition-colors duration-300">+91 9448462320</a>
            </li>
            <li className="flex items-start text-gray-400">
              <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
              <span>Plot No.53 ,2nd Stage, Hebbal Industrial Area, Anagahalli, Karnataka</span>
            </li>
             <li className="flex items-start text-gray-400">
              <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
              <span> 4th Cross, D Devaraj Urs Rd, Mysuru, Karnataka</span>
            </li>
          </ul>
        </div>

        {/* Stay Connected / Contact Us Button */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1 flex flex-col items-start">
          <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
          <p className="text-gray-400 text-sm mb-6">
            Have questions or need assistance? Reach out to us!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Copyright and Policy Links */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Enviro Safety Glass. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <Link to="/Terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
