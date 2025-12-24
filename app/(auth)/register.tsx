import AppButton from "@/components/ui/appButton";
import { Colors } from "@/constants/colors";
import { useAppTheme } from "@/context/themeProvider";
import { registerUser } from "@/src/api/auth";

import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";

export default function Register() {
  const theme = useAppTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => router.replace("/(auth)/login"),
    onError: (e: Error) => Alert.alert("Error", e.message),
  });

  const onSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    mutate({ name, email, password });
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
      <Text style={{ color: Colors[theme].secondary, marginBottom: 6 }}>
        Password
      </Text>
      <TextInput
        placeholder="••••••••"
        placeholderTextColor={Colors[theme].secondary}
        secureTextEntry
        style={{
          backgroundColor: Colors[theme].surface,
          borderRadius: 12,
          padding: 14,
          color: Colors[theme].primary,
          marginBottom: 16,
        }}
        onChangeText={setPassword}
      />

      {/* Confirm */}
      <Text style={{ color: Colors[theme].secondary, marginBottom: 6 }}>
        Confirm Password
      </Text>
      <TextInput
        placeholder="••••••••"
        placeholderTextColor={Colors[theme].secondary}
        secureTextEntry
        style={{
          backgroundColor: Colors[theme].surface,
          borderRadius: 12,
          padding: 14,
          color: Colors[theme].primary,
          marginBottom: 24,
        }}
        onChangeText={setConfirmPassword}
      />

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
          onPress={() => router.push("/(auth)/login")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
}
