import { Colors } from "@/constants/colors";
import { useAppTheme } from "@/context/themeProvider";
import { useThemeStore } from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const OPTIONS = [
  { key: "default", label: "System Default", icon: "phone-portrait-outline" },
  { key: "light", label: "Light", icon: "sunny-outline" },
  { key: "dark", label: "Dark", icon: "moon-outline" },
] as const;

export default function ThemeSettings() {
  const { theme, setTheme } = useThemeStore();
  const activeTheme = useAppTheme();
  const systemTheme = "light"; // Replace with actual system theme detection if available

  useEffect(() => {
    console.log("ThemeSettings screen - Current theme:", theme);
  }, [theme]);

  const handleThemeChange = (themeId: string) => {
    console.log("User clicked theme:", themeId);
    console.log("Mutation status before:", setTheme.status);
    setTheme.mutate(themeId as "default" | "dark" | "light", {
      onSuccess: () => {
        console.log(" Mutation onSuccess callback fired!");
      },
      onError: (error) => {
        console.error("Mutation onError callback fired:", error);
      },
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors[activeTheme].background,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: "800",
          color: Colors[activeTheme].primary,
          marginBottom: 6,
        }}
      >
        Theme
      </Text>

      <Text
        style={{
          color: Colors[activeTheme].secondary,
          marginBottom: 24,
        }}
      >
        Choose how BookNext looks
      </Text>

      {OPTIONS.map((item) => {
        const selected = theme === item.key;

        return (
          <TouchableOpacity
            key={item.key}
            onPress={() => handleThemeChange(item.key)}
            activeOpacity={0.7}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              borderRadius: 14,
              marginBottom: 12,
              backgroundColor: Colors[activeTheme].surface,
              borderWidth: selected ? 2 : 1,
              borderColor: selected
                ? Colors[activeTheme].accent
                : Colors[activeTheme].outline,
            }}
          >
            <Ionicons
              name={item.icon as any}
              size={22}
              color={Colors[activeTheme].primary}
            />

            <Text
              style={{
                marginLeft: 14,
                fontSize: 16,
                fontWeight: "600",
                color: Colors[activeTheme].primary,
                flex: 1,
              }}
            >
              {item.label}
            </Text>

            {selected && (
              <Ionicons
                name="checkmark-circle"
                size={22}
                color={Colors[activeTheme].accent}
              />
            )}
          </TouchableOpacity>
        );
      })}

      <Text
        style={{
          color: Colors[activeTheme].secondary,
          marginTop: 24,
          fontSize: 12,
        }}
      >
        Current: {theme} | Active: {activeTheme} | Status: {setTheme.status}
      </Text>
    </View>
  );
}
