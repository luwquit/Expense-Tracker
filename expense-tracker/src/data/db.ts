import type { Category, Saving, Transaction } from "@/types/types";
import { Dexie, type EntityTable } from "dexie";

export const db = new Dexie("ExpenseTrackerDB") as Dexie & {
  categories: EntityTable<Category, 'id'>,
  transactions: EntityTable<Transaction, 'id'>,
  savings: EntityTable<Saving, 'id'>
}

db.version(1).stores({
  categories: "++id, name",
  transactions: "++id, amount, type, categoryId, date",
  savings: "++id, status"
})