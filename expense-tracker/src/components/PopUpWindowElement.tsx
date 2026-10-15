import type { ReactNode } from "react";

export function PopUpWindowElement({children}: {children: ReactNode}) {
  
  return (
    <aside className="bg-linear-to-b from-bluish-white to-bluish-gray dark:from-deep-dark dark:to-deep-blue 
    rounded-3xl fixed top-[50vh] -translate-y-1/2 left-[50vw] -translate-x-1/2 py-10 px-12">
      <div className="text-deep-blue dark:text-bluish-white lg:text-xl md:text-lg text-md grid grid-cols-[repeat(auto-fit,minmax(20rem,50rem))] md:gap-y-5 gap-y-3 justify-items-center">
        {children}
      </div>
    </aside>
  );
}

// .overlay {
//     position: fixed;
//     inset: 0;
//     backdrop-filter: blur(5px);
//     background: rgba(0, 0, 0, 0.2);
//     opacity: 0;
//     visibility: hidden;
//     transition: 0.3s ease;
//     z-index: 999;
// }

// .overlay.active {
//     opacity: 1;
//     visibility: visible;
// }