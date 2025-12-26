import { Colors } from "@/constants/colors";
import { useAppTheme } from "@/context/themeProvider";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const STEPS = [
  {
    icon: "location-outline",
    title: "Find Nearby Books",
    desc: "Browse books available near your location.",
  },
  {
    icon: "chatbubble-outline",
    title: "Chat with Owners",
    desc: "Connect directly and negotiate seamlessly.",
  },
  {
    icon: "hand-left-outline",
    title: "Meet & Exchange",
    desc: "Meet locally and exchange with zero shipping cost.",
  },
];

export default function HowItWorks() {
  const theme = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Colors[theme].background,
        padding: 24,
        justifyContent: "flex-start",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "800",
          color: Colors[theme].primary,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Three Simple Steps
      </Text>

      {STEPS.map((step, index) => (
        <Animated.View
          key={index}
          entering={FadeInUp.delay(120 * index)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors[theme].surface,
            borderRadius: 14,
            padding: 18,
            marginBottom: 12,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 10,
            elevation: 3,
          }}
        >
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              backgroundColor: Colors[theme].primary,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 14,
            }}
          >
            <Ionicons
              name={step.icon as any}
              size={22}
              color={Colors[theme].background}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color: Colors[theme].primary,
              }}
            >
              {step.title}
            </Text>
            <Text
              style={{
                color: Colors[theme].secondary,
                marginTop: 6,
                lineHeight: 20,
              }}
            >
              {step.desc}
            </Text>
          </View>
        </Animated.View>
      ))}
    </ScrollView>
  );
}
