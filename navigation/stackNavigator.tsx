import { PROTECTED_SCREENS, PUBLIC_SCREENS } from "@/config/screen.config";
import { Stack } from "expo-router";

interface StackNavigatorProps {
  background?: string;
  isLoggedIn: boolean;
}

export const StackNavigator = ({
  background,
  isLoggedIn,
}: StackNavigatorProps) => {
  const renderScreens = (screen: (typeof PUBLIC_SCREENS)[0]) => {
    return (
      <Stack.Screen
        key={screen.name}
        name={screen.name}
        options={screen.options}
      />
    );
  };

  return (
    <Stack
      screenOptions={{
        animation: "fade",
        contentStyle: { backgroundColor: background },
        headerStyle: { backgroundColor: background },

        headerShadowVisible: false,
      }}
    >
      <Stack.Protected guard={isLoggedIn}>
        {PROTECTED_SCREENS.map(renderScreens)}
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        {PUBLIC_SCREENS.map(renderScreens)}
      </Stack.Protected>
    </Stack>
  );
};
