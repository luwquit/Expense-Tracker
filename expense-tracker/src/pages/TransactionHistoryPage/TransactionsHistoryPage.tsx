import { NavLink } from "react-router";
import { Header } from "../shared-components/Header";
import { TransactionMessage } from "@/pages/shared-components/TransactionMessage";
import { Devider } from "@/components/ui/Devider";
import { ArrowBackButton } from "@/components/buttons/ArrowBackButton";

export function TransactionsHistoryPage() {

  return (
    <section className="relative py-40">
      <Header />

      <div className="flex gap-4 items-center w-fit">
        <NavLink to="/" >
          <ArrowBackButton />
        </NavLink>
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold text-deep-blue dark:text-bluish-white">Transaction history</h2>
      </div>
      <Devider />
      <TransactionMessage />
    </section>
  );
}