import { useAuth } from "@/context/authProvider";
import { useTheme } from "@/context/themeProvider";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type ItemProps = {
  icon: any;
  label: string;
  onPress: () => void;
  danger?: boolean;
};

const SettingsItem = ({ icon, label, onPress, danger }: ItemProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 16,
      }}
    >
      <Ionicons
        name={icon}
        size={20}
        color={danger ? "#EF4444" : colors.primary}
      />

      <Text
        style={{
          marginLeft: 14,
          fontSize: 15,
          fontWeight: "500",
          color: danger ? "#EF4444" : colors.primary,
          flex: 1,
        }}
      >
        {label}
      </Text>

      <Ionicons name="chevron-forward" size={18} color={colors.secondary} />
    </TouchableOpacity>
  );
};

const SectionCard = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        borderRadius: 14,
        marginHorizontal: 16,
        marginTop: 12,
        overflow: "hidden",
      }}
    >
      {children}
    </View>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  const { colors } = useTheme();
  return (
    <Text
      style={{
        marginTop: 24,
        marginLeft: 20,
        marginBottom: 6,
        fontSize: 13,
        fontWeight: "600",
        color: colors.secondary,
        letterSpacing: 0.5,
      }}
    >
      {title.toUpperCase()}
    </Text>
  );
};

export default function Settings() {
  const { colors } = useTheme();
  const { logout } = useAuth();

  const handleLogout = () => {
    router.replace("/(public)");
    logout();
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* Header */}
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            color: colors.primary,
          }}
        >
          Settings
        </Text>
        <Text
          style={{
            marginTop: 6,
            color: colors.secondary,
            fontSize: 14,
          }}
        >
          Manage your account and preferences
        </Text>
      </View>

      {/* Account */}
      <SectionTitle title="Account" />
      <SectionCard>
        <SettingsItem
          icon="person-outline"
          label="Profile"
          onPress={() => router.push("/(tabs)/profile")}
        />
        <SettingsItem
          icon="lock-closed-outline"
          label="Change Password"
          onPress={() => {}}
        />
        <SettingsItem
          icon="shield-checkmark-outline"
          label="Privacy"
          onPress={() => {}}
        />
      </SectionCard>

      {/* Preferences */}
      <SectionTitle title="Preferences" />
      <SectionCard>
        <SettingsItem
          icon="moon-outline"
          label="Theme"
          onPress={() => router.push("/(tabs)/theme" as any)}
        />
        <SettingsItem
          icon="notifications-outline"
          label="Notifications"
          onPress={() => {}}
        />
        <SettingsItem
          icon="language-outline"
          label="Language"
          onPress={() => {}}
        />
      </SectionCard>

      {/* About */}
      <SectionTitle title="About" />
      <SectionCard>
        <SettingsItem
          icon="information-circle-outline"
          label="About BookNext"
          onPress={() => {}}
        />
        <SettingsItem
          icon="document-text-outline"
          label="Terms & Privacy"
          onPress={() => {}}
        />
        <SettingsItem
          icon="help-circle-outline"
          label="Help & Support"
          onPress={() => {}}
        />
      </SectionCard>

      {/* Logout */}
      <SectionTitle title=" " />
      <SectionCard>
        <SettingsItem
          icon="log-out-outline"
          label="Logout"
          danger
          onPress={handleLogout}
        />
      </SectionCard>

      {/* Footer */}
      <Text
        style={{
          textAlign: "center",
          marginTop: 32,
          fontSize: 12,
          color: colors.secondary,
        }}
      >
        BookNext · v1.0.0
      </Text>
    </ScrollView>
  );
}
