import { useTheme } from "../../contexts/ThemeContext";

export function AddTransationBtn() {
  const {theme} = useTheme();

  return (
    <div className="flex flex-col w-fit items-center gap-y-3">
      <button className="flex hero-button">
        <img src={theme === 'light' ? "transaction-icon-lightTheme.png" : "transaction-icon-darkTheme.png"} 
          className="size-13 block"
        />
      </button>
      <label>Add Transaction</label>
    </div>
    
  );
}