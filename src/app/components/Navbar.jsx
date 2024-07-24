"use client";
import * as React from "react";
import { styled, AppBar, Box, Toolbar, Typography, Button, IconButton, useTheme } from "@mui/material";
import "./styles.css";

const NavButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: "black",
  borderRadius: "32px",
  width: "120px",
  margin: "0 8px",
  fontFamily: theme.typography.textFont,
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar className="navbar">
          <NavContainer>
            <NavLeft>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 8 }}>
                <Logo />
              </IconButton>
              <NavButton>Projects</NavButton>
              <NavButton>Resume</NavButton>
            </NavLeft>
            <NavRight>
              <NavButton>Blog</NavButton>
              <NavButton>Contact</NavButton>
            </NavRight>
          </NavContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
