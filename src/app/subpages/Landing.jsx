"use client";
import React, { useContext } from "react";
import linkedin from "../../../public/assets/img/linkedin.webp";
import github from "../../../public/assets/img/github.png";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box, Divider } from "@mui/material";
import { DarkModeContext } from "@/utils/helpers/DarkModeContext";
import MCard from "../components/MCard";

const LandingContainer = styled("div")(({ theme }) => ({
  // minHeight: "80vh",
  margin: "10.625rem 0",
  display: "flex",
  alignItems: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  margin: "8rem 0",
}));

const TitleContainer = styled("div")({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "baseline",
});

const Title = styled(Typography)(({ theme, darkMode }) => ({
  color: darkMode?.textColor,
  fontFamily: theme.typography.mainFont,
  fontSize: "6rem",
  paddingLeft: "4rem",
  lineHeight: "0.75",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    fontSize: "4rem",
  },
}));

const Subtitle = styled(Typography)(({ theme, darkMode }) => ({
  color: darkMode?.textColor,
  fontFamily: theme.typography.mainFont,
  fontSize: "3rem",
  paddingLeft: "8rem",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    fontSize: "1.5rem",
  },
}));

const SubHeader = styled(Box)(({ theme, darkMode }) => ({
  backgroundColor: darkMode?.textColor,
  width: "75%",
  borderRadius: "32px",
  justifyContent: "start",
  alignItems: "center",
  display: "flex",
  margin: "2rem 0",
  minHeight: "5rem",
  filter: `drop-shadow(8px 8px 1px ${darkMode?.isDarkMode ? "black" : "darkgray"})`,
}));

const SubHeaderText = styled(Typography)(({ theme, darkMode }) => ({
  fontFamily: theme.typography.textFont,
  fontSize: "20px",
  color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
}));

const Landing = ({ isMobile }) => {
  const theme = useTheme();
  const myCardBg = `linear-gradient(to bottom, #485A9A, #3A4634);`;
  const description = `Zach is a front-end developer based in Atlanta, GA. In his free time, he enjoys gaming, studying history, taekwondo, and fencing.`;
  const flavorText = `”We’re in the round era of web design. I predict by 2026, we’ll enter another angular age.”`;
  const footerIcons = [github, linkedin];
  const darkMode = useContext(DarkModeContext);

  return (
    <>
      {isMobile ? (
        <StyledBox>
          <Title darkMode={darkMode}>Zach Allen</Title>
          <Subtitle darkMode={darkMode}>Front-End Developer</Subtitle>
          <Divider sx={{ margin: "20px 0", borderBottomColor: theme.palette.primary.light }} />
          <div className="flex justify-center">
            <MCard
              title="Zach Allen"
              image={"./assets/img/Me.jpg"}
              type="FE Developer - Human Nerd"
              background={myCardBg}
              description={description}
              flavorText={flavorText}
              footerIcons={footerIcons}
              footerText={"© 1997"}
            />
          </div>
        </StyledBox>
      ) : (
        <LandingContainer>
          <Grid container sx={{ height: "40vh", marginBottom: "10.625rem" }}>
            <Grid item lg={1}></Grid>
            <Grid item lg={7} className="flex">
              <TitleContainer>
                <Title darkMode={darkMode}>Zach Allen</Title>
                <Subtitle darkMode={darkMode}>Front-End Developer</Subtitle>
                <SubHeader darkMode={darkMode}>
                  <SubHeaderText className="p-4" darkMode={darkMode}>
                    Building <span style={{ color: theme.palette.accent.complement }}>smart</span>,{" "}
                    <span style={{ color: theme.palette.primary.main }}>performant</span>, &{" "}
                    <span style={{ color: theme.palette.accent.analogous }}>accessible</span> sites worth sharing on the web.
                  </SubHeaderText>
                </SubHeader>
              </TitleContainer>
            </Grid>
            <Grid item lg={3} className="flex">
              <MCard
                title="Zach Allen"
                image={"./assets/img/Me.jpg"}
                type="FE Developer - Human Nerd"
                background={myCardBg}
                description={description}
                flavorText={flavorText}
                footerIcons={footerIcons}
                footerText={"© 1997"}
              />
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>
        </LandingContainer>
      )}
    </>
  );
};

export default Landing;
