import type { Category } from "@/types/types";
import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

interface CategoryContextType {
  category: Category,
  setCategory: Dispatch<SetStateAction<Category>>
}

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const useCategory = () => {
  const context = useContext(CategoryContext);

  if (context === undefined) {
    throw new Error('No provider in Category Context')
  };

  return context;
}