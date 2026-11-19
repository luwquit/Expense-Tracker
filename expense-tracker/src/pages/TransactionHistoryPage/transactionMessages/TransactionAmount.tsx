import { amountColor } from "@/constants/constants";
import type { Transaction } from "@/types/types";

export function TransactionAmount({transaction}: {transaction: Transaction}) {
  return (
    <h3 className={`font-bold lg:text-2xl md:text-xl text-md w-fit ${amountColor[transaction.type]}`}>
      {transaction.type === 'expense' ? '-$' : '+$'}{transaction.amount} 
    </h3>
  );
}