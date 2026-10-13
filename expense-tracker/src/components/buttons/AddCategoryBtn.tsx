import { useTheme } from "../../contexts/ThemeContext";

export function AddCategoryBtn() {
  const {theme} = useTheme();
  return (
    <div className="flex flex-col w-fit items-center gap-y-3">
      <button className="flex hero-button lg:px-13 px-10 md:py-3 py-2">
        <img src={theme === 'light' ? "category-icon-lightTheme.png" : "category-icon-darkTheme.png"} 
          className="lg:size-13 size-10 block shrink-0"
        />
      </button>
      <label className="lg:text-md text-sm">Add Category</label>
    </div>
    
  );
}