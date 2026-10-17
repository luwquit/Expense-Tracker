import { NavLink } from "react-router";
import { Devider } from "../../components/ui/Devider";
import { TransactionMessage } from "../shared-components/TransactionMessage";

export function TransactionsHomePage() {
  return (
    <section className="mt-30">
      <div className="flex items-center justify-between px-2">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold text-deep-blue dark:text-bluish-white">Latest transaction</h2>
        <NavLink to="/history" className="lg:text-xl md:text-lg text-md font-light text-blue-details dark:text-bluish-gray cursor-pointer transition-opacity hover:opacity-70">
          See all
        </NavLink>
      </div>
      <Devider />
      <TransactionMessage />
    </section>
  );
}