import { ToggleThemeBtn } from "@/components/buttons/ToggleThemeBtn";
import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { HeaderBg } from "./HeaderBg";

export function LayoutSidebarHeader({children}: {children: ReactNode}) {
  return (
    <HeaderBg>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 ">
          {children}
          <NavLink to="/" className="font-bold lg:text-3xl md:text-2xl text-lg w-fit text-nowrap">Expense Tracker</NavLink>
        </div>
        <div className="justify-self-end">
          <ToggleThemeBtn />
        </div>
      </div>
    </HeaderBg>
  );
}