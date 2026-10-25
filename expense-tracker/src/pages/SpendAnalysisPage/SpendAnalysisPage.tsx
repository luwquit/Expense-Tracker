import { ArrowBackButton } from "@/components/buttons/ArrowBackButton";
import { Layout } from "@/components/shared-components/Header/Layout";
import { Devider } from "@/components/ui/Devider";

export function SpendAnalysisPage() {
  return (
    <>
      <Layout>
        <div className="flex gap-4 items-center w-fit ">
          <ArrowBackButton />
          <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold text-deep-blue dark:text-bluish-white">Analysis</h2>
        </div>
        <Devider />
      </Layout>
    </>
  );
}