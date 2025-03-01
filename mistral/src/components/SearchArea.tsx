import Image from "next/image";
import SearchButton from "@/components/SearchButton"
export default function SearchArea(){
    return(
        
      <div className="flex flex-col items-center h-[690px] justify-center text-center text-white px-4 bg-[url('/background.webp')] bg-cover bg-center ">
      <h1 className="text-5xl font-bold">Frontier AI. In Your Hands.</h1>
      <p className="mt-4 text-lg">Configurable AI for all builders.</p>

    
      <div className="mt-6 flex items-center border border-white rounded-md p-2 max-w-[500px] w-full bg-white">


        <input
          type="text"
          placeholder="Talk to le Chat"
          className="flex-1 bg-transparent text-black outline-none px-2 w-full"
        />
        <button className="bg-orange-600 w-[26px] h-[26px] flex items-center justify-center">
          <Image src="/arrowUp.svg" alt="arrow" width={12} height={12} className="rotate-90 object-contain"/>

        </button>
      </div>

      
      <div className="mt-6 flex flex-col md:flex-row md:space-x-6">
        <SearchButton text="Enterprise deployments" color="white" />
        <SearchButton text="APIs on la Platforme" color="white" />
      </div>
    </div>

    
    )
}