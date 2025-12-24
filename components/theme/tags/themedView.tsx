import { useThemeColor } from "@/hooks/useThemeColors";
import { View, ViewProps } from "react-native";

type Props = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...rest }: Props) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <View style={[{ backgroundColor }, style]} {...rest} />;
}
