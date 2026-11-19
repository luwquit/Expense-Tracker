import { TransactionCard } from "./AccordionCardLayout/TransactionCard";

export function TransactionMessage() {
  return (
    <div className="grid grid-cols-1 gap-y-7 gap-x-2 justify-center">
      <TransactionCard />
    </div>
  );
}