import { useAuth } from "@/context/authProvider";
import { useTheme } from "@/context/themeProvider";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const AuthHeaderTitle = () => {
  const { user } = useAuth();
  const { colors } = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Ionicons name="book-outline" size={22} color={colors.primary} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: colors.primary,
        }}
      >
        {user ? user.name : "BookNext"}
      </Text>
    </View>
  );
};
