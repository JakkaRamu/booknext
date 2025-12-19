import AppButton from "@/components/ui/appButton";
import { useTheme } from "@/context/themeProvider";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function Register() {
  const { colors } = useTheme();

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
          Create your account
        </Text>
      </View>

      {/* Name */}
      <Text style={{ color: colors.secondary, marginBottom: 6 }}>
        Full Name
      </Text>
      <TextInput
        placeholder="John Doe"
        placeholderTextColor={colors.secondary}
        style={{
          backgroundColor: colors.surface,
          borderRadius: 12,
          padding: 14,
          color: colors.primary,
          marginBottom: 16,
        }}
      />

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
          marginBottom: 16,
        }}
      />

      {/* Confirm */}
      <Text style={{ color: colors.secondary, marginBottom: 6 }}>
        Confirm Password
      </Text>
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

      <AppButton
        title="Sign up"
        onPress={() => router.replace("/(auth)/login")}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          color: colors.secondary,
        }}
      >
        Already have an account?{" "}
        <Text
          style={{ color: colors.accent, fontWeight: "600" }}
          onPress={() => router.push("/(auth)/login")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
}
