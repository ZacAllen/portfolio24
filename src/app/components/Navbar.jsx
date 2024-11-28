"use client";
import * as React from "react";
import { styled, AppBar, Box, Toolbar, Typography, Button, IconButton, useTheme } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import "./styles.css";
import Link from "next/link";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // backgroundColor: "transparent",
  boxShadow: "none",
  zIndex: 2,
  background: `linear-gradient(to bottom, var(--background-start-rgb) 50%, transparent) `,
}));

const NavButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.text.dark,
  borderRadius: "32px",
  width: "120px",
  margin: "0 8px",
  fontFamily: theme.typography.textFont,
  fontWeight: 600,
  ":hover": {
    color: theme.palette.text.dark,
    backgroundColor: theme.palette.text.light,
  },
}));

const DarkMode = styled(DarkModeOutlinedIcon)(({ theme }) => ({
  fontSize: "36px",
  color: theme.palette.text.dark,
  ":hover": {
    color: theme.palette.text.dark,
    backgroundColor: theme.palette.text.light,
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

const NavIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.text.light,
  ":hover": {
    color: theme.palette.text.dark,
    backgroundColor: theme.palette.text.light,
  },
}));

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
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
              <NavIconButton edge="end" color="inherit" aria-label="menu" sx={{ mx: 8 }}>
                <DarkMode />
              </NavIconButton>
            </NavRight>
          </NavContainer>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Navbar;
