import type { IconName } from "lucide-react/dynamic";

export type TransactionType = 'income' | 'expense' | 'saving';

export type SavingStatusType = 'inProgress' | 'achieved';

export interface Transaction {
  id: number,
  amount: number,
  type: TransactionType,
  categoryId: number,
  date: Date,
  note?: string,
}

export type NewTransactionType = Omit<Transaction, "id">;

export interface Category {
  id: number,
  name: string,
  monthlyBudget?: number,
  icon: IconName,
  color: string,
}

export type NewCategoryType = Omit<Category, "id">;

export interface Saving {
  id: number,
  name: string,
  savingGoal: number,
  currentAmount: number,
  icon: IconName,
  color: string,
  description?: string,
  status: SavingStatusType,
  achivedDate: Date | null,
}

export type NewSavingType = Omit<Saving, "id">;