import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaPhoneVolume, FaInstagram ,FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="">

        <div className="container-fluid mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
             {/* Section 1 - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link> <a ></a></li>
            <li><Link href="/about" className="hover:underline">About</Link> <a ></a></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link> <a ></a></li>
            <li><Link href="/resolution" className="hover:underline">Resolution</Link> <a ></a></li>
            <li><Link href="/gallery" className="hover:underline">Gallery</Link> <a ></a></li>
            
            <li><a href="#" className="hover:underline"></a></li>
          </ul>
        </div>

        {/* Section 2 - Destinations */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Destinations</h3>
          <ul className="space-y-2">
           <li> <Link href="/destinations/pahalgam" className="hover:underline" >Pahalgam</Link></li>
           <li> <Link href="/destinations/srinagar" className="hover:underline" >Srinagar</Link></li>
           <li> <Link href="/destinations/gulmarg" className="hover:underline" >Gulmarg</Link></li>
           <li> <Link href="/destinations/sonamarg" className="hover:underline" >Sonamrg</Link></li>
           <li className="text-orange-800"> <Link href="/destinations/" className="hover:underline" >View All</Link></li>
           
            
          </ul>
        </div>

          {/* Section 3 - Icons */}
          <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            
            <a href="https://wa.me/+917006031831" target="blank" className="hover:text-gray-400"><FaWhatsapp size={24} /></a>
            {/* <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a> */}
            <a href="tel:+917780922971" className="hover:text-gray-400"><FaPhoneVolume size={24} /></a>
            <a href="https://www.instagram.com/nihad_tour_and_travels/" target="blank" className="hover:text-gray-400"><FaInstagram size={24} /></a>
            <a href="https://www.facebook.com/profile.php?id=61568542919646" target="blank" className="hover:text-gray-400"><FaFacebook size={24} /></a>
          </div>
        </div>


        </div>
        
       

      
        {/* Section 4 - Copyright */}
        <div className="flex items-center  md:flex-col mt-4">
          <p className="text-sm">Designed and Maintaned by : <a href="https://compsoftsol.in/" target="blank" className="text-orange-800 font-bold underline">Compsoft</a> </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Nihad Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
