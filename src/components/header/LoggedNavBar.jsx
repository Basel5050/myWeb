
import React, { useState, useEffect, useRef, useContext } from "react";
import { FaBoxOpen, FaHome, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AppContext from '../../context/context';

const LoggedNavBar = () => {
    const {userData , setIsLogged}= useContext(AppContext)
  
    const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
const LogOut = ()=>{
  localStorage.removeItem("id")
  setIsLogged(false)
}
  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav className="fixed top-0 w-full z-50  bg-black/30 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-700 flex items-center gap-2">
        <FaBoxOpen /> Hello {userData.name}
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 text-blue-gray-400 font-medium items-center">
      <Link to="/" className="hover:text-blue-500 flex items-center gap-1">
  <FaHome /> Home
</Link>
<Link to="/products" className="hover:text-blue-500 flex items-center gap-1">
  <FaBoxOpen /> Products
</Link>
<Link to="/cart" className="hover:text-blue-500 flex items-center gap-1 relative">
  <FaShoppingCart />
  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
    {userData.cart?.length}
  </span>
</Link>
      </ul>

      {/* Avatar */}
      <div className="relative translate-y-1 drop-shadow-md" ref={dropdownRef}>
        <FaUserCircle
          className="text-3xl text-brown-800 cursor-pointer hover:text-yellow-600 transition"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        <AnimatePresence>
          {dropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 5 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100"
            >
                <Link to={"/"}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</li>

                </Link>
                <Link to={"products"}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Products</li>

                </Link>
                {userData.role == 'admin'&& <Link to={"/admin"}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Admin</li>

                </Link>}
                <Link to={"/"}>
                <li onClick={()=>LogOut()} className="px-4 py-2 hover:bg-red-100 text-red-500 cursor-pointer">Sign Out</li>

                </Link>

            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  </nav>
  )
}

export default LoggedNavBar