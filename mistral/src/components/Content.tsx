"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
    const grid = "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] "
  return (
    
    <div className={`flex flex-col mx-auto text-black max-w-6xl ${grid}`}>
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} 
        >
   
      <section className="flex justify-center flex-col md:flex-row items-center gap-32 py-16">
        
        <div className="max-w-96">

          <h2 className="text-5xl">Get work done.</h2>
          <p className="mt-4">
            Your personalized multilingual AI assistant, with web search, uploads, and data connectors.
          </p>
          <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex flex-row gap-x-3">
            Discover le Chat 
            <Image src = "/orangeArrow.svg" alt="orange arrow" width={8} height={8} />


          </button>
        </div>
        <Image src="/work.webp" alt="Work Chat" width={500} height={300} />
        
      </section>
      </motion.div>

        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} 
        >
            <section className="flex justify-center flex-col-reverse md:flex-row items-center gap-32 py-16">
                <Image src="/code.webp" alt="Code Chat" width={500} height={300} />
                <div className="max-w-96">
                <h2 className="text-5xl">Code faster.</h2>
                <p className=" mt-4">
                    Build faster with coding assistance across 80+ languages.
                </p>
                <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex flex-row gap-x-3">
                    Code with le Chat 
                    <Image src = "/orangeArrow.svg" alt="orange arrow" width={8} height={8} />
                </button>
                </div>
            </section>
        </motion.div>

        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} 
        >

        
        <section className="flex justify-center flex-col md:flex-row items-center gap-32 py-16">
            <div className="max-w-96">
            <h2 className="text-5xl">Build AI-powered apps.</h2>
            <p className="mt-4">
                Build and deploy custom AI solutions with frontier models.
            </p>
            <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex flex-row gap-x-3">
                Discover la Plateforme 
                <Image src = "/orangeArrow.svg" alt="orange arrow" width={8} height={8} />

            </button>
            </div>
            <Image src="/ai.webp" alt="AI Chat" width={500} height={300} />
        </section>
        </motion.div>
    </div>
  );
}
