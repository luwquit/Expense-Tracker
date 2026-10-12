import { useTheme } from "../../contexts/ThemeContext";

export function AddCategoryBtn() {
  const {theme} = useTheme();
  return (
    <div className="flex flex-col w-fit items-center gap-y-3">
      <button className="flex hero-button">
        <img src={theme === 'light' ? "category-icon-lightTheme.png" : "category-icon-darkTheme.png"} 
          className="size-13"
        />
      </button>
      <label>Add Category</label>
    </div>
    
  );
}