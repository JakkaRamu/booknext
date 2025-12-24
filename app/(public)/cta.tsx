import AppButton from "@/components/ui/appButton";
import { Colors } from "@/constants/colors";

import { router } from "expo-router";
import { Text, useColorScheme, View } from "react-native";

export default function CTA() {
  const theme = useColorScheme() ?? "light";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors[theme].background,
        justifyContent: "center",
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "800",
          color: Colors[theme].primary,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Turn Your Old Books Into Value
      </Text>

      <Text
        style={{
          color: Colors[theme].secondary,
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
