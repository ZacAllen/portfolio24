"use client";
import linkedin from "../../../public/assets/img/linkedin.webp";
import github from "../../../public/assets/img/github.png";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box, Divider } from "@mui/material";
import MCard from "../components/MCard";

const LandingContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  margin: "8rem 0",
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
    fontSize: "4rem",
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

const SubHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: "120%",
  borderRadius: "32px",
  justifyContent: "start",
  alignItems: "center",
  display: "flex",
  margin: "2rem 0",
  minHeight: "5rem",
  filter: "drop-shadow(8px 8px 1px black)",
}));

const Landing = ({}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const myCardBg = `linear-gradient(to bottom, #485A9A, #3A4634);`;
  const description = `Zach is a front-end developer based in Atlanta, GA. In his free time, he enjoys gaming, studying history, taekwondo, and fencing.`;
  const flavorText = `”We’re in the round era of web design. I predict by 2026, we’ll enter another angular age.”`;
  const footerIcons = [github, linkedin];

  return (
    <>
      {isMobile ? (
        <StyledBox>
          <Title>Zach Allen</Title>
          <Subtitle>Front-End Developer</Subtitle>
          <Divider sx={{ margin: "20px 0", borderBottomColor: theme.palette.primary.light }} />
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
        </StyledBox>
      ) : (
        <LandingContainer>
          <Grid container sx={{ height: "40vh" }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={7} sx={{ display: "flex" }}>
              <TitleContainer>
                <Title>Zach Allen</Title>
                <Subtitle>Front-End Developer</Subtitle>
                <SubHeader>
                  <Typography>Temporary text until I think of something different.</Typography>
                </SubHeader>
              </TitleContainer>
            </Grid>
            <Grid item xs={3}>
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
            <Grid item xs={1}></Grid>
          </Grid>
        </LandingContainer>
      )}
    </>
  );
};

export default Landing;
