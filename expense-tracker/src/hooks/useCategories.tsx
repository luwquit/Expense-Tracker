import { db } from "@/data/db";
import type { Category } from "@/types/types";
import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";

export function useCategories() {
  const categories: Category[] | undefined = useLiveQuery(() => db.categories.toArray(), []);
  const categoryMap = useMemo(() => new Map<number, Category>(categories?.map(c => [c.id, c])), [categories]);
  return {categories, categoryMap}
}