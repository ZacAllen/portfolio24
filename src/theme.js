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

const theme = createTheme({
  typography: {
    mainFont: main.style.fontFamily,
    textFont: text.style.fontFamily,
  },
  palette: {
    primary: {
      light: "#D9D9D9",
      main: "#3B7A9E",
      dark: "#152C38",
    },
  },
});

export default theme;
