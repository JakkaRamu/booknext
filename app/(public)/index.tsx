// import AppButton from "@/components/ui/appButton";
// import { Colors } from "@/constants/colors";
// import { Ionicons } from "@expo/vector-icons";
// import { router } from "expo-router";
// import { StatusBar, Text, View } from "react-native";

// export default function Welcome() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: Colors.bg,
//         justifyContent: "center",
//         padding: 24,
//       }}
//     >
//       <StatusBar barStyle="light-content" />

//       {/* App Icon (BookOpen equivalent) */}
//       <View
//         style={{
//           alignSelf: "center",
//           width: 56,
//           height: 56,
//           borderRadius: 14,
//           backgroundColor: Colors.primary,
//           justifyContent: "center",
//           alignItems: "center",
//           marginBottom: 20,
//         }}
//       >
//         <Ionicons name="book-outline" size={28} color={Colors.bg} />
//       </View>

//       {/* App Name */}
//       <Text
//         style={{
//           fontSize: 18,
//           fontWeight: "600",
//           color: Colors.secondary,
//           textAlign: "center",
//           marginBottom: 6,
//         }}
//       >
//         BookNext
//       </Text>

//       {/* Headline */}
//       <Text
//         style={{
//           fontSize: 32,
//           fontWeight: "800",
//           color: Colors.primary,
//           textAlign: "center",
//           marginBottom: 12,
//         }}
//       >
//         Buy, Sell & Exchange Books Near You
//       </Text>

//       {/* Subtitle */}
//       <Text
//         style={{
//           fontSize: 16,
//           color: Colors.secondary,
//           textAlign: "center",
//           marginBottom: 32,
//           lineHeight: 22,
//         }}
//       >
//         Discover books from readers nearby. Chat, negotiate, and exchange
//         without shipping.
//       </Text>

//       {/* Primary CTA */}
//       <AppButton
//         title="Explore Books"
//         onPress={() => router.push("/(tabs)/explore")}
//       />

//       {/* Secondary CTA */}
//       <AppButton
//         variant="outline"
//         title="List a Book"
//         onPress={() => router.push("/(auth)/login")}
//       />
//     </View>
//   );
// }

import AppButton from "@/components/ui/appButton";
import { useTheme } from "@/context/themeProvider";

import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  ZoomIn,
} from "react-native-reanimated";

const QUICK_LINKS: {
  label: string;
  icon: string;
  route: Href;
}[] = [
  {
    label: "How it Works",
    icon: "layers-outline",
    route: "/(public)/how-it-works",
  },
  {
    label: "Features",
    icon: "sparkles-outline",
    route: "/(public)/features",
  },
];

export default function Welcome() {
  const { colors: ThemeColors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ThemeColors.background,
        justifyContent: "center",
        padding: 24,
      }}
    >
      <StatusBar barStyle="light-content" />

      {/* App Icon */}
      <Animated.View
        entering={ZoomIn.duration(500)}
        style={{
          alignSelf: "center",
          width: 56,
          height: 56,
          borderRadius: 14,
          backgroundColor: ThemeColors.primary,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Ionicons
          name="book-outline"
          size={28}
          color={ThemeColors.background}
        />
      </Animated.View>

      {/* App Name */}
      <Animated.View entering={FadeInDown.delay(150).duration(500)}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: ThemeColors.secondary,
            textAlign: "center",
            marginBottom: 6,
          }}
        >
          BookNext
        </Text>

        <Text
          style={{
            fontSize: 32,
            fontWeight: "800",
            color: ThemeColors.primary,
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Buy, Sell & Exchange Books Near You
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: ThemeColors.secondary,
            textAlign: "center",
            marginBottom: 28,
            lineHeight: 22,
          }}
        >
          Discover books from readers nearby. Chat, negotiate, and exchange
          without shipping.
        </Text>
      </Animated.View>

      {/* Quick Navigation (Landing Sections) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 32,
        }}
      >
        {QUICK_LINKS.map((item, index) => (
          <Animated.View
            key={item.label}
            entering={FadeInUp.delay(250 + index * 120).duration(400)}
            style={{ flex: 1 }}
          >
            <TouchableOpacity
              onPress={() => router.push(item.route)}
              activeOpacity={0.8}
              style={{
                backgroundColor: ThemeColors.surface,
                borderRadius: 14,
                paddingVertical: 16,
                marginHorizontal: 4,
                alignItems: "center",
                borderWidth: 1.5,
                borderColor: ThemeColors.outline,
              }}
            >
              <Ionicons
                name={item.icon as any}
                size={22}
                color={ThemeColors.primary}
              />
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  fontWeight: "600",
                  color: ThemeColors.primary,
                  textAlign: "center",
                }}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      {/* Primary CTA */}
      <Animated.View entering={FadeIn.delay(600)}>
        <AppButton
          title="Explore Books"
          onPress={() => router.push("/(tabs)/explore")}
        />
      </Animated.View>

      <Animated.View entering={FadeIn.delay(750)}>
        <AppButton
          variant="outline"
          title="List a Book"
          onPress={() => router.push("/(auth)/login")}
        />
      </Animated.View>
    </View>
  );
}
