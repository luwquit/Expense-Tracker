import { type Category } from "@/types/types";
import { useMemo, useState, type ReactNode } from "react";
import { CategoryContext } from "./CategoryContext";

export const CategoryProvider = ({children}: {children: ReactNode}) => {
  const [category, setCategory] = useState<Category | null>(null);
  const value = useMemo(() => ({category, setCategory}), [category]);

  return <CategoryContext value={value}>{children}</CategoryContext>
}