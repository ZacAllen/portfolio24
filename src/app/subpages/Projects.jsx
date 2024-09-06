"use client";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box, Divider } from "@mui/material";
import MCard from "../components/MCard";

import linkedin from "../../../public/assets/img/linkedin.webp";
import github from "../../../public/assets/img/github.png";

const ProjectsContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
}));

//! Styled div instead?
const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
}));

const Projects = ({}) => {
  const bruh = [];
  const myCardBg = `linear-gradient(to bottom, #485A9A, #3A4634);`;
  const description = `Zach is a front-end developer based in Atlanta, GA. In his free time, he enjoys gaming, studying history, taekwondo, and fencing.`;
  const flavorText = `”We’re in the round era of web design. I predict by 2026, we’ll enter another angular age.”`;
  const footerIcons = [github, linkedin];
  return (
    <ProjectsContainer>
      <CardContainer>
        <MCard
          isGroup
          title="Sveltedex"
          image={"./assets/img/Me.jpg"}
          type="FE Developer - Human Nerd"
          background={myCardBg}
          description={description}
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 1997"}
        />
        <MCard
          isGroup
          title="Numberle"
          image={"./assets/img/Me.jpg"}
          type="FE Developer - Human Nerd"
          background={myCardBg}
          description={description}
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 1997"}
        />
        <MCard
          isGroup
          title="Zach Allen"
          image={"./assets/img/Me.jpg"}
          type="FE Developer - Human Nerd"
          background={myCardBg}
          description={description}
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 1997"}
        />
        <MCard
          isGroup
          title="RTG Storybook"
          image={"./assets/img/Me.jpg"}
          type="FE Developer - Human Nerd"
          background={myCardBg}
          description={description}
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 1997"}
        />
        <MCard
          isGroup
          title="This Website"
          image={"./assets/img/Me.jpg"}
          type="FE Developer - Human Nerd"
          background={myCardBg}
          description={description}
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 1997"}
        />
      </CardContainer>
    </ProjectsContainer>
  );
};

export default Projects;
