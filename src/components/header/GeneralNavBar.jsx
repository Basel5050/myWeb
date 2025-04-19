
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaBoxOpen,
  FaSignInAlt,
  FaUserPlus,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
 
    Typography,
    
  } from "@material-tailwind/react"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
const GeneralNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
          setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);  

  
    return (
        <nav className="fixed w-full z-50  bg-black/30 lg:backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div  className="text-2xl font-bold text-yellow-700 flex items-center gap-2">
            <FaBoxOpen /> MyStore
          </div>
  
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-blue-gray-400 font-medium items-center">
            <Typography
             as={Link}
             to = '/' >
            <li  className="hover:text-yellow-600 cursor-pointer flex items-center gap-1">
              <FaHome /> Home
            </li>
            </Typography>
            
            <Typography
             as={Link}
             to = '/products' >
                <li className="hover:text-yellow-600 cursor-pointer flex items-center gap-1">
              <FaBoxOpen /> Products
            </li>
            </Typography>
            
            <Typography
             as={Link}
             to = '/cart' >
                <li className="hover:text-yellow-600 cursor-pointer flex items-center gap-1">
              <FaShoppingCart /> Cart
            </li>

            </Typography>
            
            <Typography
             as={Link}
             to = '/login' >
                <li className="translate-y-1 drop-shadow-md hover:text-yellow-600 cursor-pointer flex items-center gap-1">
              <FaSignInAlt /> Login
            </li>

            </Typography>
            
            <Typography
             as={Link}
             to = '/signup' >
                <li>
              <button className="translate-y-1 drop-shadow-md bg-yellow-700 text-white px-4 py-1 rounded-lg hover:bg-yellow-800 transition flex items-center gap-1">
                <FaUserPlus /> Sign Up
              </button>
            </li>

            </Typography>
            
          </ul>
  
          {/* Mobile Toggle */}
          <div className="md:hidden text-2xl cursor-pointer text-brown-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
  
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-white  text-brown-800 font-medium flex flex-col space-y-6 p-6 z-40"
            >
                <Typography
                as={Link}
                to='/'
                >
                    <li className="flex items-center gap-2">
                <FaHome /> Home
              </li>

                </Typography>
              
              <Typography
                as={Link}
                to='/products'
                >
                    <li className="flex items-center gap-2">
                <FaBoxOpen /> Products
              </li>

                </Typography>
              
              <Typography
                as={Link}
                to='/cart'
                >
                    <li className="flex items-center gap-2">
                <FaShoppingCart /> Cart
              </li>

                </Typography>
              
              <Typography
                as={Link}
                to='/login'
                >
                    <li className="flex items-center gap-2">
                <FaSignInAlt /> Login
              </li>

                </Typography>
              
              <Typography
                as={Link}
                to='/signup'
                >
                    <li>
                <button className="bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 transition flex items-center gap-2">
                  <FaUserPlus /> Sign Up
                </button>
              </li>

                </Typography>
              
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    );
}

export default GeneralNavBar