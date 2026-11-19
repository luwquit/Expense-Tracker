import { NavLink } from "react-router";
import { Devider } from "../../components/ui/Devider";
import { TransactionLayoutHomePage } from "../TransactionHistoryPage/transactionMessages/TransactionLayoutHomePage";
import { SeeMoreBtn } from "@/components/buttons/SeeMoreBtn";
import { useState } from "react";

export function TransactionsHomePage() {
  const [limitCount, setLimitCount] = useState<number>(5);
  return (
    <section className="mt-30">
      <div className="flex items-center justify-between px-2">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold text-deep-blue dark:text-bluish-white">Latest transaction</h2>
        <NavLink to="/history" className="lg:text-xl md:text-lg text-md font-light text-blue-details dark:text-bluish-gray cursor-pointer transition-opacity hover:opacity-70">
          See all
        </NavLink>
      </div>
      <Devider />
      <TransactionLayoutHomePage limitCount={limitCount} />
      <div className="flex justify-center mt-10">
        <SeeMoreBtn setLimitCount={setLimitCount} />
      </div>
    </section>
  );
}