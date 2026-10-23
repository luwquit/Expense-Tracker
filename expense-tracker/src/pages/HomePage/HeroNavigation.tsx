import { AddCategoryBtn } from "../../components/buttons/AddCategoryBtn";
import { AddTransationBtn } from "../../components/buttons/AddTransactionBtn";
import { SavingsBtn } from "../../components/buttons/SavingsBtn";
import { SpendAnalysisBtn } from "../../components/buttons/SpendAnalysisBtn";

export function HeroNavigation() {
  return (
    <nav className="grid md:grid-cols-4 grid-cols-[200px_200px] gap-y-5 justify-items-center justify-center mt-15">
      <AddTransationBtn />
      <AddCategoryBtn />
      <SavingsBtn />
      <SpendAnalysisBtn />
    </nav>
  );
}
