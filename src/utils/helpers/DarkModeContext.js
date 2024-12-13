import React, { useState, createContext } from "react";
import theme from "@/theme";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const lighttext = theme.palette.text.light;
  const darktext = theme.palette.text.dark;
  const lightbg = theme.background.light;
  const darkbg = theme.background.dark;

  const [isDarkMode, setDarkMode] = useState(true);
  const [background, setBackground] = useState(darkbg);
  const [textColor, setTextColor] = useState(lighttext);

  const handleDarkMode = (mode) => {
    if (mode) {
      setDarkMode(mode === "dark" ? true : false);
    } else {
      setDarkMode(!isDarkMode);
    }
    const body = document.body;
    if (isDarkMode) {
      body.style.background = lightbg;
    } else {
      body.style.background = darkbg;
    }
    setBackground(background === darkbg ? lightbg : darkbg);

    setTextColor(textColor === lighttext ? darktext : lighttext);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, handleDarkMode, textColor, background, lighttext, darktext }}>
      {children}
    </DarkModeContext.Provider>
  );
};
