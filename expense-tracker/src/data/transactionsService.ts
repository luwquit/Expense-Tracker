import type { NewTransactionType, Transaction } from "@/types/types";
import { db } from "./db";

const {transactions} = db;

export const addTransaction = (data: NewTransactionType): Promise<number> => transactions.add(data);
export const updateTransaction = (id: Transaction['id'], changes: Partial<NewTransactionType>): Promise<number> => transactions.update(id, changes);
export const deleteTransaction = (id: Transaction['id']): Promise<void> => transactions.delete(id);