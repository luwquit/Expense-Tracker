
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AddSavingForm } from "./AddSavingForm";

export function AddSavingWindow() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="lg:text-3xl md:text-2xl text-xl font-semibold mb-3 md:mb-0 text-deep-blue dark:text-bluish-white text-nowrap">Create New saving</DialogTitle>
        <DialogDescription className="text-deep-blue dark:text-bluish-white mb-2">
          You can create new saving category for your goals.
        </DialogDescription>
      </DialogHeader>
      <AddSavingForm />
    </>
  );
}