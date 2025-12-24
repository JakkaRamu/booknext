import { THEME_DeFAULT } from "@/constants/commonConstants/appConstants";
import { useThemeStore } from "@/hooks/useTheme";

import React, { createContext, useContext, useEffect, useState } from "react";
import { StatusBar, useColorScheme } from "react-native";

const ThemeContext = createContext<"light" | "dark">("light");

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemTheme = useColorScheme();
  const { theme: storedTheme, isLoading } = useThemeStore();
  const [prevTheme, setPrevTheme] = useState<string | undefined>(undefined);

  // Determine the final theme
  const finalTheme: "light" | "dark" =
    storedTheme && storedTheme !== THEME_DeFAULT
      ? (storedTheme as "light" | "dark")
      : (systemTheme as "light" | "dark") || "light";

  useEffect(() => {
    if (storedTheme !== prevTheme) {
      console.log(
        "🎨 THEME CHANGED! Previous:",
        prevTheme,
        "-> New storedTheme:",
        storedTheme,
        "| systemTheme:",
        systemTheme,
        "| finalTheme:",
        finalTheme
      );
      setPrevTheme(storedTheme);
    }
  }, [storedTheme, systemTheme, finalTheme, prevTheme]);

  if (isLoading) {
    console.log("🎨 ThemeProvider loading...");
    return null;
  }

  return (
    <ThemeContext.Provider value={finalTheme}>
      <StatusBar
        barStyle={finalTheme === "light" ? "dark-content" : "light-content"}
        translucent={true}
        backgroundColor="transparent"
      />

      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
