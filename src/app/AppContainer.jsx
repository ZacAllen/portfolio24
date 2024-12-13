"use client";

import Navbar from "./components/Navbar";
import Margin from "./components/Margin";
import { useTheme, useMediaQuery } from "@mui/material";
import { DarkModeContextProvider } from "@/utils/helpers/DarkModeContext";

const AppContainer = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <DarkModeContextProvider>
        <Navbar isMobile={isMobile} />
        {/* Define consistent margin for all children of Layout */}
        <Margin children={children} />
      </DarkModeContextProvider>
    </>
  );
};

export default AppContainer;
