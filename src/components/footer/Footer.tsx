import React from "react";
import { FaWhatsapp, FaTwitter, FaPhone, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="">

        <div className="container-fluid mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
             {/* Section 1 - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Section 2 - Destinations */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Destinations</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Srinagar</a></li>
            <li><a href="#" className="hover:underline">Pahalgam</a></li>
            <li><a href="#" className="hover:underline">Sonamarg</a></li>
            <li><a href="#" className="hover:underline">Gulmarg</a></li>
          </ul>
        </div>

          {/* Section 3 - Icons */}
          <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><FaWhatsapp size={24} /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-gray-400"><FaPhone size={24} /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
          </div>
        </div>


        </div>
        
       

      
        {/* Section 4 - Copyright */}
        <div className="flex items-center justify-center md:justify-end mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Al Nahda Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
