interface SearchButtonProps {
    text: string;
    color: string
}
export default function SearchButton({ text,color }: SearchButtonProps) {
    return (
        <a href="/contact" target="_self" className="min-w-full md:min-w-min">
            <button className={`inline-flex items-center gap-3 whitespace-nowrap px-0 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none group h-[44px] min-w-full justify-between text-${color} dark:border-white hover:bg-transparent dark:hover:text-mistral-orange-bright disabled:opacity-50 disabled:cursor-not-allowed`}>
                {text} 
                <div className="relative flex items-center justify-center">
                    <div className="group flex items-center justify-center group-hover:text-primary">
                        <svg className="w-4 h-4 text-black group-hover:text-orange-500" viewBox="0 0 8 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                            <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                            <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                            <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                            <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

            </button>
        </a>
    );
}
