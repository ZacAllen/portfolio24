"use client";
// Fonts
import { Roboto, Jaldi, Londrina_Solid } from "next/font/google";

import { createTheme } from "@mui/material/styles";

// This is where we'll store our theming/palettes/etc.

const main = Londrina_Solid({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
});

const text = Jaldi({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const dark = "#152C38";
const mainColor = "#3B7A9E";
const light = "#D9D9D9";
const middle = "#375668";
const medium = "#C4C8BC";
const analogous = "#3A9E82";
const midLight = "#a6c9bf";

const theme = createTheme({
  cssVariables: true,
  typography: {
    mainFont: main.style.fontFamily,
    textFont: text.style.fontFamily,
  },
  palette: {
    primary: {
      light: light,
      main: mainColor,
      middle: middle,
      dark: dark,
    },
    accent: {
      light: "#E6F0E5",
      midLight: midLight,
      medium: medium,
      analogous: analogous,
      complement: "#9E743A",
    },
    text: {
      light: light,
      dark: dark,
    },
  },
  background: {
    dark: `linear-gradient(
    to bottom,
    ${dark} 2%,
    ${middle} 50%,
    ${dark} 100%
  )`,
    light: `linear-gradient(
    to bottom,
    ${midLight} 2%,
    ${medium} 30%,
    ${midLight} 95%
  )`,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
