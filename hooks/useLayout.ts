import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

interface UseFontLoaderReturn {
  loaded: boolean;
  error: Error | null;
  onRootLayoutView: () => void;
}

/**
 * Loads all fonts required by the app and
 * hides the splash screen once ready.
 *
 * MUST be used only in app/_layout.tsx
 */
export const useLayout = (): UseFontLoaderReturn => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Surface font errors immediately
  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  // Hide splash once fonts are loaded and layout is ready
  const onRootLayoutView = useCallback(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return { loaded, error, onRootLayoutView };
};
