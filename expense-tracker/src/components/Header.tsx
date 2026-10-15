import { NavLink } from "react-router";
import { ToggleThemeBtn } from "./buttons/ToggleThemeBtn";

export function Header() {

  return (
    <section className="py-7 text-deep-blue dark:text-bluish-white bg-bluish-white/50 dark:bg-deep-dark/50 backdrop-blur-lg fixed top-0 right-0 left-0 lg:px-60 md:px-40 px-10 border-deep-blue/10 dark:border-bluish-white/5 border-b z-50">
      <div className="grid grid-cols-2 items-center">
        <NavLink to="/" className="font-bold lg:text-3xl md:text-2xl text-lg w-fit">Expense Tracker</NavLink>
        <div className="flex items-center lg:gap-20 md:gap-10 gap-5 justify-self-end">
          <NavLink to="/history" className="font-medium lg:text-xl md:text-lg text-sm text-nowrap hover:opacity-70 transition-opacity">
            View history
          </NavLink>
          <ToggleThemeBtn />
        </div>
      </div>
    </section>
  )
}