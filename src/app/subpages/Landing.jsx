"use client";
import React, { useContext, useEffect, useState } from "react";
import linkedin from "../../../public/assets/img/linkedin.webp";
import github from "../../../public/assets/img/github.png";
import { useAnimate, motion } from "motion/react";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box, Divider } from "@mui/material";
import { DarkModeContext } from "@/utils/helpers/DarkModeContext";
import MCard from "../components/MCard";
import CardBackSide from "../components/CardBackSide";

const LandingContainer = styled("div")(({ theme }) => ({
  marginTop: "8rem",
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

const Title = styled(Typography, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => ({
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

const Subtitle = styled(Typography, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => ({
  color: darkMode?.textColor,
  fontFamily: theme.typography.mainFont,
  fontSize: "3rem",
  paddingLeft: "8rem",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    fontSize: "1.5rem",
  },
}));

const SubHeader = styled(Box, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => ({
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

const SubHeaderMobile = styled(Box, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => ({
  backgroundColor: darkMode?.textColor,
  width: "101vw",
  justifyContent: "start",
  alignItems: "center",
  display: "flex",
  margin: "2rem calc(125% * -1 / var(--Grid-columns))", // Expand to edges of screen, beyond margin
  filter: `drop-shadow(0px 5px 2px ${darkMode?.isDarkMode ? "black" : "darkgray"})`,
  minHeight: "5rem",
}));

const SubHeaderText = styled(Typography, { shouldForwardProp: (prop) => prop !== "darkMode" })(({ theme, darkMode }) => ({
  fontFamily: theme.typography.textFont,
  fontSize: "20px",
  color: darkMode?.isDarkMode ? darkMode?.darktext : darkMode?.lighttext,
}));

const Landing = ({ isMobile }) => {
  const theme = useTheme();
  const [backCardWidth, setBackCardWidth] = useState(0);
  const [backCardHeight, setBackCardHeight] = useState(0);
  const myCardBg = `linear-gradient(to bottom, #485A9A, #3A4634);`;
  const description = `Zach is a front-end developer based in Atlanta, GA. In his free time, he enjoys gaming, studying history, taekwondo, and fencing.`;
  const flavorText = `"We're in the round era of web design. I predict by 2026, we'll enter another angular age."`;
  const footerIcons = [github, linkedin];
  const darkMode = useContext(DarkModeContext);

  useEffect(() => {
    const card = document?.getElementById("landing-card");
    if (!card) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setBackCardWidth(entry.contentRect.width);
        setBackCardHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(card);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <StyledBox>
          <Title darkMode={darkMode}>Zach Allen</Title>
          <Subtitle darkMode={darkMode}>Front-End Developer</Subtitle>
          <Divider sx={{ margin: "20px 0", borderBottomColor: theme.palette.primary.light }} />
          <SubHeaderMobile darkMode={darkMode}>
            <SubHeaderText className="p-4" darkMode={darkMode}>
              Building <span style={{ color: theme.palette.accent.complement }}>smart</span>,{" "}
              <span style={{ color: theme.palette.primary.main }}>performant</span>, &{" "}
              <span style={{ color: theme.palette.accent.analogous }}>accessible</span> sites worth sharing on the web.
            </SubHeaderText>
          </SubHeaderMobile>

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
          <Grid container>
            <Grid lg={1}></Grid>
            <Grid lg={7} className="flex">
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
            <Grid lg={3} className="flex">
              {/* Possible to extract all this animation logic into a component? */}
              <motion.div
                animate={{
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                  position: "relative",
                  transformOrigin: "center",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Front side */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    transform: "translateZ(1px)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <MCard
                    id="landing-card"
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
                {/* Back side */}
                <CardBackSide id="back-card" backCardWidth={backCardWidth} backCardHeight={backCardHeight} />
              </motion.div>
            </Grid>
            <Grid lg={1}></Grid>
          </Grid>
        </LandingContainer>
      )}
    </>
  );
};

export default Landing;
