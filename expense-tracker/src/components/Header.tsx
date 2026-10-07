import { NavLink } from "react-router";
import { ToggleThemeBtn } from "./ToggleThemeBtn";

export function Header() {

  return (
    <section className="text-text-color dark:text-main-light bg-main-dark dark:bg-dark-gray py-7 px-50">
      <div className="grid grid-cols-2 items-center bg-main-light dark:bg-light-gray rounded-lg py-3 px-10">
        <h2 className="font-bold text-4xl">Expense Tracker</h2>
        <div className="flex items-center gap-20 justify-self-end">
          <nav className="font-medium text-xl">
            <NavLink to={'/history'}>View history</NavLink>
          </nav>
          <ToggleThemeBtn />
        </div>
      </div>
    </section>
  )
}