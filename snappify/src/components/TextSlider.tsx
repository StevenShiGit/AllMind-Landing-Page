"use client";
import "@splidejs/react-splide/css"; // Default styles
import Image from "next/image";


const Splide = require("@splidejs/react-splide").Splide;
const SplideSlide = require("@splidejs/react-splide").SplideSlide;
const AutoScroll = require("@splidejs/splide-extension-auto-scroll").AutoScroll

export default function TextSlider() {
  return (
    <div className="bg-amber-50 w-full h-[30vh] flex items-center py-6">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          pagination: false,
          perPage: 3,
          gap: "1rem",
          drag: false, // Prevents manual dragging
          autoWidth: true, // Allows content to size dynamically
          focus: "center", // Keeps focus centered
          speed: 3000, // Adjust for smoothness
          extensions: { AutoScroll }, // Enable AutoScroll
          autoScroll: {
            speed: 1, // Adjust speed (higher = faster)
            pauseOnHover: false, // Keep it scrolling when hovered
            pauseOnFocus: false, // Keep it scrolling even when clicked
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <Image src="/BlackLogo.svg" alt="BlackLogo" width={67.2} height={48} />
        </SplideSlide>
        <SplideSlide>
          <p className="text-6xl text-black font-medium whitespace-nowrap">One platform.</p>
        </SplideSlide>
        <SplideSlide>
          <p className="text-6xl font-medium text-black whitespace-nowrap">Many uses.</p>
        </SplideSlide>
        <SplideSlide>
          <p className="text-6xl font-medium text-black whitespace-nowrap">For all humans.</p>
        </SplideSlide>

        <SplideSlide>
          <p className="text-6xl font-medium text-black whitespace-nowrap">One platform.</p>
        </SplideSlide>
      </Splide>
    </div>
  );
}
