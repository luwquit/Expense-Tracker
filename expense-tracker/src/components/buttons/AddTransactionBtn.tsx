import { useTheme } from "../../contexts/ThemeContext";
import { usePopUpControls } from "../../hooks/PopUpWindowHooks";

export function AddTransationBtn() {
  const {theme} = useTheme();
  const {openPopUp} = usePopUpControls();

  return (
    <div className="flex flex-col w-fit items-center gap-y-3">
      <button className="flex hero-button lg:px-13 px-10 md:py-3 py-2" onClick={openPopUp}>
        <img src={theme === 'light' ? "transaction-icon-lightTheme.png" : "transaction-icon-darkTheme.png"} 
          className="lg:size-13 size-10 block shrink-0"
        />
      </button>
      <label className="lg:text-md text-sm">Add Transaction</label>
    </div>
    
  );
}