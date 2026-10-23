import { SavingCard } from "@/components/shared-components/AccordionCardLayout/SavingCard";

export function SavingCardLayout() {
  return (
    <section className="grid md:grid-cols-[repeat(auto-fit,minmax(27rem,1fr))] grid-cols-1 justify-center gap-7 md:mt-10 mt-7">
      <SavingCard />
      <SavingCard />
      <SavingCard />
      <SavingCard />
      <SavingCard />
      <SavingCard />
      <SavingCard />
      <SavingCard />
      <SavingCard />
    </section>
  );
}