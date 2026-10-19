import { NavLink } from "react-router";
import { ToggleThemeBtn } from "../../buttons/ToggleThemeBtn";
import { HeaderBg } from "./HeaderBg";

export function Header() {
  return (
    <HeaderBg>
      <div className="grid grid-cols-2 items-center">
        <NavLink to="/" className="font-bold lg:text-3xl md:text-2xl text-lg w-fit text-nowrap">Expense Tracker</NavLink>
        <div className="flex items-center lg:gap-20 md:gap-10 gap-5 justify-self-end">
          <nav className="flex lg:gap-x-10 gap-x-7">
            <NavLink to="/history" className="font-medium lg:text-xl md:text-lg text-sm text-nowrap hover:opacity-70 transition-opacity">
              View history
            </NavLink>
            <NavLink to="/savings" className="font-medium lg:text-xl md:text-lg text-sm text-nowrap hover:opacity-70 transition-opacity">
              My savings
            </NavLink>
          </nav>
          <ToggleThemeBtn />
        </div>
      </div>
    </HeaderBg>
  )
}
