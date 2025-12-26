import AppButton from "@/components/ui/appButton";
import { Colors } from "@/constants/colors";
import { useAuth } from "@/context/authProvider";
import { useAppTheme } from "@/context/themeProvider";
import { useLoginState } from "@/hooks/useLoginState";

import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

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
  const [showMenu, setShowMenu] = useState(false);
  const theme = useAppTheme();
  const { user, logout } = useAuth();
  const { isLoggedIn } = useLoginState();

  console.log("Welcome Screen - isLoggedIn:", isLoggedIn, user);
  return (
    <Pressable
      style={{ flex: 1, backgroundColor: Colors[theme].background }}
      onPress={() => {
        if (showMenu) setShowMenu(false);
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: Colors[theme].background,
          justifyContent: "center",
          padding: 24,
        }}
      >
        <Animated.View
          entering={FadeIn.delay(200)}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          <TouchableOpacity
            // onPress={() =>
            //   user ? router.push("/(public)") : router.push("/(auth)/login")
            // }
            onPress={() => {
              if (user) {
                setShowMenu((prev) => !prev);
              } else {
                router.push("/(auth)/login");
              }
            }}
            activeOpacity={0.7}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: Colors[theme].outline,
              backgroundColor: "transparent",
              maxWidth: 140,
            }}
          >
            <Ionicons
              name={user ? "person-circle-outline" : "log-in-outline"}
              size={18}
              color={Colors[theme].primary}
            />

            <Text
              style={{
                marginLeft: 6,
                fontSize: 13,
                fontWeight: "600",
                color: Colors[theme].primary,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {isLoggedIn && user ? user.name : "Sign In"}
            </Text>
          </TouchableOpacity>
        </Animated.View>
        {/* {user && showMenu && (
          <Animated.View
            entering={FadeIn.duration(150)}
            style={{
              position: "absolute",
              top: 52,
              right: 16,

              backgroundColor: ThemeColors.surface,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: ThemeColors.outline,
              paddingVertical: 6,

              width: 120,
              zIndex: 100,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setShowMenu(false);
                logout();
                router.replace("/(public)");
              }}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 14,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Ionicons
                  name="log-out-outline"
                  size={18}
                  color={ThemeColors.primary}
                />
                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 14,
                    fontWeight: "600",
                    color: ThemeColors.primary,
                  }}
                >
                  Logout
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 10,
                }}
              >
                <Ionicons
                  name="settings-outline"
                  size={18}
                  color={ThemeColors.primary}
                />
                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 14,
                    fontWeight: "600",
                    color: ThemeColors.primary,
                  }}
                >
                  Settings
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        )} */}
        {user && showMenu && (
          <Animated.View
            entering={FadeIn.duration(150)}
            style={{
              position: "absolute",
              top: 52,
              right: 16,
              width: 160,
              backgroundColor: Colors[theme].surface,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: Colors[theme].outline,
              overflow: "hidden",
              zIndex: 100,
              elevation: 6,
              shadowColor: "#000", // iOS shadow
              shadowOpacity: 0.15,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 4 },
            }}
          >
            {/* Logout */}
            <TouchableOpacity
              onPress={() => {
                setShowMenu(false);
                logout();
                router.replace("/(public)");
              }}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 12,
                paddingHorizontal: 16,
              }}
            >
              <Ionicons
                name="log-out-outline"
                size={18}
                color={Colors[theme].primary}
              />
              <Text
                style={{
                  marginLeft: 12,
                  fontSize: 14,
                  fontWeight: "600",
                  color: Colors[theme].primary,
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View
              style={{
                height: 1,
                backgroundColor: Colors[theme].outline,
                opacity: 0.4,
                marginHorizontal: 12,
              }}
            />

            {/* Settings */}
            <TouchableOpacity
              onPress={() => {
                setShowMenu(false);
                router.push("/settings" as any);
              }}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 12,
                paddingHorizontal: 16,
              }}
            >
              <Ionicons
                name="settings-outline"
                size={18}
                color={Colors[theme].primary}
              />
              <Text
                style={{
                  marginLeft: 12,
                  fontSize: 14,
                  fontWeight: "600",
                  color: Colors[theme].primary,
                }}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* App Icon */}
        <Animated.View
          entering={ZoomIn.duration(500)}
          style={{
            alignSelf: "center",
            width: 56,
            height: 56,
            borderRadius: 14,
            backgroundColor: Colors[theme].primary,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons
            name="book-outline"
            size={28}
            color={Colors[theme].background}
          />
        </Animated.View>

        {/* App Name */}
        <Animated.View entering={FadeInDown.delay(150).duration(500)}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: Colors[theme].secondary,
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
              color: Colors[theme].primary,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Buy, Sell & Exchange Books Near You
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: Colors[theme].secondary,
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
                  backgroundColor: Colors[theme].surface,
                  borderRadius: 14,
                  paddingVertical: 16,
                  marginHorizontal: 4,
                  alignItems: "center",
                  borderWidth: 1.5,
                  borderColor: Colors[theme].outline,
                }}
              >
                <Ionicons
                  name={item.icon as any}
                  size={22}
                  color={Colors[theme].primary}
                />
                <Text
                  style={{
                    marginTop: 8,
                    fontSize: 13,
                    fontWeight: "600",
                    color: Colors[theme].primary,
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
            onPress={() => router.push("/(tabs)/list-book" as any)}
          />
        </Animated.View>
      </View>
    </Pressable>
  );
}
