import { ThemeProvider } from "@/context/themeProvider";
import { useLayout } from "@/hooks/useLayout";
import { RootLayoutNav } from "@/navigation/rootLayoutNav";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { loaded, onRootLayoutView } = useLayout();

  if (!loaded) return null;

  return (
    <ThemeProvider>
      <RootLayoutNav onRootLayoutView={onRootLayoutView} />
    </ThemeProvider>
  );
}
