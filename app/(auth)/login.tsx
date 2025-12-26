import AlertBox from "@/components/common/alert/alertBox";
import { useAlert } from "@/components/common/alert/useAlert";
import AppButton from "@/components/ui/appButton";
import { Colors } from "@/constants/colors";
import { useAuth } from "@/context/authProvider";
import { useAppTheme } from "@/context/themeProvider";
import { loginUser } from "@/src/api/auth";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Login() {
  const theme = useAppTheme();
  const { login } = useAuth();

  const alert = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);

    if (!email || !password) {
      setError("Email and password are required");
      alert.show(
        "error",
        "Validation Error",
        "Please enter email and password"
      );
      return;
    }

    setLoading(true);

    try {
      const response = await loginUser({ email, password });

      login({
        name: response.data.name || "User",
        email: response.data.email,
      });
      console.log("Logged in user:", response);
      alert.show("success", "Login Successful", "Welcome back!");
    } catch (err: any) {
      setError(err.message || "Login failed");
      alert.show("error", "Login Error", err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleAlertClose = () => {
    alert.hide();

    if (alert.type === "success") {
      router.replace("/(public)" as any);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors[theme].background,
        justifyContent: "center",
        padding: 24,
      }}
    >
      {/* Header */}
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Ionicons name="book-outline" size={36} color={Colors[theme].primary} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: Colors[theme].primary,
            marginTop: 12,
          }}
        >
          BookNext
        </Text>
        <Text style={{ color: Colors[theme].secondary, marginTop: 6 }}>
          Welcome back, login to continue
        </Text>
      </View>

      {/* Email */}
      <Text style={{ color: Colors[theme].secondary, marginBottom: 6 }}>
        Email
      </Text>
      <TextInput
        placeholder="you@example.com"
        placeholderTextColor={Colors[theme].secondary}
        style={{
          backgroundColor: Colors[theme].surface,
          borderRadius: 12,
          padding: 14,
          color: Colors[theme].primary,
          marginBottom: 16,
        }}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      {/* Password with Eye Toggle */}
      <Text style={{ color: Colors[theme].secondary, marginBottom: 6 }}>
        Password
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: Colors[theme].surface,
          borderRadius: 12,
          paddingHorizontal: 14,
          marginBottom: 16,
        }}
      >
        <TextInput
          placeholder="••••••••"
          placeholderTextColor={Colors[theme].secondary}
          secureTextEntry={!showPassword}
          style={{
            flex: 1,
            paddingVertical: 14,
            color: Colors[theme].primary,
          }}
          value={password}
          onChangeText={setPassword}
        />
        <Ionicons
          name={showPassword ? "eye-off-outline" : "eye-outline"}
          size={20}
          color={Colors[theme].secondary}
          onPress={() => setShowPassword((p) => !p)}
        />
      </View>

      {/* Inline Error */}
      {error && (
        <Text
          style={{
            color: "#EF4444",
            marginBottom: 12,
            textAlign: "center",
            fontSize: 13,
          }}
        >
          {error}
        </Text>
      )}

      {/* CTA */}
      <AppButton
        title={loading ? "Logging in..." : "Login"}
        onPress={handleLogin}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          color: Colors[theme].secondary,
        }}
      >
        Don’t have an account?{" "}
        <Text
          style={{ color: Colors[theme].accent, fontWeight: "600" }}
          onPress={() => router.replace("/(auth)/register")}
        >
          Sign up
        </Text>
      </Text>

      {/* Custom Alert */}
      <AlertBox
        visible={alert.visible}
        type={alert.type}
        title={alert.title}
        message={alert.message}
        onClose={handleAlertClose}
      />
    </View>
  );
}
