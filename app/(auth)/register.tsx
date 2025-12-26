import AlertBox from "@/components/common/alert/alertBox";
import { useAlert } from "@/components/common/alert/useAlert";
import AppButton from "@/components/ui/appButton";
import { Colors } from "@/constants/colors";
import { useAppTheme } from "@/context/themeProvider";
import { registerUser } from "@/src/api/auth";

import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Register() {
  const theme = useAppTheme();
  const alert = useAlert();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      alert.show(
        "success",
        "Account Created",
        "Your account has been created successfully"
      );
      // Delay navigation to allow alert to render
      setTimeout(() => {
        router.replace("/(auth)/login");
      }, 1500);
    },
    onError: (e: Error) => {
      setError(e.message || "Something went wrong");
      alert.show(
        "error",
        "Registration Failed",
        e.message || "Something went wrong"
      );
    },
  });

  const onSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      alert.show("error", "Validation Error", "Passwords do not match");
      return;
    }

    setError(null);
    mutate({ name, email, password });
  };

  const handleAlertClose = () => {
    alert.hide();
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
          Create your account
        </Text>
      </View>

      {/* Name */}
      <Text style={{ color: Colors[theme].secondary, marginBottom: 6 }}>
        Full Name
      </Text>
      <TextInput
        placeholder="John Doe"
        placeholderTextColor={Colors[theme].secondary}
        style={{
          backgroundColor: Colors[theme].surface,
          borderRadius: 12,
          padding: 14,
          color: Colors[theme].primary,
          marginBottom: 16,
        }}
        onChangeText={setName}
      />

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
        onChangeText={setEmail}
      />

      {/* Password */}
      <View style={{ marginBottom: 16 }}>
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
            onChangeText={setPassword}
          />

          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color={Colors[theme].secondary}
            onPress={() => setShowPassword((p) => !p)}
          />
        </View>
      </View>
      <View style={{ marginBottom: 24 }}>
        <Text style={{ color: Colors[theme].secondary, marginBottom: 6 }}>
          Confirm Password
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors[theme].surface,
            borderRadius: 12,
            paddingHorizontal: 14,
          }}
        >
          <TextInput
            placeholder="••••••••"
            placeholderTextColor={Colors[theme].secondary}
            secureTextEntry={!showConfirmPassword}
            style={{
              flex: 1,
              paddingVertical: 14,
              color: Colors[theme].primary,
            }}
            onChangeText={setConfirmPassword}
          />

          <Ionicons
            name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color={Colors[theme].secondary}
            onPress={() => setShowConfirmPassword((p) => !p)}
          />
        </View>
      </View>

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

      <AppButton
        title={isPending ? "Signing up..." : "Sign up"}
        onPress={onSignUp}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          color: Colors[theme].secondary,
        }}
      >
        Already have an account?{" "}
        <Text
          style={{ color: Colors[theme].accent, fontWeight: "600" }}
          onPress={() => router.replace("/(auth)/login")}
        >
          Login
        </Text>
      </Text>
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
