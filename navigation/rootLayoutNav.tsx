import { LandingPageLoader } from "@/components/common/loaders/lazyLoading/landingPageLazyLoading";
import { useTheme } from "@/context/themeProvider";
import { useLoginState } from "@/hooks/useLoginState";
import { RootLayoutNavProps } from "@/interfaces/rootLayoutNavInterface";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigator } from "./stackNavigator";

export const RootLayoutNav = ({ onRootLayoutView }: RootLayoutNavProps) => {
  const { colors } = useTheme();
  const { isLoggedIn, isLoading } = useLoginState();
  return (
    <SafeAreaView
      onLayout={onRootLayoutView}
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      {isLoading ? (
        <LandingPageLoader />
      ) : (
        <StackNavigator
          background={colors.background}
          isLoggedIn={isLoggedIn}
        />
      )}
    </SafeAreaView>
  );
};
