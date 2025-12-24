import { useThemeColor } from "@/hooks/useThemeColors";
import { Text, TextProps } from "react-native";

type Props = TextProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedText({ style, lightColor, darkColor, ...rest }: Props) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <Text style={[{ color }, style]} {...rest} />;
}
