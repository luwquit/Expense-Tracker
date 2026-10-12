export function QuickActionsElements() {
  return (
    <div className="grid grid-cols-5 justify-items-center">
      <button className="bg-linear-to-b from-bluish-white to-category-groceries dark:from-category-groceries dark:to-deep-dark size-56 rounded-[55px] text-bluish-white font-bold 
      flex cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)]">
        <div className="grid w-full px-5 py-5 self-end">
          <span className="w-fit text-2xl">Groceries</span>
          <span className="w-fit text-4xl justify-self-end">+</span>
        </div>
      </button>

      <button className="bg-linear-to-b from-bluish-white to-category-groceries size-56 rounded-[55px] text-bluish-white font-bold 
      flex cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)]">
        <div className="grid w-full px-5 py-5 self-end">
          <span className="w-fit text-2xl">Groceries</span>
          <span className="w-fit text-4xl justify-self-end">+</span>
        </div>
      </button>
      <button className="bg-linear-to-b from-bluish-white to-category-groceries size-56 rounded-[55px] text-bluish-white font-bold 
      flex cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)]">
        <div className="grid w-full px-5 py-5 self-end">
          <span className="w-fit text-2xl">Groceries</span>
          <span className="w-fit text-4xl justify-self-end">+</span>
        </div>
      </button>
      <button className="bg-linear-to-b from-bluish-white to-category-groceries size-56 rounded-[55px] text-bluish-white font-bold 
      flex cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)]">
        <div className="grid w-full px-5 py-5 self-end">
          <span className="w-fit text-2xl">Groceries</span>
          <span className="w-fit text-4xl justify-self-end">+</span>
        </div>
      </button>
      <button className="bg-linear-to-b from-bluish-white to-category-groceries size-56 rounded-[55px] text-bluish-white font-bold 
      flex cursor-pointer transition-transform hover:scale-103 active:scale-100 duration-250 ease-in-out shadow-[5px_7px_15px_rgba(0,0,0,0.25)]">
        <div className="grid w-full px-5 py-5 self-end">
          <span className="w-fit text-2xl">Groceries</span>
          <span className="w-fit text-4xl justify-self-end">+</span>
        </div>
      </button>
      
      
    </div>
  );
}

//буде лічильник, який зберігатиме кількість записів кожної категорії 
//і 5 найбільш вживаних будуть показуватися на екрані
//elem генеруються за допомогою map 