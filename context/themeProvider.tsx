import { DarkColors, LightColors } from "@/constants/colors";
import React, { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeMode = "dark" | "light";

type ThemeContextValue = {
  mode: ThemeMode;
  colors: typeof DarkColors;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>(
    systemScheme === "dark" ? "dark" : "light"
  );

  const value = useMemo(
    () => ({
      mode,
      colors: mode === "dark" ? DarkColors : LightColors,
      toggleTheme: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
