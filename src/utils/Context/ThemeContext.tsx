import { createContext, useState, useEffect } from "react";

export const ThemeContext: React.Context<ThemeContextContentType> = createContext(
  {} as ThemeContextContentType
);

export const ThemeContextProvider: ({
  children,
}: ThemeContextProviderProps) => JSX.Element = ({ children }) => {
  const localTheme: string | null = localStorage.getItem("theme-color");

  const [theme, setTheme]: [string, SetStateString] = useState(
    localTheme === "dark" ? localTheme : "light"
  );

  const toggleTheme: () => void = () => {
    const currentTheme: string = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    localStorage.setItem("theme-color", currentTheme);
  };

  // Set an attribute theme to body with value of theme
  useEffect(() => {
    if (localTheme === "light" || localTheme === "dark") {
      document.documentElement.setAttribute("theme", localTheme);
    } else {
      localStorage.setItem("theme-color", theme);
    }
  }, [theme, localTheme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

type ThemeContextContentType = {
  theme: string;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type SetStateString = React.Dispatch<React.SetStateAction<string>>