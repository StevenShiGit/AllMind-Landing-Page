"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center text-center p-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">snappify</span>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-black">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-black">Use Cases</a>
          <a href="#" className="text-gray-700 hover:text-black">Product</a>
          <a href="#" className="text-gray-700 hover:text-black">Resources</a>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#" className="text-gray-700 hover:text-black">Dashboard</a>
          <a href="#" className="text-gray-700 hover:text-black">Editor</a>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="max-w-4xl text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          We enable developers to create <span className="text-blue-500">stunning presentations</span>
        </h1>
        <div className="mt-4 px-4 py-1 bg-green-100 text-green-700 rounded-lg inline-block text-sm font-medium">
          New! - Experimental Video Export 🎥
        </div>
        <p className="mt-4 text-gray-600 text-lg">
          Take your Code Presentations to the next level with snappify's powerful animation features.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Get started - It's free
          </button>
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
            View Templates
          </button>
        </div>
      </div>

      {/* Animated Images Section */}
      <div className="mt-16 flex items-center space-x-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image src="/gecko.jpeg" width={600} height={400} alt="Snappify Example" />
        </motion.div>
        <div className="text-left max-w-md">
          <h2 className="text-2xl font-bold text-gray-900">Create next-level presentations</h2>
          <p className="mt-2 text-gray-600">
            Say goodbye to boring presentations created with PowerPoint or Keynote. 👋
            Snappify enables you to create stunning presentations, with first-class support for code snippets.
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Learn more →</a>
        </div>
      </div>

      {/* New Animated Section */}
      <div className="mt-20 flex items-center space-x-12">
        <div className="text-right max-w-md">
          <h2 className="text-2xl font-bold text-gray-900">Share interactive slides</h2>
          <p className="mt-2 text-gray-600">
            So your viewers can easily copy code snippets and interact with links.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image src="/gecko.jpeg" width={600} height={400} alt="Technical Content" />
        </motion.div>
      </div>

      {/* Trusted By Section */}
      <div className="mt-16 text-gray-600 text-sm">Trusted by industry leaders around the globe</div>
      <div className="mt-4 flex space-x-8">
        <span className="text-gray-800 font-semibold">vendure</span>
        <span className="text-gray-800 font-semibold">jina</span>
        <span className="text-gray-800 font-semibold">Textualize</span>
        <span className="text-gray-800 font-semibold">chakra</span>
        <span className="text-gray-800 font-semibold">supabase</span>
      </div>
    </div>
  );
}
