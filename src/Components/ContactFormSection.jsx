import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Info, Edit3, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToData: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message ||
      !formData.agreeToData
    ) {
      toast.error("Please fill in all required fields and agree to data collection.");
      setStatus("");
      return;
    }

    try {
      const response = await fetch("https://enviro-backend-w5j4.onrender.com/api/enviro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();

      // Success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agreeToData: false,
      });
      setStatus("success");
      toast.success(data?.message || "Your message was sent successfully!");

      // Reset after 3s
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error(error);
      setStatus("");
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-gray-900 py-38 px-4 sm:px-6 lg:px-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-8">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8"
        >
          Your Dedicated <br />
          <span className="text-teal-600">Glass Partner.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
        >
          At Enviro Safety Glass, we understand that every building professional
          has a unique set of product specifications. We combine knowledge,
          advanced technology, and commitment to deliver aesthetically pleasing glass
          products with unlimited possibilities.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="text-base sm:text-lg text-gray-700 leading-relaxed"
        >
          Enviro Safety Glass strives to deliver authentic and superior glass
          solutions that make greater accomplishments possible.
        </motion.p>
      </div>

      {/* Right Section: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-8 mt-12 lg:mt-0">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold mb-8 text-center lg:text-left"
        >
          Let's Discuss Your Project.
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </motion.div>

            {/* Subject */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <Info className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <Edit3 className="absolute left-3 top-4 text-gray-400" size={20} />
              <textarea
                name="message"
                placeholder="How can we help you? Feel free to get in touch!"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y"
              />
            </div>
          </motion.div>

          {/* Submit + Consent */}
          <motion.div variants={itemVariants} className="flex items-center justify-between flex-wrap gap-4">
            <button
              type="submit"
              className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Sending..."
                : status === "success"
                ? "Sent!"
                : "Get In Touch"}
              <ArrowRight className="ml-2" size={20} />
            </button>

            <label className="flex items-center text-gray-700 text-sm cursor-pointer">
              <input
                type="checkbox"
                name="agreeToData"
                checked={formData.agreeToData}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-teal-600 rounded focus:ring-teal-500"
              />
              I agree that my data is collected and stored.
            </label>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
