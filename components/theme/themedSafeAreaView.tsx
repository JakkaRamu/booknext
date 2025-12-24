import { useThemeColor } from "@/hooks/useThemeColors";
import {
  createResponsiveShadow,
  useResponsiveStyle,
} from "@/utils/styles/responsiveUI";
import React, { useMemo } from "react";
import { type ViewProps } from "react-native";
import { Edge, SafeAreaView } from "react-native-safe-area-context";

export type ThemedSafeAreaViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  isDefault?: boolean;
  isSecondary?: boolean;
  showShadow?: boolean;
  disableResponsive?: boolean;
  edges?: Edge[];
};

export function ThemedSafeAreaView({
  style,
  lightColor,
  darkColor,
  children,
  isDefault,
  isSecondary,
  showShadow,
  disableResponsive = false,
  edges = ["top", "right", "left"],
  ...otherProps
}: ThemedSafeAreaViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    isSecondary ? "secondary" : "background"
  );

  const defaultBackgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "surface"
  );

  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "borderColor"
  );

  const shadowColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  // Use shared responsive style hook
  const scaledStyle = useResponsiveStyle(style, disableResponsive);

  // Use shared shadow creator
  const shadowStyles = useMemo(() => {
    if (!showShadow) return {};
    return createResponsiveShadow(shadowColor, disableResponsive);
  }, [showShadow, shadowColor, disableResponsive]);

  const finalBackgroundColor = isDefault
    ? defaultBackgroundColor
    : backgroundColor;

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: finalBackgroundColor,
          borderColor,
        },
        shadowStyles,
        scaledStyle,
      ]}
      edges={edges}
      {...otherProps}
    >
      {children}
    </SafeAreaView>
  );
}
