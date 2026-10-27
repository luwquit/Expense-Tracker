import { useMemo, useState, type ReactNode } from "react"
import { ColorPickerContext } from "./ColorPickerContext";

export const ColorPickerProvider = ({children}: {children: ReactNode}) => {
  const [hex, setHex] = useState<string>('#fff');
  const value = useMemo(() => ({hex, setHex}), [hex]);

  return <ColorPickerContext value={value}>{children}</ColorPickerContext>
}