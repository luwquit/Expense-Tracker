import { AddCategoryBtn } from "./buttons/AddCategoryBtn";
import { AddTransationBtn } from "./buttons/AddTransactionBtn";
import { DetailsBtn } from "./buttons/DetailsBtn";
import { SpendAnalysisBtn } from "./buttons/SpendAnalysisBtn";

export function HeroNavigation() {
  return (
    <nav className="grid md:grid-cols-4 grid-cols-[200px_200px] gap-y-5 justify-items-center justify-center mt-15">
      <AddTransationBtn />
      <AddCategoryBtn />
      <SpendAnalysisBtn />
      <DetailsBtn />
    </nav>
  );
}
