import { useTheme } from "@/context/themeProvider";
import React from "react";
import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ThemedSafeAreaViewProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function ThemedSafeAreaView({
  children,
  style,
}: ThemedSafeAreaViewProps) {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}
