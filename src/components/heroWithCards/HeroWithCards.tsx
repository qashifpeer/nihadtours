import React from "react";
import Link from "next/link";




const Cards: React.FC = () => {
  return (
    <div className="">
      {/* What do we beleive */}
      <section className="relative w-full max-w-4xl mx-auto mt-16 p-8 border-2 border-orange-800">
      <h2 className="absolute -top-6 right-6 bg-orange-800 rounded px-2 text-xl ubuntu-regular text-white">
        What do we Believe?
      </h2>
      <div className="flex flex-col items-center">
        <p className="text-center text-white-700 mt-4 font-kalam">
        At Nihad Tour and Travels, we believe in the transformative power of travel. Our mission is to share the beauty and serenity of Kashmir with travellers from across India. We exist to provide curated, personalised travel experiences that showcase both the iconic and hidden gems of Kashmir. We believe that every journey is an opportunity to create lasting memories, and our goal is to make every trip to Kashmir an unforgettable adventure.

        </p>
      </div>
    </section>


     {/* Values and Mission */}
     <section className="relative w-full max-w-4xl mx-auto mt-16 p-8 border-2 border-orange-800">
      <h2 className="absolute -top-6 right-6 bg-orange-800 rounded px-2 text-xl ubuntu-regular text-white">
       Our Values And Mission
      </h2>
      <div className="flex flex-col items-center">
        <p className="text-center text-slate-100 mt-4 font-kalam">
        Our mission is simple: to be the leading provider of Kashmir travel experiences, offering well-rounded, immersive packages that cater to every traveller—whether it's couples on their honeymoon, families exploring together, or adventurers seeking new thrills. We are guided by values of integrity, quality service, and a passion for delivering unique, authentic experiences. We prioritise customer satisfaction, attention to detail, and sustainable tourism to preserve the natural beauty of Kashmir for generations to come.
        </p>
      </div>
    </section>

     {/* Our Manifesto */}
     <section className="relative w-full max-w-4xl mx-auto mt-16 p-8 border-2 border-orange-800">
      <h2 className="absolute -top-6 right-6 bg-orange-800 rounded px-2 text-xl ubuntu-regular text-white">
      Our Manifesto
      </h2>
      <div className="flex flex-col items-center">
        <p className="text-center text-slate-100 mt-4 font-kalam">
        We are not just selling packages; we are crafting journeys. At  Nihad Tour and Travels, we believe that travel should inspire, rejuvenate, and bring you closer to the wonders of the world. Kashmir is more than just a destination—it's an experience waiting to be discovered, and we’re here to guide you every step of the way.

        </p>
      </div>
    </section>
    </div>
  );
};

export default Cards;
