"use client";

import Navbar from "./components/Navbar";
import Margin from "./components/Margin";
import Footer from "./components/Footer";
import { useTheme, useMediaQuery } from "@mui/material";
import { DarkModeContextProvider } from "@/utils/helpers/DarkModeContext";
import { MobileProvider } from "@/utils/helpers/MobileContext";

const AppContainer = ({ children, isMobile }) => {
  const theme = useTheme();
  return (
    <>
      <DarkModeContextProvider>
        <MobileProvider isMobile={isMobile}>
          <Navbar isMobile={isMobile} />
          {/* Define consistent margin for all children of Layout */}
          <Margin children={children} />
          <Footer isMobile={isMobile} />
        </MobileProvider>
      </DarkModeContextProvider>
    </>
  );
};

export default AppContainer;
