import { Devider } from "./Devider";
import { TransactionMessage } from "./TransactionMessage";

export function TransactionsHomePage() {
  return (
    <section className="mt-20">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-3xl font-semibold text-deep-blue dark:text-bluish-white">Latest transaction</h2>
        <p className="text-xl font-light text-blue-details dark:text-bluish-gray cursor-pointer transition-opacity hover:opacity-70">View</p>
      </div>
      <Devider />
      <TransactionMessage />
    </section>
  );
}