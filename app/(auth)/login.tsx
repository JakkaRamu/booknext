import AppButton from "@/components/ui/appButton";
import { useAuth } from "@/context/authProvider";
import { useTheme } from "@/context/themeProvider";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function Login() {
  const { colors } = useTheme();
  const { login } = useAuth();

  const handleLogin = () => {
    //  mock login (replace with API)
    login({
      name: "Ram",
      email: "ram@example.com",
    });

    router.replace("/(public)" as any);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        padding: 24,
      }}
    >
      {/* Header */}
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Ionicons name="book-outline" size={36} color={colors.primary} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: colors.primary,
            marginTop: 12,
          }}
        >
          BookNext
        </Text>
        <Text style={{ color: colors.secondary, marginTop: 6 }}>
          Welcome back, login to continue
        </Text>
      </View>

      {/* Email */}
      <Text style={{ color: colors.secondary, marginBottom: 6 }}>Email</Text>
      <TextInput
        placeholder="you@example.com"
        placeholderTextColor={colors.secondary}
        style={{
          backgroundColor: colors.surface,
          borderRadius: 12,
          padding: 14,
          color: colors.primary,
          marginBottom: 16,
        }}
      />

      {/* Password */}
      <Text style={{ color: colors.secondary, marginBottom: 6 }}>Password</Text>
      <TextInput
        placeholder="••••••••"
        placeholderTextColor={colors.secondary}
        secureTextEntry
        style={{
          backgroundColor: colors.surface,
          borderRadius: 12,
          padding: 14,
          color: colors.primary,
          marginBottom: 24,
        }}
      />

      {/* CTA */}
      <AppButton title="Login" onPress={handleLogin} />

      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          color: colors.secondary,
        }}
      >
        Don’t have an account?{" "}
        <Text
          style={{ color: colors.accent, fontWeight: "600" }}
          onPress={() => router.push("/(auth)/register")}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
}
