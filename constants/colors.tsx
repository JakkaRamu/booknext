// export const DarkColors = {
//   background: "#0B1220",
//   surface: "#1F2937",
//   primary: "#FFFFFF",
//   secondary: "#9CA3AF",
//   accent: "#6366F1",
// };

// export const LightColors = {
//   background: "#FFFFFF",
//   surface: "#F3F4F6",
//   primary: "#111827",
//   secondary: "#6B7280",
//   accent: "#4F46E5",
// };
// export type ThemeColors = typeof DarkColors;

export const DarkColors = {
  background: "#0B1220",
  surface: "#1F2937",

  primary: "#FFFFFF",
  secondary: "#9CA3AF",

  accent: "#6366F1",

  // 🔘 Buttons
  button: "#1F2937", // filled button bg
  buttonText: "#FFFFFF",

  // ⬜ Outline buttons
  outline: "#374151",
  outlineText: "#FFFFFF",
};

export const LightColors = {
  background: "#FFFFFF",
  surface: "#F3F4F6",

  primary: "#111827",
  secondary: "#6B7280",

  accent: "#4F46E5",

  // 🔘 Buttons
  button: "#111827",
  buttonText: "#FFFFFF",

  // ⬜ Outline buttons
  outline: "#D1D5DB",
  outlineText: "#111827",
};

// ✅ Shared type for theme
export type ThemeColors = typeof DarkColors;
