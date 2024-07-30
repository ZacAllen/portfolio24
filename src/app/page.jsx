"use client";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box } from "@mui/material";
import MCard from "./components/MCard";
import Landing from "./components/Landing";

const LandingContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
}));

const TitleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "baseline",
});

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: theme.typography.mainFont,
  fontSize: "6rem",
  paddingLeft: "4rem",
  lineHeight: "0.75",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    fontSize: "3rem",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: theme.typography.mainFont,
  fontSize: "3rem",
  paddingLeft: "8rem",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    fontSize: "1.5rem",
  },
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Landing />
    </>
  );
};

export default Home;
