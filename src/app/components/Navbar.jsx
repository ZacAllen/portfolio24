"use client";
import React, { useContext, useEffect } from "react";
import { styled, AppBar, Box, Toolbar, Typography, Button, IconButton, useTheme } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useAnimate, motion } from "motion/react";
import { DarkModeContext } from "@/utils/helpers/DarkModeContext";
import "./styles.css";
import Link from "next/link";

const StyledAppBar = styled(AppBar)(({ theme, darkMode }) => ({
  // backgroundColor: "transparent",
  boxShadow: "none",
  zIndex: 2,
  background: `linear-gradient(to bottom, ${
    darkMode?.isDarkMode ? theme.palette.primary.dark : theme.palette.accent.midLight
  } 50%, transparent) `,
}));

const NavButton = styled(Button)(({ theme, darkMode }) => ({
  backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
  border: darkMode?.isDarkMode ? "none" : `2px solid ${darkMode?.textColor}`,
  borderRadius: "32px",
  width: "120px",
  margin: "0 8px",
  fontFamily: theme.typography.textFont,
  fontWeight: 600,
  ":hover": {
    color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
    backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  },
}));

const DarkMode = styled(DarkModeOutlinedIcon)(({ theme, darkMode }) => ({
  fontSize: "36px",
  color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
  ":hover": {
    color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
    backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  },
}));

const LightMode = styled(WbSunnyIcon)(({ theme, darkMode }) => ({
  fontSize: "36px",
  color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
  ":hover": {
    color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
    backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  },
}));

const NavContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const NavLeft = styled("div")({
  display: "flex",
  alignItems: "center",
});

const NavRight = styled("div")({
  display: "flex",
  alignItems: "center",
});

/**
 * PLACEHOLDER
 **/
const Logo = styled("div")({
  backgroundColor: "#9BA395",
  borderRadius: "50%",
  width: "3rem",
  height: "3rem",
});

const NavIconButton = styled(IconButton)(({ theme, darkMode }) => ({
  backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  ":hover": {
    color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
    backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  },
  border: darkMode?.isDarkMode ? `2px solid ${darkMode?.lighttext}` : `2px solid ${darkMode?.textColor}`,
}));

const Navbar = () => {
  const theme = useTheme();
  const darkMode = useContext(DarkModeContext);
  const [scope, animate] = useAnimate();

  const handleDarkMode = () => {
    animate(scope.current, { rotate: darkMode.isDarkMode ? 360 : -360 }, { duration: 0.5 });
    darkMode.handleDarkMode();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed" darkMode={darkMode}>
        <Toolbar className="navbar">
          <NavContainer>
            <NavLeft>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 8 }}>
                <Logo />
              </IconButton>
              <Link href="/">
                <NavButton darkMode={darkMode}>Projects</NavButton>
              </Link>

              <NavButton darkMode={darkMode}>Resume</NavButton>
              {/* <NavButton>Blog</NavButton> */}
            </NavLeft>
            <NavRight>
              <Link href="/contact">
                <NavButton darkMode={darkMode}>Contact</NavButton>
              </Link>
              <motion.div ref={scope}>
                <NavIconButton
                  darkMode={darkMode}
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mx: 8 }}
                  onClick={() => handleDarkMode()}
                >
                  {darkMode?.isDarkMode ? <DarkMode darkMode={darkMode} /> : <LightMode darkMode={darkMode} />}
                </NavIconButton>
              </motion.div>
            </NavRight>
          </NavContainer>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Navbar;
