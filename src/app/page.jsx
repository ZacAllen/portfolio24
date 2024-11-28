"use client";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box } from "@mui/material";
import Projects from "./subpages/Projects";
import Landing from "./subpages/Landing";

const Home = () => {
  const theme = useTheme();
  // Transition isMobile to use context?
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <div>
        <Landing isMobile={isMobile} />
      </div>
      <div>
        <Projects isMobile={isMobile} />
      </div>
    </>
  );
};

export default Home;
