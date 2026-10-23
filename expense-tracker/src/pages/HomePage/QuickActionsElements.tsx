export function QuickActionsElements() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(7rem,10rem))] md:grid-cols-[repeat(auto-fit,minmax(14rem,10rem))] md:gap-10 gap-6 justify-items-center justify-center">
      <button className="bg-linear-to-b from-bluish-white to-category-groceries dark:from-category-groceries dark:to-deep-dark/50 aspect-square w-full rounded-4xl text-bluish-white font-bold 
       grid grid-rows-2 cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)] @container">
        <div></div>
        <div className="flex items-end justify-between px-[10cqw] pb-[20cqw]">
          <h3 className="text-[clamp(0.875rem,11cqw,1.75rem)] font-semibold leading-none">Transport System</h3>
          <h4 className="grid size-[12cqw] min-w-6 shrink-0 place-items-center">
            <svg viewBox="0 0 24 24" className="size-full" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 4v16M4 12h16" />
            </svg>
          </h4>
        </div>
      </button>

      <button className="bg-linear-to-b from-bluish-white to-category-groceries dark:from-category-groceries dark:to-deep-dark/50 aspect-square w-full rounded-4xl text-bluish-white font-bold 
       grid grid-rows-2 cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)] @container">
        <div></div>
        <div className="flex items-end justify-between px-[10cqw] pb-[20cqw]">
          <h3 className="text-[clamp(0.875rem,11cqw,1.75rem)] font-semibold leading-none">Transport System</h3>
          <h4 className="grid size-[12cqw] min-w-6 shrink-0 place-items-center">
            <svg viewBox="0 0 24 24" className="size-full" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 4v16M4 12h16" />
            </svg>
          </h4>
        </div>
      </button>

      <button className="bg-linear-to-b from-bluish-white to-category-groceries dark:from-category-groceries dark:to-deep-dark aspect-square w-full rounded-4xl text-bluish-white font-bold 
       grid grid-rows-2 cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)] @container">
        <div></div>
        <div className="flex items-end justify-between px-[10cqw] pb-[20cqw]">
          <h3 className="text-[clamp(0.875rem,11cqw,1.75rem)] font-semibold leading-none">Transport System</h3>
          <h4 className="grid size-[12cqw] min-w-6 shrink-0 place-items-center">
            <svg viewBox="0 0 24 24" className="size-full" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 4v16M4 12h16" />
            </svg>
          </h4>
        </div>
      </button>

      <button className="bg-linear-to-b from-bluish-white to-category-groceries dark:from-category-groceries dark:to-deep-dark aspect-square w-full rounded-4xl text-bluish-white font-bold 
       grid grid-rows-2 cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)] @container">
        <div></div>
        <div className="flex items-end justify-between px-[10cqw] pb-[20cqw]">
          <h3 className="text-[clamp(0.875rem,11cqw,1.75rem)] font-semibold leading-none">Transport System</h3>
          <h4 className="grid size-[12cqw] min-w-6 shrink-0 place-items-center">
            <svg viewBox="0 0 24 24" className="size-full" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 4v16M4 12h16" />
            </svg>
          </h4>
        </div>
      </button>

      <button className="bg-linear-to-b from-bluish-white to-category-groceries dark:from-category-groceries dark:to-deep-dark aspect-square w-full rounded-4xl text-bluish-white font-bold 
       grid grid-rows-2 cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)] @container">
        <div></div>
        <div className="flex items-end justify-between px-[10cqw] pb-[20cqw]">
          <h3 className="text-[clamp(0.875rem,11cqw,1.75rem)] font-semibold leading-none">Transport System</h3>
          <h4 className="grid size-[12cqw] min-w-6 shrink-0 place-items-center">
            <svg viewBox="0 0 24 24" className="size-full" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 4v16M4 12h16" />
            </svg>
          </h4>
        </div>
      </button>

      

      
      
      
      
    </div>
  );
}

//буде лічильник, який зберігатиме кількість записів кожної категорії 
//і 5 найбільш вживаних будуть показуватися на екрані
//elem генеруються за допомогою map 