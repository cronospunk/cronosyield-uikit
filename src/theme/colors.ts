import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#03b6f0",
  primaryBright: "#03b6f0",
  primaryDark: "#03b6f0",
  secondary: "#FFFFFF",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  cardBorder: "#E7E3EB",
  backgroundAlt: "#FFFFFF",
  secondary: "#423E37",
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#272121",
  textDisabled: "#BDC2C4",
  textSubtle: "#423E37",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {  
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  backgroundAlt: "#27262c",
  background: "#272121",
  cardBorder: "#383241",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#F5CB5C",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};