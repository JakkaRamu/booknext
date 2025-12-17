import { useTheme } from "@/context/themeProvider";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "outline";
};

export default function AppButton({
  title,
  onPress,
  variant = "primary",
}: Props) {
  const isOutline = variant === "outline";

  const { colors: ThemeColors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 16,
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: isOutline ? "transparent" : ThemeColors.primary,
        borderWidth: isOutline ? 1 : 0,
        borderColor: ThemeColors.outline,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "600",
          color: isOutline ? ThemeColors.primary : ThemeColors.background,
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
