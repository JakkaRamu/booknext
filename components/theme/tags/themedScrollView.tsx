import { useThemeColor } from "@/hooks/useThemeColors";
import { ScrollView, ScrollViewProps } from "react-native";

type Props = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedScrollView({
  style,
  lightColor,
  darkColor,
  ...rest
}: Props) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <ScrollView style={[{ backgroundColor }, style]} {...rest} />;
}
