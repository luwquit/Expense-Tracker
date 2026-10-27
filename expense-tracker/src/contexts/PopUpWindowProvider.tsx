import { useMemo, useState, type ReactNode } from "react";
import { PopUpWindowContext, type PopUpWindowType } from "./PopUpWindowContext";

export function PopUpWindowContextProvider({children}: {children: ReactNode}) {
  const [popUpWindow, setPopUpWindow] = useState<PopUpWindowType>(null);

  const value = useMemo(() => ({popUpWindow, setPopUpWindow}), [popUpWindow]);

  return <PopUpWindowContext value={value}>{children}</PopUpWindowContext>
}