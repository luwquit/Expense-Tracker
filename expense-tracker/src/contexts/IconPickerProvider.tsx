import { useState, useMemo, type ReactNode } from "react";
import { IconPickerContext } from "./IconPickerContext";
import type { IconName } from "lucide-react/dynamic";

export function IconPickerProvider({children}: {children: ReactNode}) {
  const [iconName, setIconName] = useState<IconName | null>(null);
  const value = useMemo(() => ({iconName, setIconName}), [iconName]);

  return <IconPickerContext value={value}>{children}</IconPickerContext>
}