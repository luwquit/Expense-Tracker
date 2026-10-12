import { AddCategoryBtn } from "./buttons/AddCategoryBtn";
import { AddTransationBtn } from "./buttons/AddTransactionBtn";
import { DetailsBtn } from "./buttons/DetailsBtn";
import { SpendAnalysisBtn } from "./buttons/SpendAnalysisBtn";

export function HeroNavigation() {
  return (
    <nav className="grid grid-cols-4 justify-items-center mt-15">
      <AddTransationBtn />
      <AddCategoryBtn />
      <SpendAnalysisBtn />
      <DetailsBtn />
    </nav>
  );
}
