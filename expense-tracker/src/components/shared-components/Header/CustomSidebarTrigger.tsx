import { useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/contexts/ThemeContext";

export function CustomSidebarTrigger() {
  const {toggleSidebar} = useSidebar();
  const {theme} = useTheme();

  return (
    <button onClick={toggleSidebar} className="cursor-pointer hover:opacity-70 hover:scale-105 active:scale-100 transition-all">
      <img src={theme === 'light' ? 'header-menu-icon-darkTheme.png' : 'header-menu-icon-lightTheme.png'} className="size-7" />
    </button>
  );
}