"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "@/../../public/images/hero3.jpg";
import { motion, useInView } from "framer-motion";
import { Leads } from "..";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full h-[65vh] md:h-[100vh] ">
        {/* Image with fade-in animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <Image
            src={hero}
            alt="hero image"
            width={1280}
            height={853}
            className="w-full h-full bg-cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute md:p-4  top-0 left-0 right-0 w-full h-full flex flex-col items-center  justify-start md:justify-center bg-emerald-800/20 backdrop-brightness-75"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-satisfy text-slate-100 font-bold text-5xl md:text-8xl text-center mt-6"
          >
            Trust our Expierence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-slate-100 text-center text-lg md:text-3xl font-kalam leading-10 py-2"
          >
            A Team of Professional Experts
          </motion.p>
          {/* <button className="text-slate-100 montserrat-normal my-6 outline-none uppercase md:text-3xl text-lg border border-primary px-4 py-2 rounded-full bg-primary/20 transition-all duration-300 hover:bg-primary/75 hover:translate-y-2 ">
            Explore Now
          </button> */}
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute md:p-4  bottom-1 md:bottom-16 left-0 right-0 w-3/4 mx-auto "
        >
          {/* <button className="text-slate-100 montserrat-normal my-6 outline-none uppercase md:text-3xl text-lg border border-primary px-4 py-2 rounded-full bg-primary/20 transition-all duration-300 hover:bg-primary/75 hover:translate-y-2 ">
                      Explore Now
                    </button> */}
          <Leads />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
