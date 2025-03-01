import SearchButton from "@/components/SearchButton"
export default function Ending(){
    return(
        <div className="mt-16 text-black pb-20 ">
            
            <div className = "flex flex-col gap-y-10 items-center">

                
                <h1 className = "text-6xl"> The next chapter of AI is yours. </h1>
                    
                <div className = "flex flex-col md:flex-row gap-y-7 md:gap-x-7">
                    <SearchButton text= "Start building with Mistral AI" color="black" />
                    <SearchButton text= "Talk to an expert" color="black" />
                </div>

            </div>
            
            

        </div>

    )
};