import { Colors } from "@/constants/colors";
import { useMemo } from "react";
import { useThemeColor } from "./useThemeColors";

interface ThemeConfig {
  background: string;
  text: string;
  statusBarStyle: "dark" | "light";
}

export const useThemeConfig = (): ThemeConfig => {
  const background = useThemeColor({}, "background");
  const text = useThemeColor({}, "text");

  const statusBarStyle = useMemo(
    () => (Colors.light.background === background ? "dark" : "light"),
    [background]
  );

  return { background, text, statusBarStyle };
};
