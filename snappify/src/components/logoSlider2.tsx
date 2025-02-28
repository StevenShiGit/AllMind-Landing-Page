"use client";
import "@splidejs/react-splide/css"; // Default styles


const Splide = require("@splidejs/react-splide").Splide;
const SplideSlide = require("@splidejs/react-splide").SplideSlide;
const AutoScroll = require("@splidejs/splide-extension-auto-scroll").AutoScroll

const logos = [
  "https://cms.mistral.ai/assets/b42ef223-a3d8-42d7-b7a9-4fee0023fdd2",
  "https://cms.mistral.ai/assets/732193c8-59ab-492f-af70-dd153f157b2c",
  "https://cms.mistral.ai/assets/854710df-7625-4d63-8c5a-d8ab81e54c1b",
  "https://cms.mistral.ai/assets/1995e6bc-e1da-4692-aec3-ebee412b390a",
  "https://cms.mistral.ai/assets/fedcf302-5831-4f23-ba18-325f778d2b03",
  "https://cms.mistral.ai/assets/b6837a3d-5fb3-42e5-909b-d43bbc7f0b53",
  "https://cms.mistral.ai/assets/48754a01-0513-412e-8ef6-c40adf123f3a",
];

export default function LogoSlider() {
  return (
    <div className="bg-amber-50 w-full h-[150px] flex items-center py-6">
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          perMove: 1,
          arrows: false,
          pagination: false,
          gap: "1rem",
          drag: false, 
          autoScroll: {
            speed: 1, 
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="Partner Logos"
      >
        {logos.map((logo, index) => (
          <SplideSlide key={index} className="flex justify-center">
            <img
              src={logo}
              alt={`logo-${index}`}
              className="h-[44px] w-auto object-contain"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}