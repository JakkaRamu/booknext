import { useMemo } from "react";
import { Dimensions, PixelRatio, Platform } from "react-native";

// Base dimensions (design reference - typically iPhone 11/XR)
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

// Get current device dimensions
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

// Calculate scale factors
const widthScale = DEVICE_WIDTH / DESIGN_WIDTH;
const heightScale = DEVICE_HEIGHT / DESIGN_HEIGHT;

/**
 * Normalize width based on device screen width
 * @param size - The size from your design
 * @returns Scaled size for current device
 */
export const wp = (size: number): number => {
  return widthScale * size;
};

/**
 * Normalize height based on device screen height
 * @param size - The size from your design
 * @returns Scaled size for current device
 */
export const hp = (size: number): number => {
  return heightScale * size;
};

/**
 * Normalize font size with pixel ratio consideration
 * @param size - The font size from your design
 * @returns Scaled font size
 */
export const fs = (size: number): number => {
  const scale = Math.min(widthScale, heightScale);
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

/**
 * Moderate scale - scales with a factor
 * Good for margins, paddings that shouldn't scale as dramatically
 * @param size - The size from your design
 * @param factor - Scaling factor (default: 0.5)
 * @returns Moderately scaled size
 */
export const ms = (size: number, factor: number = 0.5): number => {
  const scale = Math.min(widthScale, heightScale);
  return size + (scale - 1) * size * factor;
};

/**
 * Scale based on smaller dimension (maintains aspect ratio better)
 * @param size - The size from your design
 * @returns Scaled size based on smaller dimension
 */
export const scale = (size: number): number => {
  const scale = Math.min(widthScale, heightScale);
  return size * scale;
};

/**
 * Vertical scale specifically for heights
 * @param size - The size from your design
 * @returns Vertically scaled size
 */
export const vs = (size: number): number => {
  return heightScale * size;
};

/**
 * Horizontal scale specifically for widths
 * @param size - The size from your design
 * @returns Horizontally scaled size
 */
export const hs = (size: number): number => {
  return widthScale * size;
};

/**
 * Check if device is a tablet
 * @returns Boolean indicating if device is tablet
 */
export const isTablet = (): boolean => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = DEVICE_WIDTH * pixelDensity;
  const adjustedHeight = DEVICE_HEIGHT * pixelDensity;

  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  }

  return (
    (DEVICE_WIDTH >= 768 && DEVICE_HEIGHT >= 1024) ||
    (DEVICE_WIDTH >= 1024 && DEVICE_HEIGHT >= 768)
  );
};

/**
 * Check if device is small
 * @returns Boolean indicating if device has small screen
 */
export const isSmallDevice = (): boolean => {
  return DEVICE_WIDTH < 375 || DEVICE_HEIGHT < 667;
};

/**
 * Get device type
 * @returns Device type string
 */
export const getDeviceType = (): "phone" | "tablet" => {
  return isTablet() ? "tablet" : "phone";
};

/**
 * Responsive spacing helper
 * Returns appropriate spacing based on device size
 */
export const spacing = {
  xs: ms(4),
  sm: ms(8),
  md: ms(16),
  lg: ms(24),
  xl: ms(32),
  xxl: ms(48),
};

/**
 * Responsive border radius helper
 */
export const borderRadius = {
  xs: scale(4),
  sm: scale(8),
  md: scale(12),
  lg: scale(16),
  xl: scale(24),
  full: 9999,
};

/**
 * Responsive font sizes
 */
export const fontSize = {
  xs: fs(10),
  sm: fs(12),
  md: fs(14),
  lg: fs(16),
  xl: fs(20),
  xxl: fs(24),
  xxxl: fs(32),
};

/**
 * Device dimensions
 */
export const deviceDimensions = {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT,
  isSmall: isSmallDevice(),
  isTablet: isTablet(),
  type: getDeviceType(),
};

/**
 * Platform-specific value selector
 * @param ios - Value for iOS
 * @param android - Value for Android
 * @returns Platform-specific value
 */
export const platformSelect = <T>(ios: T, android: T): T => {
  return Platform.select({ ios, android }) as T;
};

// ============================================
// SHARED RESPONSIVE STYLE SCALING LOGIC
// ============================================

/**
 * Properties that should be scaled and their scaling functions
 */
