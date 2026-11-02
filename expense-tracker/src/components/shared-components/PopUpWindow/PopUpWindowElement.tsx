import { 
  Dialog,
  DialogContent,
} from "../../../components/ui/dialog";
import { usePopUpControls } from "@/hooks/PopUpWindowHooks";
import { usePopUpWindow } from "@/contexts/PopUpWindowContext";
import { AddTransactionWindow } from "./AddTransactionWindow";
import { AddCategoryWindow } from "./AddCategoryWindow";
import { AddSavingWindow } from "./AddSavingWindow";

export function PopUpWindowElement() {
  const {closePopUp} = usePopUpControls();
  const {popUpWindow} = usePopUpWindow();
  
  return (
    <Dialog open onOpenChange={(popUpWindow)  => {
      if (!popUpWindow) closePopUp()
      
    }}>
      <DialogContent className="bg-linear-to-b from-bluish-white to-bluish-gray dark:from-deep-dark dark:to-deep-blue 
        py-10 px-12 text-deep-blue dark:text-bluish-white"
      >
        {popUpWindow === 'transaction' && <AddTransactionWindow />}
        {popUpWindow === 'category' && <AddCategoryWindow />}
        {popUpWindow === 'savings' && <AddSavingWindow />}
      </DialogContent>
    </Dialog>
  );
}
