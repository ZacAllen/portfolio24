"use client";
import { useTheme, Grid, styled, Typography, useMediaQuery, Box, Divider, keyframes } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MCard from "../components/MCard";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import linkedin from "../../../public/assets/img/linkedin.webp";
import github from "../../../public/assets/img/github.png";

const ProjectsContainer = styled("div")(({ theme }) => ({
  height: "48rem",
  display: "flex",
  maxWidth: "100vw",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    alignItems: "baseline",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: theme.typography.mainFont,
  fontSize: "4rem",
  paddingLeft: "4rem",
  lineHeight: "0.75",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    fontSize: "4rem",
  },
}));

const CurrentProjectTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  WebkitTextStroke: "1px navy",
  fontFamily: theme.typography.mainFont,
  position: "absolute",
  top: "22rem",
  fontSize: "2.5rem",
}));

/**
 *
 * @param { string } rC Rotate degree coords
 * @param { number } tX Translate X (px)
 * @param { number } tY Translate Y (px)
 * @param { number } pW Window width
 * @param { number } pH Window height
 * @returns
 */
const fan = (rC, tX, tY, pW, pH, triggerAnim) => {
  const xValue = (tX / pW) * 100;
  const yValue = (tY / pH) * 100;

  if (triggerAnim) {
    return keyframes`
  0% {
    transform: rotate(0deg) translate(-50%, 0%);
    opacity: 0;
  }
  100% {
    transform: rotate(${rC}) translateX(${xValue}vw) translateY(${yValue}vh);
    opacity: 1;
  }  
`;
  }
  //   else {
  //     return keyframes
  //   0% {
  //     transform: rotate(${rC}) translateX(${xValue}vw) translateY(${yValue}vh);
  //     opacity: 1;
  //   }
  //   100% {
  //     transform: rotate(0deg) translate(-50%, 0%);
  //     opacity: 0;
  //   }
  // `;
  //   }
};

const animTime = `0.5s`;

const CardContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "pageWidth" && prop !== "pageHeight" && prop !== "triggerAnim",
})(({ theme, pageWidth, pageHeight, triggerAnim }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  position: "relative",
  marginBottom: "12rem",
  "& .mCard": {
    opacity: "0",
    maxWidth: "calc(22% - 20px)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    "&:hover": {
      zIndex: "99 !important",
    },
  },
  "& .mCard:nth-child(1)": {
    zIndex: 5,
    animation: `${fan("30deg", 200, -260, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
  "& .mCard:nth-child(2)": {
    zIndex: 4,
    animation: `${fan("15deg", 30, -250, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
  "& .mCard:nth-child(3)": {
    zIndex: 3,
    animation: `${fan(null, 0, -150, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
  "& .mCard:nth-child(4)": {
    zIndex: 2,
    animation: `${fan("-15deg", -315, -340, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
  "& .mCard:nth-child(5)": {
    zIndex: 1,
    animation: `${fan("-30deg", -460, -440, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
}));

const Projects = ({ isMobile }) => {
  const myCardBg = `linear-gradient(to bottom, #485A9A, #3A4634);`;
  const flavorText = `”We’re in the round era of web design. I predict by 2026, we’ll enter another angular age.”`;
  const footerIcons = [github];
  const [triggerAnim, setTriggerAnim] = useState(false);
  const [currentCard, setCurrentCard] = useState("");
  const { ref, inView } = useInView({});
  const isTablet = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    // ** Just do initial animation on scroll-in for now
    if (inView === true) setTriggerAnim(true);
  }, [inView]);

  useEffect(() => {});

  const pageWidth = 1920;
  const pageHeight = 1080;
  const projectCards = [
    <div className={!isMobile && "mCard"}>
      <motion.div whileHover={{ scale: 1.1 }}>
        <MCard
          setCurrentCard={setCurrentCard}
          isGroup
          title="Sveltedex"
          image={"./assets/img/sveltedex.png"}
          type="Svelte, Firebase"
          background={`linear-gradient(to bottom, #e35f48, #e4e0ba);`}
          description="A Pokemon encyclopedia modeled after the in-game Pokedex tool; created with Svelte as frontend framework and hosted with Firebase"
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 2022"}
        />
      </motion.div>
    </div>,

    <div className={!isMobile && "mCard"}>
      <motion.div whileHover={{ scale: 1.1 }}>
        <MCard
          setCurrentCard={setCurrentCard}
          isGroup
          title="Numberle"
          image={"./assets/img/numberle.png"}
          type="ReactJS, Netlify"
          background={`linear-gradient(to bottom, #38b24a, #cbbf55);`}
          description={"A parody of the popular puzzle game Wordle, made in React and hosted with Netlify."}
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 2022"}
        />
      </motion.div>
    </div>,
    <div className={!isMobile && "mCard"}>
      <motion.div whileHover={{ scale: 1.1 }}>
        <MCard
          setCurrentCard={setCurrentCard}
          isGroup
          title="Portfolio Website"
          image={"./assets/img/Me.jpg"}
          type="Next.js, ---"
          background={myCardBg}
          description={"Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text "}
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 2024"}
        />
      </motion.div>
    </div>,
    <div className={!isMobile && "mCard"}>
      <motion.div whileHover={{ scale: 1.1 }}>
        <MCard
          setCurrentCard={setCurrentCard}
          isGroup
          title="DreamyBot"
          image={"./assets/img/dreamybot.png"}
          type="JS, discord.js, OpenAI API"
          background={`linear-gradient(to bottom, #302f3c, #3c2ea0);`}
          description={
            "Discord bot with multiple functionalities, mainly voice channel youtube playback and ChatGPT + Stable Diffusion integration."
          }
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 2023"}
        />
      </motion.div>
    </div>,
    <div className={!isMobile && "mCard"}>
      <motion.div whileHover={{ scale: 1.1 }}>
        <MCard
          setCurrentCard={setCurrentCard}
          isGroup
          title="TBD"
          image={"./assets/img/Me.jpg"}
          type="FE Developer - Human Nerd"
          background={`linear-gradient(to bottom, #faed84, #bacee4);`}
          description={"Placeholder text Placeholder text Placeholder text Placeholder text "}
          // flavorText={flavorText}
          footerIcons={footerIcons}
          footerText={"© 1997"}
        />
      </motion.div>
    </div>,
  ];

  return (
    <>
      <Title>Projects</Title>
      <ProjectsContainer>
        {isMobile ? (
          <div className="w-full mt-8">
            <Swiper
              spaceBetween={20}
              slidesPerView={isTablet ? 2.2 : 1.2}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              direction="horizontal"
            >
              {projectCards.map((card) => (
                <SwiperSlide>{card}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <CardContainer pageHeight={pageHeight} pageWidth={pageWidth} triggerAnim={triggerAnim} ref={ref}>
            {projectCards.map((card) => card)}
            <CurrentProjectTitle>{currentCard}</CurrentProjectTitle>
          </CardContainer>
        )}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
