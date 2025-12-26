import { Colors } from "@/constants/colors";
import { useAppTheme } from "@/context/themeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

type AlertType = "success" | "error" | "info";

type Props = {
  visible: boolean;
  type?: AlertType;
  title: string;
  message: string;
  onClose: () => void;
};

export default function AlertBox({
  visible,
  type = "info",
  title,
  message,
  onClose,
}: Props) {
  const theme = useAppTheme();

  const iconMap = {
    success: "checkmark-circle-outline",
    error: "close-circle-outline",
    info: "information-circle-outline",
  };

  const colorMap = {
    success: "#22C55E",
    error: "#EF4444",
    info: Colors[theme].primary,
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.45)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "85%",
            backgroundColor: Colors[theme].surface,
            borderRadius: 16,
            padding: 20,
            alignItems: "center",
          }}
        >
          <Ionicons
            name={iconMap[type] as any}
            size={48}
            color={colorMap[type]}
          />

          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: Colors[theme].primary,
              marginTop: 12,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: Colors[theme].secondary,
              textAlign: "center",
              marginTop: 8,
              marginBottom: 20,
            }}
          >
            {message}
          </Text>

          <TouchableOpacity
            onPress={onClose}
            style={{
              backgroundColor: Colors[theme].primary,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 24,
            }}
          >
            <Text
              style={{
                color: theme === "dark" ? "#000" : "#fff",
                fontWeight: "600",
              }}
            >
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
