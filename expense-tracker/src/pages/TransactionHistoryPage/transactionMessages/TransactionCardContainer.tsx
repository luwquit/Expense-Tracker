import { Card } from "@/components/ui/card";
import { amountBgColor } from "@/constants/constants";
import type { Transaction } from "@/types/types";
import type { ReactNode } from "react";

type TransactionCardContainerProps = {
  transaction: Transaction, 
  children : ReactNode
}

export function TransactionCardContainer({
  transaction,
  children
}: TransactionCardContainerProps) {
  return (
    <Card className={`bg-linear-to-r from-bluish-white from-40% dark:from-deep-blue py-5 px-5 shadow-md ring-0 
    ${amountBgColor[transaction.type]}`}>
      {children}
    </Card>
  );
}