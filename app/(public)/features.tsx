import { useTheme } from "@/context/themeProvider";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const FEATURES = [
  { icon: "location-outline", title: "Location-Based Feed" },
  { icon: "shield-checkmark-outline", title: "Secure Chat" },
  { icon: "repeat-outline", title: "Buy, Sell or Exchange" },
  { icon: "person-outline", title: "User Profiles & Ratings" },
  { icon: "star-outline", title: "Community Trust System" },
  { icon: "book-outline", title: "Book Details" },
];

export default function Features() {
  const { colors: ThemeColors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ThemeColors.background,
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "800",
          color: ThemeColors.primary,
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        Everything You Need
      </Text>

      {FEATURES.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: ThemeColors.surface,
            padding: 18,
            borderRadius: 14,
            marginBottom: 14,
          }}
        >
          <Ionicons
            name={item.icon as any}
            size={22}
            color={ThemeColors.primary}
          />
          <Text
            style={{
              marginLeft: 12,
              fontSize: 16,
              fontWeight: "600",
              color: ThemeColors.primary,
            }}
          >
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
}
