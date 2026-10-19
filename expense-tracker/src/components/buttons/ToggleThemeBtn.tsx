import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext"

export function ToggleThemeBtn() {
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
  }, [theme])

  const handleToggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <button onClick={handleToggleTheme} className="shrink-0 flex">
      <img src={theme === 'light' ? 'sun-icon.png' : 'moon-icon.png'}
      className="lg:size-13 md:size-10 size-7 cursor-pointer hover:opacity-70 transition-opacity" aria-label="Toggle Theme" />
    </button>
  );
}