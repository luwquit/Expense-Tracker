import { ArrowBackButton } from "@/components/buttons/ArrowBackButton";
import { Layout } from "@/components/shared-components/Header/Layout";
import { SavingCardLayout } from "./SavingCardLayout";
import { Devider } from "@/components/ui/Devider";

export function SavingsPage() {
  return (
    <>
      <Layout>
        <div className="flex gap-4 items-center w-fit ">
          <ArrowBackButton />
          <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold text-deep-blue dark:text-bluish-white">Savings</h2>
        </div>
        <Devider />
        <SavingCardLayout />
      </Layout>
    </>
  );
}

