"use client";
import * as React from "react";
import { styled, AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";

const NavButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: "black",
  borderRadius: "32px",
  width: "160px",
  margin: "0 8px",
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

// temp
const Logo = styled("div")({
  backgroundColor: "lightgreen",
  borderRadius: "50%",
  width: "3rem",
  height: "3rem",
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <NavContainer>
            <NavLeft>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
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
