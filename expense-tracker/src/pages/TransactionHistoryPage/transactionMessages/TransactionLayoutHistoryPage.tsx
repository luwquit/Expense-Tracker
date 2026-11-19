import { TransactionCard } from "./TransactionCard";
import { useLookup } from "@/contexts/LookupContext";
import { db } from "@/data/db";
import type { Transaction } from "@/types/types";
import { useLiveQuery } from "dexie-react-hooks";

export function TransactionLayoutHistoryPage() {
  const {categoryMap, savingMap} = useLookup();
  const transactions: Transaction[] | undefined = useLiveQuery(() => db.transactions.reverse().toArray(), []);

  if (!transactions) return null;
  return (
    <div className="grid grid-cols-1 gap-y-7 gap-x-2 justify-center">
      {transactions.map(transaction => {
        const targetType = transaction.category.type === 'category' 
          ? categoryMap.get(transaction.category.id) 
          : savingMap.get(transaction.category.id);
        return (
          <TransactionCard key={transaction.id} transaction={transaction} targetType={targetType} />
        )
      })}
    </div>
  );
}