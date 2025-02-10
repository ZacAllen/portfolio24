"use client";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
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
} from "@mui/material";
import ResumeModal from "./ResumeModal";
import ZAllenResume from "../../../public/assets/docs/ZAllenResume.pdf";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAnimate, motion } from "motion/react";
import { DarkModeContext } from "@/utils/helpers/DarkModeContext";
import logo from "../../../public/assets/img/logolight.png";
import logoDark from "../../../public/assets/img/logodark.png";
import "./styles.css";
import Link from "next/link";

const StyledAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop !== "darkMode" && prop !== "isExpanded" })(
  ({ theme, darkMode, isExpanded }) => {
    const backgroundColor = darkMode?.isDarkMode ? theme.palette.primary.dark : theme.palette.accent.midLight;
    const gradientHeight = isExpanded ? "90%" : "30%";

    return {
      boxShadow: "none",
      zIndex: 3,
      background: `linear-gradient(to bottom, ${backgroundColor} 50%, transparent)`,
      [theme.breakpoints.down("md")]: {
        background: `linear-gradient(to bottom, ${backgroundColor} ${gradientHeight}, transparent)`,
        "& .MuiToolbar-root": {
          background: `linear-gradient(to bottom, ${backgroundColor} ${gradientHeight}, transparent)`,
        },
      },
      paddingRight: "0 !important",
    };
  }
);

const NavButton = styled(Button, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => {
  const { isDarkMode, lighttext, darktext, textColor } = darkMode || {};
  return {
    backgroundColor: isDarkMode ? lighttext : darktext,
    color: isDarkMode ? darktext : lighttext,
    border: isDarkMode ? "none" : `2px solid ${textColor}`,
    borderRadius: "32px",
    width: "120px",
    margin: "0 8px",
    fontFamily: theme.typography.textFont,
    fontWeight: 600,
    ":hover": {
      color: isDarkMode ? darktext : lighttext,
      backgroundColor: isDarkMode ? lighttext : darktext,
    },
  };
});

const MobileLink = styled(Typography, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => ({
  fontFamily: theme.typography.textFont,
  fontSize: "1.5rem",
  marginTop: "1rem",
  color: darkMode.textColor,
}));

const DarkMode = styled(DarkModeOutlinedIcon, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => {
  const { isDarkMode, darktext, lighttext } = darkMode || {};
  const color = isDarkMode ? darktext : lighttext;
  return {
    fontSize: "36px",
    color: color,
    ":hover": {
      color: color,
      backgroundColor: isDarkMode ? lighttext : darktext,
    },

    [theme.breakpoints.down("lg")]: {
      color: isDarkMode ? theme.palette.accent.analogous : lighttext,
      "&:hover": {
        color: isDarkMode ? theme.palette.accent.analogous : darktext,
      },
    },
  };
});

const LightMode = styled(WbSunnyIcon, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => {
  const { isDarkMode, darktext, lighttext } = darkMode || {};
  const color = isDarkMode ? darktext : lighttext;
  return {
    fontSize: "36px",
    color: color,

    ":hover": {
      color: color,
      backgroundColor: isDarkMode ? lighttext : darktext,
    },

    [theme.breakpoints.down("lg")]: {
      color: isDarkMode ? darktext : theme.palette.accent.analogous,
      "&:hover": {
        color: isDarkMode ? darktext : theme.palette.accent.analogous,
      },
    },
  };
});

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
const Logo = styled(Image)({});

const NavIconButton = styled(IconButton, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => {
  const { isDarkMode, lighttext, darktext, textColor } = darkMode || {};
  const bg = isDarkMode ? lighttext : darktext;
  return {
    backgroundColor: bg,
    ":hover": {
      color: isDarkMode ? darktext : lighttext,
      backgroundColor: bg,
    },
    border: `2px solid ${isDarkMode ? lighttext : textColor}`,
  };
});

const MobileIconButton = styled(Button, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => {
  const { isDarkMode, lighttext, darktext } = darkMode || {};
  return {
    backgroundColor: isDarkMode ? lighttext : darktext,
    ":hover": {
      color: isDarkMode ? darktext : lighttext,
      backgroundColor: isDarkMode ? lighttext : darktext,
    },
    "&:focus": {
      color: isDarkMode ? darktext : theme.palette.accent.analogous,
    },
    width: "40%",
  };
});

const Collapse = styled(MuiCollapse)({
  paddingBottom: "2rem",
});

const Navbar = ({ isMobile }) => {
  const darkMode = useContext(DarkModeContext);
  const [scope, animate] = useAnimate();
  const [scopeLogo, animateLogo] = useAnimate();
  const [isExpanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDarkMode = () => {
    animate(scope.current, { rotate: darkMode.isDarkMode ? 360 : -360 }, { duration: 0.5 });
    handleLogo();
    darkMode.handleDarkMode();
  };

  const handleLogo = () => {
    animateLogo(scopeLogo.current, { rotate: darkMode.isDarkMode ? 360 : -360 }, { duration: 0.5 });
  };

  const handleDarkModeMobile = (mode) => {
    if ((mode === "dark" && darkMode?.isDarkMode) || (mode === "light" && !darkMode?.isDarkMode)) return null;
    darkMode.handleDarkMode(mode);
  };

  const handleMenuExpand = (state) => {
    setExpanded(!state);
  };

  const showResume = () => {
    if (isMobile) {
      window.open(ZAllenResume, "_blank");
    } else {
      setOpen(true);
    }
  };

  const Divider = styled(MuiDivider)(({ theme }) => ({
    borderColor: darkMode?.textColor,
    opacity: 0.2,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ResumeModal open={open} setOpen={setOpen} resume={ZAllenResume} />
      <StyledAppBar position="fixed" darkMode={darkMode} isExpanded={isExpanded}>
        <Toolbar className={!isMobile && (darkMode.isDarkMode ? "navbar-dark" : "navbar")}>
          {!isMobile ? (
            <NavContainer>
              <NavLeft>
                <Link href="/">
                  <IconButton size="large" edge="start" color="inherit" aria-label="home">
                    <motion.div ref={scopeLogo} style={{ transformOrigin: "center" }}>
                      <Logo src={darkMode?.isDarkMode ? logoDark : logo} width={75} height={75} alt="Zach Allen Logo" />
                    </motion.div>
                  </IconButton>
                </Link>

                <Link href="/#projects">
                  <NavButton darkMode={darkMode} sx={{ ml: 8 }}>
                    Projects
                  </NavButton>
                </Link>

                <NavButton darkMode={darkMode} onClick={() => showResume()}>
                  Resume
                </NavButton>
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
                  <Link href="/">
                    <IconButton size="large" edge="start" color="inherit" aria-label="home" sx={{ mr: 8 }}>
                      <Logo src={darkMode?.isDarkMode ? logoDark : logo} width={50} height={50} />
                    </IconButton>
                  </Link>
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
                    <Link href={"/#projects"} onClick={() => handleMenuExpand(isExpanded)}>
                      <MobileLink darkMode={darkMode}>Projects</MobileLink>
                    </Link>
                    <Divider />
                  </div>
                  <div>
                    <MobileLink darkMode={darkMode} onClick={() => showResume()}>
                      Resume
                    </MobileLink>
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
