import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AddCategoryForm } from "./AddCategoryForm";

export function AddCategoryWindow() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="lg:text-3xl md:text-2xl text-xl font-semibold mb-3 md:mb-0 text-deep-blue dark:text-bluish-white text-nowrap">Add New category</DialogTitle>
        <DialogDescription className="text-deep-blue dark:text-bluish-white mb-2">
          You can add custom category for your tracker.
        </DialogDescription>
      </DialogHeader>
      <AddCategoryForm />
    </>
  );
}
