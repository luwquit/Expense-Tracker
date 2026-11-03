import type { Category, NewCategoryType } from "@/types/types";
import { db } from "./db";

const {categories} = db;

export const addCategory = (data: NewCategoryType): Promise<number> => categories.add(data);
export const updateCategory = (id: Category['id'], changes: Partial<NewCategoryType>): Promise<number> => categories.update(id, changes);
export const deleteCategory = (id: Category['id']): Promise<void> => categories.delete(id);