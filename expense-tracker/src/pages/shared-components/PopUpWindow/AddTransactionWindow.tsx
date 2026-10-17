import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../../../components/ui/dialog";

export function AddTransactionWindow() {
  return(
    <>
      <DialogHeader>
        <DialogTitle className="lg:text-3xl md:text-2xl text-xl font-semibold mb-3 md:mb-0 text-deep-blue dark:text-bluish-white text-nowrap">Add New transaction</DialogTitle>
        <DialogDescription className="text-deep-blue dark:text-bluish-white mb-2">
          You can add here your income, expenses and savings as well.
        </DialogDescription>
        <div className="space-y-3">
          <div className="flex flex-col gap-2 bg-bluish-white dark:bg-deep-blue md:py-3 py-2 px-5 rounded-2xl w-full max-w-xl">
            <label>Amount</label>
            <input placeholder="$0.00" className="ml-5 focus:outline-none" />
          </div>

          <div className="flex flex-col gap-2 bg-bluish-white dark:bg-deep-blue md:py-3 py-2 px-5 rounded-2xl w-full max-w-xl">
            <label>Category</label>
            <input className="ml-5 focus:outline-none" />
          </div>

          <div className="flex flex-col gap-2 bg-bluish-white dark:bg-deep-blue md:py-3 py-2 px-5 rounded-2xl w-full max-w-xl">
            <label>Type</label>
            <input className="ml-5 focus:outline-none" />
          </div>

          <div className="flex flex-col gap-2 bg-bluish-white dark:bg-deep-blue md:py-3 py-2 px-5 rounded-2xl w-full max-w-xl">
            <label>Description</label>
            <input placeholder="(optional)" type="text" className="ml-5 focus:outline-none" />
          </div>
        </div>
      </DialogHeader>
      <DialogFooter>
        <button className="bg-deep-blue dark:bg-bluish-white text-bluish-white dark:text-deep-blue font-bold py-3 px-10 w-fit rounded-4xl
        active:opacity-70 hover:scale-105 active:scale-100 transition-all cursor-pointer">
          Submit
        </button>
      </DialogFooter>
    </>
  );
}