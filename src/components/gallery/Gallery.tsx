"use client"
import React, { useState } from "react";
import Image from "next/image";
import { galleryData, GalleryItemProps } from "@/constants/gallery";
import { div } from "framer-motion/client";


const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItemProps | null>(null);

  return (
    <div className="container-fluid">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {galleryData.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => setActiveImage(item)}
        >
          <div className="relative w-full h-48 transition-transform duration-1000 delay-200 transform group-hover:scale-150 group-hover:z-10">
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-semibold capitalize">{item.description}</p>
          </div>
        </div>
      ))}

      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%] h-[60%] overflow-hidden rounded-lg">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500 transform scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold text-center px-4 capitalize">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    
  );

};

export default Gallery;
