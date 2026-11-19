import type { Category, Saving } from "@/types/types";
import { createContext, useContext } from "react";

type LookupValueType = {
  categoryMap: Map<number, Category>,
  savingMap: Map<number, Saving>
}

export const LookupContext = createContext<LookupValueType | null>(null);

export function useLookup() {
  const context = useContext(LookupContext);

  if (context === undefined) {
    throw new Error('No provider in Lookup Context')
  };

  return context;
}