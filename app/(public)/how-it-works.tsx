import { useTheme } from "@/context/themeProvider";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

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
        Three Simple Steps
      </Text>

      {STEPS.map((step, index) => (
        <View
          key={index}
          style={{
            backgroundColor: ThemeColors.surface,
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Ionicons
            name={step.icon as any}
            size={28}
            color={ThemeColors.primary}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: ThemeColors.primary,
              marginTop: 12,
            }}
          >
            {step.title}
          </Text>
          <Text
            style={{
              color: ThemeColors.secondary,
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
