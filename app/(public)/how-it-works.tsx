import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, useColorScheme, View } from "react-native";

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
  const theme = useColorScheme() ?? "light";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors[theme].background,
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "800",
          color: Colors[theme].primary,
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        Three Simple Steps
      </Text>

      {STEPS.map((step, index) => (
        <View
          key={index}
          style={{
            backgroundColor: Colors[theme].surface,
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Ionicons
            name={step.icon as any}
            size={28}
            color={Colors[theme].primary}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: Colors[theme].primary,
              marginTop: 12,
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
      ))}
    </View>
  );
}
