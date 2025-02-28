import { useEffect, useState } from "react";

export default function Future() {
  return (
    <section className="relative flex h-[100vh] bg-amber-50">
      {/* Container for scrolling content */}
      <div className="max-w-6xl mx-auto flex h-full">

        {/* Sticky Text Section */}
        <div className="w-1/2 flex  items-start  mr-16 flex-col">
          <div className="bg-[url('/scrollback.svg')] bg-cover bg-center w-full h-full p-6">
            <h3 className="text-black text-5xl relative max-w-[300px] md:sticky md:top-1/2">
              Your AI future belongs in your hands.
            </h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="w-1/2 flex flex-col justify-between text-black ml-16">
          <div className="border-t border-amber-200 pt-6">
            <h2 className="text-3xl font-semibold">Customizable, from pre-training to the real world.</h2>
            <p className="mt-2 text-lg flex items-center">
              <span className="text-orange-500">➜</span>
              <span className="ml-2">World-class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.</span>
            </p>
          </div>

          <div className="border-t border-amber-200 pt-6">
            <h2 className="text-3xl font-semibold">Private and portable.</h2>
            <p className="mt-2 text-lg flex items-center">
              <span className="text-orange-500">➜</span>
              <span className="ml-2">A comprehensive, enterprise-grade AI platform that can be deployed anywhere—on-premises, cloud, edge, devices, data centers, and more.</span>
            </p>
          </div>

          <div className="border-t border-amber-200 pt-6">
            <h2 className="text-3xl font-semibold">Transparent and trustworthy.</h2>
            <p className="mt-2 text-lg flex items-center">
              <span className="text-orange-500">➜</span>
              <span className="ml-2">Strongest global contributor to open-source AI and AI policy. Mistral AI is the world’s greenest and leading independent AI lab.</span>
            </p>
          </div>

          <div className="border-t border-amber-200 pt-6">
            <h2 className="text-3xl font-semibold">Deeply engaged solutioning and value delivery.</h2>
            <p className="mt-2 text-lg flex items-center">
              <span className="text-orange-500">➜</span>
              <span className="ml-2">Hands-on assistance from the world’s best AI engineers and scientists across deployment, solutioning, safety, and beyond.</span>
            </p>
          </div>

          <div className="border-t border-amber-200 pt-6">
            <h2 className="text-3xl font-semibold">Delightful Interfaces.</h2>
            <p className="mt-2 text-lg flex items-center">
              <span className="text-orange-500">➜</span>
              <span className="ml-2">Bringing frontier intelligence to life with intuitive user experiences across life and work.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
