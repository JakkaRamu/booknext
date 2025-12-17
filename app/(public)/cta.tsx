import AppButton from "@/components/ui/appButton";
import { useTheme } from "@/context/themeProvider";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function CTA() {
  const { colors: ThemeColors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ThemeColors.background,
        justifyContent: "center",
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "800",
          color: ThemeColors.primary,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Turn Your Old Books Into Value
      </Text>

      <Text
        style={{
          color: ThemeColors.secondary,
          textAlign: "center",
          marginBottom: 32,
          lineHeight: 22,
        }}
      >
        Join thousands of readers giving their books a second life.
      </Text>

      <AppButton
        title="Get Started Free"
        onPress={() => router.push("/(auth)/register")}
      />

      <AppButton
        variant="outline"
        title="Sign In"
        onPress={() => router.push("/(auth)/login")}
      />
    </View>
  );
}
