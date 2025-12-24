import { Colors } from "@/constants/colors";
import { useAppTheme } from "@/context/themeProvider";

import get from "lodash/get";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const finalTheme = useAppTheme(); // Synchronous and reliable
  const colorFromProps = get(props, finalTheme);
  return (
    colorFromProps ??
    get(Colors, `${finalTheme}.${colorName}`, Colors.light.text)
  );
}
