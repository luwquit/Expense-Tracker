import { useTheme } from "../../contexts/ThemeContext";

export function AddTransationBtn() {
  const {theme} = useTheme();

  return (
    <div className="flex flex-col w-fit items-center gap-y-3 ">
      <button className="flex hero-button lg:px-13 px-10 md:py-3 py-2">
        <img src={theme === 'light' ? "transaction-icon-lightTheme.png" : "transaction-icon-darkTheme.png"} 
          className="lg:size-13 size-10 block shrink-0"
        />
      </button>
      <label className="lg:text-md text-sm">Add Transaction</label>
    </div>
    
  );
}
// padding-block: calc(var(--spacing) * 3);
//     padding-inline: calc(var(--spacing) * 15);