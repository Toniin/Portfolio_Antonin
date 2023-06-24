import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext"

export const useTheme: () => ThemeContextContentType = () => useContext(ThemeContext);

type ThemeContextContentType = {
  theme: string;
  toggleTheme: () => void;
};