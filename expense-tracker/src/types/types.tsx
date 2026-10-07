export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: number,
  amount: number,
  type: TransactionType,
  category: string,
  date: Date,
  note: string
}