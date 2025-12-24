import { useThemeColor } from "@/hooks/useThemeColors";
import { Pressable, PressableProps } from "react-native";

type Props = PressableProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedPressable({
  style,
  lightColor,
  darkColor,
  ...rest
}: Props) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "surface"
  );

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor,
          opacity: pressed ? 0.8 : 1,
        },
        typeof style === "function"
          ? style({
              pressed,
              hovered: false,
            })
          : style,
      ]}
      {...rest}
    />
  );
}
