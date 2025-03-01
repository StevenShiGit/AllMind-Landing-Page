import Image from "next/image"
export default function Job(){
    return(
        <div className="flex flex-col justify-end mt-16 bg-cover bg-center bg-[url('/workers.webp')] text-white h-[483px] px-[1rem] md:px-[3rem] pb-[3rem]">
            
            <div className = "flex flex-col md:flex-row justify-between items-start md:items-end gap-y-10">

                <div className="flex max-w-[438px] flex-col gap-y-10">
                    <h1 className = "text-3xl md:text-5xl"> Build the future of secure, private AI.</h1>
                    <p>Now seeking: Insatiably curious AI enthusiasts with an entrepreneurial spirit.</p>
                </div>

                <button className="inline-flex items-center">View open roles</button>
            </div>
            
            

        </div>

    )
};