export const SCALABLE_PROPS_MAP = {
  // Dimensions - use width/height percentage scaling
  width: (val: number) => wp(val),
  height: (val: number) => hp(val),
  minWidth: (val: number) => wp(val),
  minHeight: (val: number) => hp(val),
  maxWidth: (val: number) => wp(val),
  maxHeight: (val: number) => hp(val),

  // Padding - use moderate scaling (less dramatic)
  padding: (val: number) => ms(val),
  paddingVertical: (val: number) => ms(val),
  paddingHorizontal: (val: number) => ms(val),
  paddingTop: (val: number) => ms(val),
  paddingBottom: (val: number) => ms(val),
  paddingLeft: (val: number) => ms(val),
  paddingRight: (val: number) => ms(val),
  paddingStart: (val: number) => ms(val),
  paddingEnd: (val: number) => ms(val),

  // Margin - use moderate scaling
  margin: (val: number) => ms(val),
  marginVertical: (val: number) => ms(val),
  marginHorizontal: (val: number) => ms(val),
  marginTop: (val: number) => ms(val),
  marginBottom: (val: number) => ms(val),
  marginLeft: (val: number) => ms(val),
  marginRight: (val: number) => ms(val),
  marginStart: (val: number) => ms(val),
  marginEnd: (val: number) => ms(val),

  // Border - use uniform scaling
  borderRadius: (val: number) => scale(val),
  borderTopLeftRadius: (val: number) => scale(val),
  borderTopRightRadius: (val: number) => scale(val),
  borderBottomLeftRadius: (val: number) => scale(val),
  borderBottomRightRadius: (val: number) => scale(val),
  borderTopStartRadius: (val: number) => scale(val),
  borderTopEndRadius: (val: number) => scale(val),
  borderBottomStartRadius: (val: number) => scale(val),
  borderBottomEndRadius: (val: number) => scale(val),
  borderWidth: (val: number) => scale(val),
  borderTopWidth: (val: number) => scale(val),
  borderBottomWidth: (val: number) => scale(val),
  borderLeftWidth: (val: number) => scale(val),
  borderRightWidth: (val: number) => scale(val),
  borderStartWidth: (val: number) => scale(val),
  borderEndWidth: (val: number) => scale(val),

  // Gaps (flexbox)
  gap: (val: number) => ms(val),
  rowGap: (val: number) => ms(val),
  columnGap: (val: number) => ms(val),

  // Typography
  fontSize: (val: number) => fs(val),
  lineHeight: (val: number) => fs(val),
  letterSpacing: (val: number) => scale(val),

  // Positioning
  top: (val: number) => hp(val),
  bottom: (val: number) => hp(val),
  left: (val: number) => wp(val),
  right: (val: number) => wp(val),
  start: (val: number) => wp(val),
  end: (val: number) => wp(val),
};

/**
 * Recursively scale style properties
 * @param styleObj - Style object to scale
 * @param disableResponsive - If true, returns original style
 * @returns Scaled style object
 */
export const scaleStyleObject = (
  styleObj: any,
  disableResponsive: boolean
): any => {
  if (!styleObj || typeof styleObj !== "object" || disableResponsive) {
    return styleObj;
  }

  const scaledStyle: any = {};

  Object.entries(styleObj).forEach(([key, value]) => {
    // Check if this property should be scaled
    if (key in SCALABLE_PROPS_MAP && typeof value === "number") {
      const scaleFunction =
        SCALABLE_PROPS_MAP[key as keyof typeof SCALABLE_PROPS_MAP];
      scaledStyle[key] = scaleFunction(value);
    }
    // Handle nested objects (like shadowOffset, transform, etc.)
    else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      scaledStyle[key] = scaleStyleObject(value, disableResponsive);
    }
    // Keep other values as-is (strings, percentages, etc.)
    else {
      scaledStyle[key] = value;
    }
  });

  return scaledStyle;
};

/**
 * Hook to automatically scale styles with memoization
 * Use this in any themed component
 * @param style - Style prop (can be object or array)
 * @param disableResponsive - Disable responsive scaling
 * @returns Scaled style
 */
export const useResponsiveStyle = (
  style: any,
  disableResponsive: boolean = false
) => {
  return useMemo(() => {
    if (disableResponsive || !style) return style;

    // Handle array of styles
    if (Array.isArray(style)) {
      return style.map((s) => scaleStyleObject(s, disableResponsive));
    }

    // Handle single style object
    return scaleStyleObject(style, disableResponsive);
  }, [style, disableResponsive]);
};

/**
 * Create responsive shadow styles
 * @param shadowColor - Shadow color
 * @param disableResponsive - Disable responsive scaling
 * @returns Shadow style object
 */
export const createResponsiveShadow = (
  shadowColor: string,
  disableResponsive: boolean = false
) => {
  return {
    shadowColor,
    shadowOffset: {
      width: 0,
      height: disableResponsive ? 2 : scale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: disableResponsive ? 3.84 : scale(3.84),
    elevation: disableResponsive ? 5 : scale(5),
  };
};
