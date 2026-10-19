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
          <div className="pop-up-input">
            <label>Amount</label>
            <input placeholder="$0.00" className="ml-5 focus:outline-none" />
          </div>

          <div className="pop-up-input">
            <label>Category</label>
            <input className="ml-5 focus:outline-none" />
          </div>

          <div className="pop-up-input">
            <label>Type</label>
            <input className="ml-5 focus:outline-none" />
          </div>

          <div className="pop-up-input">
            <label>Description</label>
            <input placeholder="(optional)" type="text" className="ml-5 focus:outline-none" />
          </div>
        </div>
      </DialogHeader>
      <DialogFooter>
        <button className="pop-up-btn">Submit</button>
      </DialogFooter>
    </>
  );
}