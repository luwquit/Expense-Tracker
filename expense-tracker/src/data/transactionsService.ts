import type { NewTransactionType, Transaction } from "@/types/types";
import { updateAmountSaving } from "@/data/savingsService";
import { db } from "./db";

const {transactions} = db;

export const updateTransaction = (id: Transaction['id'], changes: Partial<NewTransactionType>): Promise<number> => transactions.update(id, changes);
export const deleteTransaction = (id: Transaction['id']): Promise<void> => transactions.delete(id);

export async function addTransaction(data: NewTransactionType): Promise<void> {
  db.transaction('rw', db.transactions, db.savings, async () => {
    await transactions.add(data);

    if (data.type === 'saving') {
      const updated = await updateAmountSaving(data.category.id, data.amount);
      if (updated === 0) {
        throw new Error('Saving not found.')
      }
    }
  });
};