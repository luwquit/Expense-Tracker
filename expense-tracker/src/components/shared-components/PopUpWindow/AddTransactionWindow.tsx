import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AddTransactionForm } from "./AddTransactionForm";

export function AddTransactionWindow() {
  return(
    <>
      <DialogHeader>
        <DialogTitle className="lg:text-3xl md:text-2xl text-xl font-semibold mb-3 md:mb-0 text-deep-blue dark:text-bluish-white text-nowrap">Add New transaction</DialogTitle>
        <DialogDescription className="text-deep-blue dark:text-bluish-white mb-2">
          You can add here your income, expenses and savings as well.
        </DialogDescription>
        <AddTransactionForm />
      </DialogHeader>
    </>
  );
}