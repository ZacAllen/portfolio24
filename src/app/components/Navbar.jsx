"use client";
import * as React from "react";
import { styled, AppBar, Box, Toolbar, Typography, Button, IconButton, useTheme } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./styles.css";
import Link from "next/link";

const NavButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: "black",
  borderRadius: "32px",
  width: "120px",
  margin: "0 8px",
  fontFamily: theme.typography.textFont,
  fontWeight: 600,
  ":hover": {
    color: "black",
    backgroundColor: "white",
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

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar className="navbar">
          <NavContainer>
            <NavLeft>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 8 }}>
                <Logo />
              </IconButton>
              <NavButton href="/">Projects</NavButton>
              <NavButton>Resume</NavButton>
              {/* <NavButton>Blog</NavButton> */}
            </NavLeft>
            <NavRight>
              <Link href="/contact">
                <NavButton>Contact</NavButton>
              </Link>
              <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 8 }}>
                {/* Will be dark mode */}
                <Logo />
              </IconButton>
            </NavRight>
          </NavContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
