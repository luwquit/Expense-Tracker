import { useTheme } from "../../contexts/ThemeContext";

export function SpendAnalysisBtn() {
  const {theme} = useTheme();
  return (
    <div className="flex flex-col w-fit items-center gap-y-3">
      <button className="flex hero-button">
        <img src={theme === 'light' ? "analysis-icon-lightTheme.png" : "analysis-icon-darkTheme.png"} 
          className="size-13"
        />
      </button>
      <label>Spend Analysis</label>
    </div>
  );
}