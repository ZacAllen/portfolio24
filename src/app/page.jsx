"use client";
import React, { useContext, useLayoutEffect } from "react";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box } from "@mui/material";
import { MarginContext } from "@/utils/helpers/MarginContext";
import Projects from "./subpages/Projects";
import Landing from "./subpages/Landing";
import Tools from "./subpages/Tools";

const Home = () => {
  const theme = useTheme();
  //TODO Transition isMobile to use context? Mobile-ness MUST be determined server side
  const [margins, setMargins] = useContext(MarginContext);
  useLayoutEffect(() => {
    setMargins({ edges: 1, center: 10 });
  }, []);

  return (
    <>
      <div>
        <Landing />
      </div>
      <div>
        <Tools />
      </div>
      <div>
        <Projects />
      </div>
    </>
  );
};

export default Home;
