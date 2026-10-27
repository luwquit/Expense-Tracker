import type { iconsDataType } from "@/components/ui/icons-data";

export type TransactionType = 'income' | 'expense' | 'saving';

export type SavingStatusType = 'inProgress' | 'achieved';

export interface Transaction {
  id: string,
  amount: number,
  type: TransactionType,
  category: Category,
  date: Date,
  note: string,
}

export interface Category {
  id: string,
  name: string,
  monthlyBudget: number | null,
  icon: iconsDataType,
  color: string,
}

export interface Saving {
  id: string,
  name: string,
  savingGoal: number,
  currentAmount: number | null,
  icon: iconsDataType,
  color: string,
  description: string | null,
  status: SavingStatusType,
  achivedDate: Date,
}