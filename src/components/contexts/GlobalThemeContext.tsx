import { createContext, useContext } from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {}
})

export const useThemeContext = () => useContext(ThemeContext);