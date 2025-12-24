import { useThemeColor } from "@/hooks/useThemeColors";
import React from "react";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

type Props = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<ViewStyle>;
};

export function ThemedTouchableOpacity({
  lightColor,
  darkColor,
  style,
  activeOpacity = 0.8,
  ...rest
}: Props) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "surface"
  );

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[{ backgroundColor }, style]}
      {...rest}
    />
  );
}
