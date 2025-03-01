"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MenuButton from "@/components/MenuButton"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 600); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
    
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: scrolled ? "100px" : "0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full bg-amber-50 z-[-1]"
      />

    
      <nav
        className={`w-full flex justify-between items-center p-6 backdrop-blur-sm transition-colors duration-60 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        
        <Image
          src={scrolled ? "/logo2.svg" : "/logo.svg"}
          alt="Logo"
          width={41}
          height={29}
          className="transition-opacity duration-300"
        />

        
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="transition-colors duration-300">Products</a>
          <a href="#" className="transition-colors duration-300">Solutions</a>
          <a href="#" className="transition-colors duration-300">Research</a>
          <a href="#" className="transition-colors duration-300">Resources</a>
          <a href="#" className="transition-colors duration-300">Company</a>
        </div>

        <div className="space-x-4 hidden md:flex flex-row">
          <button className={`group flex flex-row items-center gap-x-2 border px-4 py-2 transition-colors duration-300 ${scrolled ? "text-black hover:bg-amber-100" : "bg-white/30 text-white hover:bg-white hover:text-black"}`}>
            Try the API
            <svg className={`w-4 h-4 ${scrolled ? "text-orange-600": "text-white"} group-hover:text-orange-500`} viewBox="0 0 8 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
              </svg>
          </button>
          <button className={`group flex flex-row items-center gap-x-2 border px-4 py-2 transition-colors duration-300 ${scrolled ? "text-black hover:bg-amber-100" : "bg-white/30 text-white hover:bg-white hover:text-black"}`}>
            Talk to sales
            <svg className={`w-4 h-4 ${scrolled ? "text-orange-600": "text-white"} group-hover:text-orange-500`} viewBox="0 0 8 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
              </svg>
          </button>
        </div>

        <div className = "md:hidden">
          <button className="relative flex size-xl items-center justify-center text-xl">
            <div className="flex size-xl items-center justify-center text-background">
              <svg width="25" height="19" viewBox="0 0 25 19" className = {`${scrolled ? "text-black": "text-white"}`} xmlns="http://www.w3.org/2000/svg">
                <path d="M0.890625 1.5H24.8906" stroke="currentColor" strokeWidth="3"></path>
                <path d="M0.890625 9.5H24.8906" stroke="currentColor" strokeWidth="3"></path>
                <path d="M0.890625 17.5H24.8906" stroke="currentColor" strokeWidth="3"></path>
              </svg>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
