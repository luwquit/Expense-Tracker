import type { ReactNode } from "react";

export function HeaderBg({children}: {children: ReactNode}) {
  return (
    <section className="py-7 text-deep-blue dark:text-bluish-white bg-bluish-white/50 dark:bg-deep-dark/50 
      backdrop-blur-lg fixed top-0 right-0 left-0 lg:px-50 md:px-25 px-10 border-deep-blue/10 dark:border-bluish-white/5 
      border-b z-50"
    >
      {children}
    </section>
  );
}