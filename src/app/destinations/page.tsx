import React from "react";
import Link from "next/link";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { destinationsData } from "@/constants/destinations";

const Destinations: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container">
      <div className=" flex justify-center items-center gap-2 bg-gradient-to-r from-orange-800 to-slate-900">
        <h2 className="text-xl text-slate-100   uppercase font-kalam py-2">
          Handpicked Destinations
        </h2>
        <FaMartiniGlassCitrus className="text-2xl bg-slate-100 rounded-full p-1 text-orange-800 text-center" />
      </div>
      <div className="mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinationsData.map((dest, index) => (
          <Link key={index} href={`destinations/${dest.title}`}>
            <div
              className="relative w-full h-96 bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${dest.imageUrl})` }}
            >
              {/* package days */}
              {/* <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded text-sm font-medium text-black">
              {pkg.days}
            </div> */}
              <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-red-800 to-slate-900 p-4 opacity-60">
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-sm ubuntu-bold"></p>
                <div className="bg-slate-100 text-slate-800 py-2 px-4 w-full text-center ubuntu-bold rounded mt-2">
                  <h3 className="uppercase">{dest.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Destinations;
