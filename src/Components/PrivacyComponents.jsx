import React from 'react';
import Navbar from '../Routers/Navbar'; // Adjust path as needed based on your project structure
import Footer from './Footer'; // Adjust path as needed based on your project structure
import { motion } from 'framer-motion';

const PrivacyComponents = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12 leading-tight"
        >
          Privacy <span className="text-teal-600">Policy</span>
        </motion.h1>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-800">
            1. Introduction
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            Welcome to Enviro Safety Glass. We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL Here], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
          </motion.p>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-800">
            2. Information We Collect
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700 mb-4">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </motion.p>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2">
            <motion.li variants={itemVariants}>
              <span className="font-semibold">Personal Data:</span> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="font-semibold">Derivative Data:</span> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="font-semibold">Financial Data:</span> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
            </motion.li>
          </ul>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-800">
            3. How We Use Your Information
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </motion.p>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2 mt-4">
            <motion.li variants={itemVariants}>Create and manage your account.</motion.li>
            <motion.li variants={itemVariants}>Process your transactions and send you related information.</motion.li>
            <motion.li variants={itemVariants}>Email you regarding your account or order.</motion.li>
            <motion.li variants={itemVariants}>Improve the efficiency and operation of the Site.</motion.li>
            <motion.li variants={itemVariants}>Monitor and analyze usage and trends to improve your experience with the Site.</motion.li>
            <motion.li variants={itemVariants}>Notify you of updates to the Site.</motion.li>
          </ul>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-800">
            4. Data Security
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </motion.p>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-800">
            5. Your Rights
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            You have certain rights regarding your personal data, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the details below.
          </motion.p>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-800">
            6. Changes to This Policy
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </motion.p>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-800">
            7. Contact Us
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            If you have any questions or suggestions about our Privacy Policy, please do not hesitate to contact us at:
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700 mt-4">
            Email: <a href="mailto:envirosafetyglass@gmail.com" className="text-teal-600 hover:underline">envirosafetyglass@gmail.com</a>
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            Phone: <a href="tel:+919008700000" className="text-teal-600 hover:underline">+91 90087 00000</a>
          </motion.p>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyComponents;
