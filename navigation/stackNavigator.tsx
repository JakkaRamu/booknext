import { PUBLIC_SCREENS } from "@/config/screen.config";
import { Stack } from "expo-router";

export const StackNavigator = () => {
  const renderScreens = (screen: (typeof PUBLIC_SCREENS)[0]) => {
    return (
      <Stack.Screen
        key={screen.name}
        name={screen.name}
        options={screen.options}
      />
    );
  };

  return <Stack>{PUBLIC_SCREENS.map(renderScreens)}</Stack>;
};
