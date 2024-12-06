"use client";
import { useTheme, styled, Typography } from "@mui/material";
import { DarkModeContext } from "@/utils/helpers/DarkModeContext";
import { useContext, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  JavaScript,
  Java,
  Jira,
  Mui,
  Node,
  p5js,
  Processing,
  ReactImg,
  NextJS,
  Tailwind,
  TypeScript,
  Bootstrap,
  CSS3,
  Gatsby,
  Git,
  Growthbook,
  HTML5,
} from "../../utils/helpers/skillsConfig";
import { Autoplay, EffectFade } from "swiper/modules";

const Tools = ({ isMobile }) => {
  const { isDarkMode, textColor, lighttext, darktext } = useContext(DarkModeContext);

  const SliderImage = styled(Image)({});

  const SlideText = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.textFont,
    fontSize: "1.5rem",
    marginTop: "1rem",
    color: textColor,
  }));

  const createSlides = (key) => {
    let imgArray = [];
    if (key === "languages") {
      imgArray = [
        { name: "JavaScript", url: JavaScript },
        { name: "TypeScript", url: TypeScript },
        { name: "HTML5", url: HTML5 },
        { name: "CSS3", url: CSS3 },
        { name: "Java", url: Java },
        { name: "Processing", url: Processing },
        { name: "p5js", url: p5js },
      ];
    } else if (key === "frameworks") {
      imgArray = [
        { name: "git", url: Git },
        { name: "React", url: ReactImg },
        { name: "NextJS", url: NextJS },
        { name: "Node", url: Node },
        { name: "TailwindCSS", url: Tailwind },
        { name: "Bootstrap", url: Bootstrap },
        { name: "Gatsby", url: Gatsby },
        { name: "Material UI", url: Mui },
        { name: "Jira", url: Jira },
        { name: "Growthbook", url: Growthbook },
      ];
    }
    return imgArray.map((img) => (
      <SwiperSlide className="!flex flex-col justify-center items-center">
        <SliderImage
          src={img.url}
          height={0}
          width={0}
          alt=""
          style={{
            maxWidth: "80%",
            maxHeight: "75px",
            width: "auto",
          }}
        ></SliderImage>
        <SlideText>{img.name}</SlideText>
      </SwiperSlide>
    ));
  };

  const ToolsTitle = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.mainFont,
    fontSize: "4rem",
    color: textColor,
  }));
  const Tooltip = styled("p")(({ theme }) => ({
    fontFamily: theme.typography.mainFont,
    color: textColor,
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      margin: 0,
    },
    margin: "0 0 0 2rem",
  }));
  const Languages = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.mainFont,
    color: textColor,
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    cursor: "pointer",
  }));

  const StyledSwiper = styled(Swiper)(({ theme }) => ({
    maskImage: `linear-gradient(90deg, transparent 1%, black 5%, black 95%, transparent 99%)`,
  }));

  return (
    <div className="my-32">
      <div className="mb-16">
        <ToolsTitle>My Tools</ToolsTitle>
        <Tooltip className="">* Click for list view</Tooltip>
      </div>
      <div className="mb-2">
        <Languages>Programming Languages *</Languages>
      </div>
      <div className="relative mb-16">
        <StyledSwiper
          className="swiper-transition"
          freeMode={true}
          slidesPerView={isMobile ? 3 : 6}
          direction="horizontal"
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, //! May have to change this for accessibility
          }}
          speed={1800}
          loop={true}
        >
          {createSlides("languages")}
        </StyledSwiper>
      </div>
      <div className="mb-2">
        <Languages>Tools & Frameworks *</Languages>
      </div>
      <div className="relative mb-16">
        <StyledSwiper
          className="swiper-transition"
          freeMode={true}
          slidesPerView={isMobile ? 3 : 7}
          direction="horizontal"
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          speed={1800}
          loop={true}
        >
          {createSlides("frameworks")}
        </StyledSwiper>
      </div>
    </div>
  );
};

export default Tools;
