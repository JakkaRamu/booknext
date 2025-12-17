import { useTheme } from "@/context/themeProvider";
import { RootLayoutNavProps } from "@/interfaces/rootLayoutNavInterface";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigator } from "./stackNavigator";

export const RootLayoutNav = ({ onRootLayoutView }: RootLayoutNavProps) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      onLayout={onRootLayoutView}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <StackNavigator />
    </SafeAreaView>
  );
};
