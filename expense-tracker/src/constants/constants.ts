import type { TransactionType } from "@/types/types";

export const amountColor: Record<TransactionType, string> = {
  income: 'text-income-light dark:text-income-dark',
  expense: 'text-expense-light dark:text-expense-dark',
  saving: 'text-saving-light'
};

export const amountBgColor: Record<TransactionType, string> = {
  income: 'to-income-light/30 dark:to-income-dark/30',
  expense: 'to-expense-light/30 dark:to-expense-dark/30',
  saving: 'to-saving-light/30'
}