"use client";
import "@splidejs/react-splide/css"; 

import Image from "next/image"

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";




export default function TextSlider() {
  return (
    <div className="flex py-6 overflow-hidden mt-32 pb-20">
      <Splide
        options={{
          type: "loop",
          drag: false, 
          arrows: false,
          pagination: false,
          perPage: 8.5, 
          clones: 4,
          autoScroll: {
            speed: 1.5, 
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
          },
          gap: "1rem", 
        }}
        extensions={{ AutoScroll }}
        aria-label="Mistral Marquee"
      >
        
          <SplideSlide>
            <div className="flex gap-x-4 whitespace-nowrap items-center text-6xl text-black">
              <p>One platform. Many uses. For all humans.</p>

              <Image src="/BlackLogo.svg" alt="BlackLogo" width={68} height={30} />

            </div>
          </SplideSlide>
      
      </Splide>
    </div>
  );
}
