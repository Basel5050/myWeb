import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const goldFacts = [
  {
    title: "Pure Gold",
    image: "https://www.mariosellinas.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiZ2s1bmZyYnhhbzJyNGVhZnN6cnhkb2ttYzhiMiIsImRvbWFpbiI6Ind3dy5tYXJpb3NlbGxpbmFzLmNvbSJ9.9nQP0oMiqelKwi837xxSErKBPaX2g3o-qKgUPL9exiM",
    text: "24K gold is 99.9% pure and the softest form of gold used in jewelry.",
  },
  {
    title: "Gold Value",
    image: "https://img.icons8.com/emoji/96/money-bag-emoji.png",
    text: "Gold has been used as currency and a symbol of wealth for centuries.",
  },
  {
    title: "Cultural Importance",
    image: "https://img.icons8.com/color/96/necklace.png",
    text: "Gold jewelry is deeply embedded in many cultures and traditions globally.",
  },
  {
    title: "Durability",
    image: "https://img.icons8.com/emoji/96/gem-stone.png",
    text: "Gold is resistant to corrosion and rust, making it perfect for heirlooms.",
  }
];

const GoldInfo = () => {
  const sectionRef = useRef();
  const [showCoins, setShowCoins] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowCoins(true);
          setTimeout(() => setShowCoins(false), 2000); // توقف بعد ثانيتين
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative p-6 md:p-10 bg-[#fff7f0] text-center overflow-hidden"
    >
      {/* Falling Coins Animation */}
      {showCoins && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          {[...Array(10)].map((_, i) => (
            <motion.img
              key={i}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRTTSU2t84X2m9f5CDHlzH5Tb_EDEkHUWng&s"
              initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 1 }}
              animate={{ y: "100vh", opacity: 0 }}
              transition={{ duration: 2, delay: i * 0.1 }}
              className="absolute w-8 h-8"
            />
          ))}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6">All About Gold</h2>
      <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Gold is not only a precious metal, but a timeless symbol of luxury, tradition, and elegance. Here's why gold continues to shine through generations:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
        {goldFacts.map((fact, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-5 hover:shadow-2xl transition duration-300"
          >
            <img src={fact.image} alt={fact.title} className="mx-auto mb-4 w-16 h-16" />
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">{fact.title}</h3>
            <p className="text-sm text-gray-600">{fact.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 z-20 relative">
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full text-md shadow-md transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default GoldInfo;
