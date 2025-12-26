import { LandingPageLoader } from "@/components/common/loaders/lazyLoading/landingPageLazyLoading";

import { ThemedSafeAreaView } from "@/components/theme/themedSafeAreaView";
import { useLoginState } from "@/hooks/useLoginState";
import { useThemeConfig } from "@/hooks/useThemeConfig";
import { RootLayoutNavProps } from "@/interfaces/rootLayoutNavInterface";
import { StackNavigator } from "./stackNavigator";

export const RootLayoutNav = ({ onRootLayoutView }: RootLayoutNavProps) => {
  const { background, text, statusBarStyle } = useThemeConfig();
  const { isLoggedIn, isLoading } = useLoginState();

  console.log("RootLayoutNav - isLoggedIn:", isLoggedIn);

  return (
    <ThemedSafeAreaView style={{ flex: 1 }} onLayout={onRootLayoutView}>
      {/* StatusBar is handled by ThemeProvider to avoid conflicts */}
      {isLoading ? (
        <LandingPageLoader />
      ) : (
        <StackNavigator
          background={background}
          isLoggedIn={isLoggedIn}
          text={text}
        />
      )}
    </ThemedSafeAreaView>
  );
};
