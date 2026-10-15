import { useTheme } from "../../contexts/ThemeContext";

export function ArrowBackButton() {
  const {theme} = useTheme();
  return (
    <img src={theme === "light" ? "back-arrow-icon-lightTheme.png" : "back-arrow-icon-darkTheme.png"}
      className="lg:size-15 md:size-9 size-7 hover:opacity-70 hover:scale-105 active:scale-100 transition-all cursor-pointer"
    />
  );
}