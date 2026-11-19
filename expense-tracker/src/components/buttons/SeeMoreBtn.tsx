import type { Dispatch, SetStateAction } from "react";

export function SeeMoreBtn({setLimitCount}: {setLimitCount: Dispatch<SetStateAction<number>>}) {
  return (
    <button className="border-2 border-deep-blue dark:border-bluish-white py-3 lg:px-10 md:px-9 px-7 lg:text-lg md:text-md text-sm rounded-4xl w-fit cursor-pointer font-bold 
    text-deep-blue dark:text-bluish-white hover:scale-105 active:scale-100 active:opacity-70 transition-all"
      onClick={() => setLimitCount(prev => prev + 5)}  
    >
      See more
    </button>
  );
}