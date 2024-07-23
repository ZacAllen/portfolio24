"use client";
// Fonts

import { createTheme } from "@mui/material/styles";

// This is where we'll store our theming/palettes/etc.
const theme = createTheme({
  typography: {
    mainFont: "",
    textFont: "",
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
