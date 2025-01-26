"use client";
import React, { useContext, useState, useEffect } from "react";
// import { isMobile } from "react-device-detect";
import {
  styled,
  Divider as MuiDivider,
  Collapse as MuiCollapse,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAnimate, motion } from "motion/react";
import { Link as ScrollTo } from "react-scroll";
import { DarkModeContext } from "@/utils/helpers/DarkModeContext";
import "./styles.css";
import Link from "next/link";

const StyledAppBar = styled(AppBar)(({ theme, darkMode, isExpanded }) => ({
  boxShadow: "none",
  zIndex: 3,
  background: `linear-gradient(to bottom, ${
    darkMode?.isDarkMode ? theme.palette.primary.dark : theme.palette.accent.midLight
  } 50%, transparent) `,
  [theme.breakpoints.down("md")]: {
    background: `linear-gradient(to bottom, ${
      darkMode?.isDarkMode ? theme.palette.primary.dark : theme.palette.accent.midLight
    } ${isExpanded ? "90%" : "30%"}, transparent) `,
    "& .MuiToolbar-root": {
      background: `linear-gradient(to bottom, ${
        darkMode?.isDarkMode ? theme.palette.primary.dark : theme.palette.accent.midLight
      } ${isExpanded ? "90%" : "30%"}, transparent) `,
    },
  },
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

const MobileLink = styled(Typography)(({ theme, darkMode }) => ({
  fontFamily: theme.typography.textFont,
  fontSize: "1.5rem",
  marginTop: "1rem",
  color: darkMode.textColor,
}));

const DarkMode = styled(DarkModeOutlinedIcon)(({ theme, darkMode }) => ({
  fontSize: "36px",
  color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
  ":hover": {
    color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
    backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  },
  [theme.breakpoints.down("lg")]: {
    color: darkMode?.isDarkMode ? theme.palette.accent.analogous : darkMode?.lighttext,
    "&:hover": {
      color: darkMode?.isDarkMode ? theme.palette.accent.analogous : darkMode?.darktext,
    },
  },
}));

const LightMode = styled(WbSunnyIcon)(({ theme, darkMode }) => ({
  fontSize: "36px",
  color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
  ":hover": {
    color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
    backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  },
  [theme.breakpoints.down("lg")]: {
    color: darkMode?.isDarkMode ? darkMode?.darktext : theme.palette.accent.analogous,
    "&:hover": {
      color: darkMode?.isDarkMode ? darkMode?.darktext : theme.palette.accent.analogous,
    },
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

const MobileIconButton = styled(Button)(({ theme, darkMode }) => ({
  backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  ":hover": {
    color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
    backgroundColor: darkMode?.isDarkMode ? darkMode?.lighttext : darkMode?.darktext,
  },
  "&:focus": {
    color: darkMode?.isDarkMode ? darkMode?.darktext : theme.palette.accent.analogous,
  },
  width: "40%",
}));

const Collapse = styled(MuiCollapse)(({ theme }) => ({
  paddingBottom: "2rem",
}));

const Navbar = ({ isMobile }) => {
  const theme = useTheme();
  const darkMode = useContext(DarkModeContext);
  const [scope, animate] = useAnimate();
  const [isExpanded, setExpanded] = useState(false);

  const handleDarkMode = () => {
    animate(scope.current, { rotate: darkMode.isDarkMode ? 360 : -360 }, { duration: 0.5 });
    darkMode.handleDarkMode();
  };

  const handleDarkModeMobile = (mode) => {
    if ((mode === "dark" && darkMode?.isDarkMode) || (mode === "light" && !darkMode?.isDarkMode)) return null;
    darkMode.handleDarkMode(mode);
  };

  const handleMenuExpand = (state) => {
    setExpanded(!state);
  };

  const Divider = styled(MuiDivider)(({ theme }) => ({
    borderColor: darkMode?.textColor,
    opacity: 0.2,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed" darkMode={darkMode} isExpanded={isExpanded}>
        <Toolbar className={!isMobile && (darkMode.isDarkMode ? "navbar-dark" : "navbar")}>
          {!isMobile ? (
            <NavContainer>
              <NavLeft>
                <IconButton size="large" edge="start" color="inherit" aria-label="home" sx={{ mr: 8 }}>
                  <Logo />
                </IconButton>
                <ScrollTo to="projects" smooth={true} duration={500}>
                  <NavButton darkMode={darkMode}>Projects</NavButton>
                </ScrollTo>

                <NavButton darkMode={darkMode}>Resume</NavButton>
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
          ) : (
            <div className="flex flex-col w-screen">
              <NavContainer>
                <NavLeft>
                  <IconButton size="large" edge="start" color="inherit" aria-label="home" sx={{ mr: 8 }}>
                    <Logo />
                  </IconButton>
                </NavLeft>
                <NavRight>
                  <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    onClick={() => handleMenuExpand(isExpanded)}
                    sx={{ padding: 0 }}
                  >
                    <motion.div ref={scope} className="flex justify-center items-center">
                      {isExpanded ? (
                        <CloseIcon style={{ fontSize: "48px", color: darkMode.textColor }} />
                      ) : (
                        <MenuIcon style={{ fontSize: "48px", color: darkMode.textColor }} />
                      )}
                    </motion.div>
                  </IconButton>
                </NavRight>
              </NavContainer>
              <Box>
                <Collapse in={isExpanded} timeout={300} sx={{ borderTop: isExpanded && `1px solid ${darkMode?.textColor}` }}>
                  <div>
                    <ScrollTo
                      to="projects"
                      smooth={true}
                      duration={500}
                      offset={-200}
                      onClick={() => handleMenuExpand(isExpanded)}
                    >
                      <MobileLink darkMode={darkMode}>Projects</MobileLink>
                    </ScrollTo>
                    <Divider />
                  </div>
                  <div>
                    <MobileLink darkMode={darkMode}>Resume</MobileLink>
                    <Divider />
                  </div>
                  <div>
                    <Link href="/contact" onClick={() => handleMenuExpand(isExpanded)}>
                      <MobileLink darkMode={darkMode}>Contact</MobileLink>
                    </Link>
                    <Divider />
                  </div>
                  <div className="flex flex-row my-2 justify-center">
                    <MobileIconButton
                      sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: "5px",
                        borderBottomLeftRadius: "5px",
                        borderRight: darkMode?.isDarkMode ? `1px solid ${darkMode?.darktext}` : `1px solid ${darkMode?.darktext}`,
                      }}
                      darkMode={darkMode}
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={() => handleDarkModeMobile("dark")}
                    >
                      <DarkMode darkMode={darkMode} />
                    </MobileIconButton>
                    <MobileIconButton
                      sx={{
                        borderRadius: 0,
                        borderTopRightRadius: "5px",
                        borderBottomRightRadius: "5px",
                        borderLeft: darkMode?.isDarkMode ? `1px solid ${darkMode?.darktext}` : `1px solid ${darkMode?.lighttext}`,
                      }}
                      darkMode={darkMode}
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={() => handleDarkModeMobile("light")}
                    >
                      <LightMode darkMode={darkMode} />
                    </MobileIconButton>
                  </div>
                </Collapse>
              </Box>
            </div>
          )}
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Navbar;
