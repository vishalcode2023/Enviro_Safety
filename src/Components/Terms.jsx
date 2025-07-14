import React from 'react';
import Navbar from '../Routers/Navbar'; // Adjust path as needed based on your project structure
import Footer from './Footer'; // Adjust path as needed based on your project structure
import { motion } from 'framer-motion';

const Terms = () => {
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
          Terms and <span className="text-teal-600">Conditions</span>
        </motion.h1>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-800">
            1. Acceptance of Terms
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            By accessing and using the Enviro Safety Glass website (the “Site”), you agree to be bound by these Terms and Conditions and all terms incorporated by reference. If you do not agree to all of these terms, do not use this Site.
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
            2. Changes to Terms
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            We reserve the right to change or modify these Terms and Conditions at any time and in our sole discretion. If we make changes to these Terms, we will provide notice of such changes, such as by sending an email notification, providing notice through the Site, or updating the “Last Updated” date at the top of these Terms. Your continued use of the Site will confirm your acceptance of the revised Terms.
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
            3. Privacy Policy
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            Please refer to our Privacy Policy for information about how we collect, use, and disclose information about our users.
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
            4. Site Content and Accuracy
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            All content on this Site, including text, graphics, images, and information, is provided for informational purposes only. While we strive to ensure the accuracy of the information presented, we do not warrant its completeness or accuracy. Prices and product availability are subject to change without notice.
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
            5. User Conduct
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Site.
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
            6. Intellectual Property
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            All content and materials available on the Site, including but not limited to text, graphics, website name, code, images, and logos are the intellectual property of Enviro Safety Glass and are protected by applicable copyright and trademark law. Any inappropriate use, including but not limited to the reproduction, distribution, display, or transmission of any content on this site is strictly prohibited, unless specifically authorized by Enviro Safety Glass.
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
            7. Disclaimer of Warranties
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            The Site and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted or error-free, that defects will be corrected, or that the Site or the server that makes it available are free of viruses or other harmful components.
          </motion.p>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-gray-800">
            8. Contact Us
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            If you have any questions about these Terms and Conditions, please contact us at:
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

export default Terms;
