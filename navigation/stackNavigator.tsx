import { PROTECTED_SCREENS, PUBLIC_SCREENS } from "@/config/screen.config";
import { Stack } from "expo-router";

interface StackNavigatorProps {
  background?: string;
  isLoggedIn: boolean;
  text: string;
}

export const StackNavigator = ({
  background,
  isLoggedIn,
  text,
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

  const screensToRender = isLoggedIn ? PROTECTED_SCREENS : PUBLIC_SCREENS;

  return (
    <Stack
      screenOptions={{
        animation: "fade",
        contentStyle: { backgroundColor: background },
        headerStyle: { backgroundColor: background },
        headerShadowVisible: false,
      }}
    >
      {screensToRender.map(renderScreens)}
    </Stack>
  );
};
