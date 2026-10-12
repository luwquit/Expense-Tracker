import { useTheme } from "../../contexts/ThemeContext";

export function DetailsBtn() {
  const {theme} = useTheme();
  return (
    <div className="flex flex-col w-fit items-center gap-y-3">
      <button className="flex hero-button">
        <img src={theme === 'light' ? "menu-icon-lightTheme.png" : "menu-icon-darkTheme.png"} 
          className="size-13"
        />
      </button>
      <label>Details</label>
    </div>
    
  );
}