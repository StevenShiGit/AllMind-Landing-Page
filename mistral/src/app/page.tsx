"use client";


import LogoSlider from "@/components/logoSlider2";
import Future from "@/components/future"
import TextSlider from "@/components/TextSlider"
import Content from "@/components/Content"
import Announcement from "@/components/Announcements"
import Job from "@/components/Job"
import Ending from "@/components/Ending"
import Rainbow from "@/components/Rainbow"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SearchArea from "@/components/SearchArea"
import EndLand from "@/components/EndLand"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b bg-amber-50 overflow-hidden md:overflow-visible">
    
      <Navbar />
      <SearchArea />
      


      <div className = "max-w-6xl mx-auto">
        
        <EndLand />
        <LogoSlider />

        <Future />
      </div>
      
      <TextSlider />

      <div className = "max-w-6xl mx-auto">
        <Content />
        <Announcement />
        <Job/>
        <Ending/>
      </div>
      <Rainbow />
      <Footer />
      


    </div>
      

    
  );
}
