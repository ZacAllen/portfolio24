"use client";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box } from "@mui/material";
import Projects from "./subpages/Projects";
import Landing from "./subpages/Landing";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div>
        <Landing />
        <Projects />
      </div>
    </>
  );
};

export default Home;
