"use client";
import Image from "next/image";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box } from "@mui/material";
import MCard from "./components/MCard";

const LandingContainer = styled("div")(({ theme }) => ({
  height: "90vh",
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
  // Probably extract each subpage into their own folders later, this file will get big
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const myCardBg = `linear-gradient(to bottom, transparent, var(--background-end-rgb)) var(--background-start-rgb);`
  const myCardBg = `linear-gradient(to bottom, #485A9A, #3A4634);`;
  const description = `Zach is a front-end developer based in Atlanta, GA. In his free time, he enjoys gaming, studying history, taekwondo, and fencing.`;
  const flavorText = `”We’re in the round era of web design. I predict by 2026, we’ll enter another angular age.”`;
  console.log("isMobile", isMobile);
  return (
    <>
      {isMobile ? (
        <Box>
          <Title>Zach Allen</Title>
          <Subtitle>Front-End Developer</Subtitle>
        </Box>
      ) : (
        <LandingContainer>
          <Grid container sx={{ height: "40vh" }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <TitleContainer>
                <Title>Zach Allen</Title>
                <Subtitle>Front-End Developer</Subtitle>
              </TitleContainer>
            </Grid>
            <Grid item xs={3}>
              <MCard
                title="Zach Allen"
                image={"./assets/img/goku.png"}
                type="FE Developer - Human Nerd"
                background={myCardBg}
                description={description}
                flavorText={flavorText}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </LandingContainer>
      )}
    </>
  );
};

export default Home;
