import { ColorPickInput } from "@/components/input/ColorPickInput";
import { IconPickInput } from "@/components/input/IconPickInput";
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export function AddCategoryWindow() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="lg:text-3xl md:text-2xl text-xl font-semibold mb-3 md:mb-0 text-deep-blue dark:text-bluish-white text-nowrap">Add New category</DialogTitle>
        <DialogDescription className="text-deep-blue dark:text-bluish-white mb-2">
          You can add custom category for your tracker.
        </DialogDescription>
        <div className="space-y-3">
          <div className="pop-up-input">
            <label>Name</label>
            <input placeholder="e.g. Petcare" className="ml-5 focus:outline-none" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <IconPickInput />
            <ColorPickInput />
          </div>
          

          

          <div className="pop-up-input">
            <label>Monthly budget</label>
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
