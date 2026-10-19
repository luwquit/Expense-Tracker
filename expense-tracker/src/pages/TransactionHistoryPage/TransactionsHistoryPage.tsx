import { NavLink } from "react-router";
import { TransactionMessage } from "@/components/shared-components/TransactionMessage";
import { Devider } from "@/components/ui/Devider";
import { ArrowBackButton } from "@/components/buttons/ArrowBackButton";
import { Layout } from "@/components/shared-components/Header/Layout";

export function TransactionsHistoryPage() {

  return (
    <>
      <Layout>
        <div className="flex gap-4 items-center w-fit md:mt-0 mt-10">
          <NavLink to="/" >
            <ArrowBackButton />
          </NavLink>
          <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold text-deep-blue dark:text-bluish-white">Transaction history</h2>
        </div>
        <Devider />
        <TransactionMessage />
      </Layout>
    </>
  );
}