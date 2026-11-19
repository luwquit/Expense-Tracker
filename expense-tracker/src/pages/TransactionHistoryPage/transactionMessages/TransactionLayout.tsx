import { TransactionCard } from "./TransactionCard";

export function TransactionLayout() {
  return (
    <div className="grid grid-cols-1 gap-y-7 gap-x-2 justify-center">
      <TransactionCard />
    </div>
  );
}