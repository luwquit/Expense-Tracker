import { IconPickInput } from "@/components/input/IconPickInput";
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../../../components/ui/dialog";
import { ColorPickInput } from "@/components/input/ColorPickInput";

export function AddSavingWindow() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="lg:text-3xl md:text-2xl text-xl font-semibold mb-3 md:mb-0 text-deep-blue dark:text-bluish-white text-nowrap">Create New saving</DialogTitle>
        <DialogDescription className="text-deep-blue dark:text-bluish-white mb-2">
          You can create new saving category for your goals.
        </DialogDescription>
        <div className="space-y-3">
          <div className="pop-up-input">
            <label>Name</label>
            <input placeholder="e.g. New car" className="ml-5 focus:outline-none" />
          </div>

          <div className="pop-up-input">
            <label>Saving Goal</label>
            <input placeholder="$0.00" className="ml-5 focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <IconPickInput />
            <ColorPickInput />
          </div>
          

          <div className="pop-up-input">
            <label>Description</label>
            <input placeholder="(optional)" type="text" className="ml-5 focus:outline-none" />
          </div>
        </div>
      </DialogHeader>
      <DialogFooter>
        <button className="pop-up-btn">Create</button>
      </DialogFooter>
    </>
  );
}