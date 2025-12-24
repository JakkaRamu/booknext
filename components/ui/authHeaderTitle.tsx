import { Colors } from "@/constants/colors";
import { useAuth } from "@/context/authProvider";

import { Ionicons } from "@expo/vector-icons";
import { Text, useColorScheme, View } from "react-native";

export const AuthHeaderTitle = () => {
  const { user } = useAuth();
  const theme = useColorScheme() ?? "light";

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Ionicons name="book-outline" size={22} color={Colors[theme].primary} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: Colors[theme].primary,
        }}
      >
        {user ? user.name : "BookNext"}
      </Text>
    </View>
  );
};
