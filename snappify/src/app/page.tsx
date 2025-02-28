"use client";

import Image from "next/image";

import LogoSlider from "@/components/logoSlider2";
import Future from "@/components/future"
import TextSlider from "@/components/TextSlider"
import Content from "@/components/Content"
export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white">
      <Image src="/logo.svg" alt="Logo" width={41} height={29} />
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Solutions</a>
          <a href="#" className="hover:underline">Research</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">Company</a>
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 border rounded">Try the API</button>
          <button className="px-4 py-2 border rounded">Talk to Sales</button>
        </div>
      </nav>

      {/* Hero Section */}
  
      <div className="flex flex-col items-center h-[690px] justify-center text-center text-white px-4 bg-[url('/background.webp')] bg-cover bg-center">
        <h1 className="text-5xl font-bold">Frontier AI. In Your Hands.</h1>
        <p className="mt-4 text-lg">Configurable AI for all builders.</p>

        {/* Search Input */}
        <div className="mt-6 flex items-center border border-white rounded-md p-2 w-80 bg-white">
          <input
            type="text"
            placeholder="Talk to le Chat"
            className="flex-1 bg-transparent text-black outline-none px-2"
          />
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md">➜</button>
        </div>

        {/* Links */}
        <div className="mt-6 flex space-x-6">
          <a href="#" className="text-lg hover:underline">Enterprise deployments ➜</a>
          <a href="#" className="text-lg hover:underline">APIs on la Platforme ➜</a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-amber-50 left-0 w-full py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between bg-amber-100">
          <div className="flex items-center space-x-4">
          <div className="relative flex w-full shrink-0 flex-col items-center justify-center md:w-[125px]">
            {/* Color Bars */}
            <div className="h-[25px] w-full" style={{ background: "hsla(51, 100%, 50%, 1)" }}></div>
            <div className="h-[25px] w-full" style={{ background: "hsla(41, 100%, 50%, 1)" }}></div>
            <div className="h-[25px] w-full" style={{ background: "hsla(30, 100%, 51%, 1)" }}></div>
            <div className="h-[25px] w-full" style={{ background: "hsla(17, 96%, 52%, 1)" }}></div>
            <div className="h-[25px] w-full" style={{ background: "hsla(1, 100%, 44%, 1)" }}></div>

            {/* Overlay Image */}
        
            <Image src="/minstral-logo.svg" alt="Mistral Logo" width={64} height={64} loading="lazy" decoding="async" className="absolute"/>
          </div>

            <p className="text-black">Le Chat: Your AI assistant for life and work.</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded">Download on App Store</button>
            <button className="bg-black text-white px-4 py-2 rounded">Get it on Google Play</button>
          </div>
        </div>
      </div>
      <div>
        <LogoSlider />
        
      </div>
      <div className="bg-amber-50">
        <Future />
      </div>
      <div>
        <TextSlider />
      </div>
      
      <Content />
      
      


    </div>
      

    
  );
}
