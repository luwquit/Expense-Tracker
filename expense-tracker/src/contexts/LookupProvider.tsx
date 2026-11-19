import { useMemo, type ReactNode } from "react";
import { LookupContext } from "./LookupContext";
import { useCategories } from "@/hooks/useCategories";
import { useSavings } from "@/hooks/useSavings";

export function LookupProvider({children}: {children: ReactNode}) {
  const {categoryMap} = useCategories();
  const {savingMap} = useSavings();
  const value = useMemo(() => ({categoryMap, savingMap}), [categoryMap, savingMap]);
  return <LookupContext value={value}>{children}</LookupContext>
}