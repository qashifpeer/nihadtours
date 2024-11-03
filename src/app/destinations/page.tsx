import React from "react";
import Link from "next/link";
import { FaBus } from "react-icons/fa6";

interface PackageCardProps {
  imageUrl: string;
  title: string;
  price: string;
  days: string;
  link: string;
}

const packagesData: PackageCardProps[] = [
  { imageUrl: "/images/v1.jpg", title: "Srinagar", price: "₹7999 / person", days: "6 days & 5 nights", link: "/srinagar1" },
  { imageUrl: "/images/v2.jpg", title: "Gulmarg", price: "₹8999 / person", days: "6 days & 5 nights", link: "/srinagar2" },
  { imageUrl: "/images/v3.jpg", title: "Pahalgam", price: "₹6999 / person", days: "6 days & 5 nights", link: "/srinagar3" },
  { imageUrl: "/images/v4.jpg", title: "Bangus", price: "₹9999 / person", days: "6 days & 5 nights", link: "/srinagar4" }
];

const Destinations: React.FC = () => {
  return (
    <div className="container">
    
    <div className=" flex justify-center items-center gap-2 bg-gradient-to-r from-orange-800 to-slate-900">
      <h2 className="text-xl text-slate-100   uppercase font-kalam py-2">Handpicked Destinations</h2>
      <FaBus className="text-xl" />
    </div>
    <div className="mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {packagesData.map((pkg, index) => (
        <Link key={index} href={pkg.link}>
          <div
            className="relative w-full h-96 bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
            style={{ backgroundImage: `url(${pkg.imageUrl})` }}
          >
            {/* package days */}
            {/* <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded text-sm font-medium text-black">
              {pkg.days}
            </div> */}
            <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-red-800 to-slate-900 p-4 opacity-60">
              <h3 className="text-lg font-semibold"></h3>
              <p className="text-sm ubuntu-bold"></p>
              <div className="bg-slate-100 text-slate-800 py-2 px-4 w-full text-center ubuntu-bold rounded mt-2">
                <h3>{pkg.title}</h3>
                </div>
              
            </div>
           
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Destinations;
