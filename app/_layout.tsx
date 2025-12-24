import { AuthProvider } from "@/context/authProvider";
import QueryProvider from "@/context/queryClientProvider";
import { ThemeProvider } from "@/context/themeProvider";
import { useLayout } from "@/hooks/useLayout";
import { RootLayoutNav } from "@/navigation/rootLayoutNav";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { loaded, onRootLayoutView } = useLayout();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <QueryProvider>
        <ThemeProvider>
          <AuthProvider>
            <RootLayoutNav onRootLayoutView={onRootLayoutView} />
          </AuthProvider>
        </ThemeProvider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}
