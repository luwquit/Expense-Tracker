import { Devider } from "../../components/ui/Devider";
import { QuickActionsElements } from "./QuickActionsElements";

export function QuickActions() {
  return (
    <section className="mt-60">
      <div className="flex items-center justify-between px-2">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold text-deep-blue dark:text-bluish-white">Quick Actions</h2>
        <p className="lg:text-xl md:text-lg text-md font-light text-blue-details dark:text-bluish-gray cursor-pointer transition-opacity hover:opacity-70">Edit</p>
      </div>
      <Devider />
      <QuickActionsElements />
    </section>
  );
}