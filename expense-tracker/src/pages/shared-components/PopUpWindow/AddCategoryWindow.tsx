import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../../../components/ui/dialog";

export function AddCategoryWindow() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="lg:text-3xl md:text-2xl text-xl font-semibold mb-3 md:mb-0 text-deep-blue dark:text-bluish-white text-nowrap">Add New category</DialogTitle>
        <DialogDescription className="text-deep-blue dark:text-bluish-white mb-2">
          You can add custom category for your tracker.
        </DialogDescription>
        <div className="space-y-3">
          <div className="flex flex-col gap-2 bg-bluish-white dark:bg-deep-blue md:py-3 py-2 px-5 rounded-2xl w-full max-w-xl">
            <label>Name</label>
            <input placeholder="e.g. Petcare" className="ml-5 focus:outline-none" />
          </div>

          <div className="flex flex-col gap-2 bg-bluish-white dark:bg-deep-blue md:py-3 py-2 px-5 rounded-2xl w-full max-w-xl">
            <label>Icon</label>
            <input className="ml-5 focus:outline-none" />
          </div>

          <div className="flex flex-col gap-2 bg-bluish-white dark:bg-deep-blue md:py-3 py-2 px-5 rounded-2xl w-full max-w-xl">
            <label>Color</label>
            <input className="ml-5 focus:outline-none" />
          </div>

          <div className="flex flex-col gap-2 bg-bluish-white dark:bg-deep-blue md:py-3 py-2 px-5 rounded-2xl w-full max-w-xl">
            <label>Monthly budget</label>
            <input placeholder="(optional)" type="text" className="ml-5 focus:outline-none" />
          </div>
        </div>
      </DialogHeader>
      <DialogFooter>
        <button className="bg-deep-blue dark:bg-bluish-white text-bluish-white dark:text-deep-blue font-bold py-3 px-10 w-fit rounded-4xl
        active:opacity-70 hover:scale-105 active:scale-100 transition-all cursor-pointer">
          Create
        </button>
      </DialogFooter>
    </>
  );
}