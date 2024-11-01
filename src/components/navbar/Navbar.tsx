"use client"
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Menu */}
          <div className="flex items-center space-x-4">
            <div className="text-lg font-semibold">Logo</div>
            <div className="hidden md:flex space-x-4">
              {["Home", "About", "Destinations", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative px-2 py-1 hover:text-gray-300"
                >
                  <span className="hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-orange-500 hover:before:content-['']"></span>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Whatsapp" className="hover:text-gray-400">
              <FaWhatsapp />
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "About", "Destinations", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300"
              >
                {item}
              </a>
            ))}
            <div className="flex space-x-3 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Whatsapp" className="hover:text-gray-400">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
