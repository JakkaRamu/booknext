import { Colors } from "@/constants/colors";
import { useAppTheme } from "@/context/themeProvider";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const FEATURES = [
  { icon: "location-outline", title: "Location-Based Feed" },
  { icon: "shield-checkmark-outline", title: "Secure Chat" },
  { icon: "repeat-outline", title: "Buy, Sell or Exchange" },
  { icon: "person-outline", title: "User Profiles & Ratings" },
  { icon: "star-outline", title: "Community Trust System" },
  { icon: "book-outline", title: "Book Details" },
];

export default function Features() {
  const theme = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Colors[theme].background,
        padding: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "800",
          color: Colors[theme].primary,
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        Everything You Need
      </Text>

      {/* Full-width cards */}
      {FEATURES.map((item, index) => (
        <Animated.View
          key={index}
          entering={FadeInUp.delay(index * 80)}
          style={{
            width: "100%",
            backgroundColor: Colors[theme].surface,
            borderRadius: 16,
            padding: 18,
            marginBottom: 14,
            elevation: 3,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Icon */}
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                backgroundColor: Colors[theme].primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={item.icon as any}
                size={22}
                color={Colors[theme].background}
              />
            </View>

            {/* Text */}
            <Text
              style={{
                marginLeft: 14,
                fontSize: 16,
                fontWeight: "700",
                color: Colors[theme].primary,
              }}
            >
              {item.title}
            </Text>
          </View>
        </Animated.View>
      ))}
    </ScrollView>
  );
}
