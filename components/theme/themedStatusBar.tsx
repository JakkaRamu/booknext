import { useTheme } from "@/context/themeProvider";
import { StatusBar } from "expo-status-bar";

export default function ThemedStatusBar() {
  const { mode } = useTheme();

  return <StatusBar style={mode === "dark" ? "light" : "dark"} animated />;
}
