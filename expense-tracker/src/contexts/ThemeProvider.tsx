import {useMemo, useState, type ReactNode} from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

export const ThemeContextProvider = ({children} : {children: ReactNode}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if(typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });
  const value = useMemo(() => ({theme, setTheme}), [theme]);

  return <ThemeContext value={value}>{children}</ThemeContext>
}