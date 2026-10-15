import { useMemo, useState, type ReactNode } from "react";
import { PopUpWindowContext, type PopUpWindow } from "./PopUpWindowContext";

export function PopUpWindowContextProvider({children}: {children: ReactNode}) {
  const [popUpWindow, setPopUpWindow] = useState<PopUpWindow>(false);

  const value = useMemo(() => ({popUpWindow, setPopUpWindow}), [popUpWindow]);

  return <PopUpWindowContext value={value}>{children}</PopUpWindowContext>
}