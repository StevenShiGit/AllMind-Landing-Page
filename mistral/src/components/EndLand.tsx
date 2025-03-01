import Image from "next/image";

export default function EndLand(){
    return(
        <div className="bg-amber-50 left-0 w-full py-6 ">
        <div className="flex flex-row max-w-6xl mx-auto items-center space-x-4 bg-amber-100 pr-0 md:pr-32">
          
            <div className="relative flex w-full shrink-0 flex-col items-center justify-center md:w-[125px]">
              {/* Color Bars */}
              <div className="h-[25px] w-full" style={{ background: "hsla(51, 100%, 50%, 1)" }}></div>
              <div className="h-[25px] w-full" style={{ background: "hsla(41, 100%, 50%, 1)" }}></div>
              <div className="h-[25px] w-full" style={{ background: "hsla(30, 100%, 51%, 1)" }}></div>
              <div className="h-[25px] w-full" style={{ background: "hsla(17, 96%, 52%, 1)" }}></div>
              <div className="h-[25px] w-full" style={{ background: "hsla(1, 100%, 44%, 1)" }}></div>

          
              <Image src="/minstral-logo.svg" alt="Mistral Logo" width={64} height={64} loading="lazy" decoding="async" className="absolute"/>
           
            </div>
          <div className="hidden md:flex flex-row w-full justify-between items-center space-x-4">
            <p className="text-black">Le Chat: Your AI assistant for life and work.</p>
            <div className="space-x-4 flex flex-row">
              <Image src="/appstore.svg" alt="Apple" width={120} height={40}/>

           
              <Image src="/androidstore.svg" alt="google" width={120} height={40}/>
            </div>
            
          </div>
        </div>
      </div>
    )
}