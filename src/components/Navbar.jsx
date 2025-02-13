import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 py-2 backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-black/80 border-b border-neutral-700/80" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-12 w-12 mr-3" src={logo} alt="logo" />
          <span className="text-xl font-semibold tracking-tight text-white">
            VirtualR
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-white">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="hover:text-orange-500 transition duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-6">
          <a 
            href="#" 
            className="py-2 px-4 border border-white rounded-md text-white hover:bg-white hover:text-black transition"
          >
            Sign In
          </a>
          <a 
            href="#" 
            className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold shadow-lg hover:shadow-orange-500/50 transition"
          >
            Create an account
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black/90 border-t border-neutral-700 p-4">
          <ul className="flex flex-col space-y-4 text-center text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="block py-2 hover:text-orange-500 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <hr className="border-neutral-700" />
            <a 
              href="#" 
              className="block py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition"
            >
              Sign In
            </a>
            <a 
              href="#" 
              className="block py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold shadow-lg hover:shadow-orange-500/50 transition"
            >
              Create an account
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
