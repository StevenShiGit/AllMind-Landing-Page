import Image from "next/image"

export default function Rainbow(){
    return(
        <div>
            
            <div className="h-[50px] w-full" style={{ background: "hsla(51, 100%, 50%, 1)" }}></div>
            <div className="h-[50px] w-full" style={{ background: "hsla(41, 100%, 50%, 1)" }}></div>
            <div className="h-[50px] w-full" style={{ background: "hsla(30, 100%, 51%, 1)" }}></div>
            <div className="h-[50px] w-full" style={{ background: "hsla(17, 96%, 52%, 1)" }}></div>
            <div className="h-[50px] w-full" style={{ background: "hsla(1, 100%, 44%, 1)" }}></div>
            
            

        </div>

    )
};