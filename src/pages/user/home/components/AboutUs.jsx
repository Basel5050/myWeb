import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden bg-[#fef9f5] py-20 px-6 md:px-20 text-center">

      {/* Parallax background shape */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/gold-fish-scale.png')] opacity-5 bg-repeat z-0" />

      {/* Heading with glow effect */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-yellow-800 mb-4 relative z-10"
      >
        <span className="animate-pulse text-shadow">Who We Are</span>
      </motion.h2>

      {/* Glowing divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="h-1 w-20 bg-yellow-600 mx-auto mb-8 origin-left rounded-full"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-gray-700 text-lg mb-12 z-10 relative"
      >
        At <span className="text-yellow-600 font-semibold">GoldLux</span>, we craft elegant gold jewelry that tells stories — blending heritage with luxury.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffa500/crown.png"
            alt="Quality"
            className="mx-auto mb-4 w-10 h-10"
          />
          <h3 className="text-xl font-semibold mb-2 text-yellow-700">Premium Quality</h3>
          <p className="text-sm text-gray-600">
            Every piece is made with the finest materials and craftsmanship.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffa500/in-transit--v1.png"
            alt="Delivery"
            className="mx-auto mb-4 w-10 h-10"
          />
          <h3 className="text-xl font-semibold mb-2 text-yellow-700">Global Delivery</h3>
          <p className="text-sm text-gray-600">
            We ship worldwide, fast and secure.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <img
            src="https://img.icons8.com/fluency-systems-filled/48/ffa500/handshake.png"
            alt="Trust"
            className="mx-auto mb-4 w-10 h-10"
          />
          <h3 className="text-xl font-semibold mb-2 text-yellow-700">Trusted Worldwide</h3>
          <p className="text-sm text-gray-600">
            Our clients trust us for quality and consistency.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="mt-12 relative z-10"
      >
        <Link to={'/products'}>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full text-md shadow-lg transition">
          Discover Our Collection 💍
        </button>
        </Link>
        
      </motion.div>

      {/* SVG wave bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="M0,96L1440,32L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutUs;
