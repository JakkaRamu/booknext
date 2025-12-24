import { Colors } from "@/constants/colors";
import { useAppTheme } from "@/context/themeProvider";
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

  const theme = useAppTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 16,
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: isOutline ? "transparent" : Colors[theme].primary,
        borderWidth: isOutline ? 1.5 : 0,
        borderColor: isOutline ? Colors[theme].outlineText : "transparent",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "600",
          color: isOutline
            ? Colors[theme].outlineText
            : Colors[theme].background,
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
