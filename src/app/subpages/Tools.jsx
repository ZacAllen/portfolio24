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
import { Autoplay } from "swiper/modules";

const SliderImage = styled(Image)({});

const createSlides = (key) => {
  let imgArray = [];
  if (key === "languages") {
    imgArray = [JavaScript, TypeScript, HTML5, CSS3, Java, Processing, p5js];
  } else if (key === "frameworks") {
    imgArray = [Git, ReactImg, NextJS, Node, Tailwind, Bootstrap, Gatsby, Mui, Jira, Growthbook];
  }
  console.log(imgArray);
  return imgArray.map((img) => (
    <SwiperSlide>
      <SliderImage src={img} height={100} alt=""></SliderImage>
    </SwiperSlide>
  ));
};

const Tools = ({ isMobile }) => {
  const { isDarkMode, textColor, lighttext, darktext } = useContext(DarkModeContext);

  const ToolsTitle = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.mainFont,
    fontSize: "4rem",
    color: textColor,
  }));
  const Tooltip = styled("p")(({ theme }) => ({
    fontFamily: theme.typography.mainFont,
    color: textColor,
    fontSize: "1.5rem",
    margin: "0 0 0 2rem",
  }));
  const Languages = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.mainFont,
    color: textColor,
    fontSize: "2rem",
  }));

  return (
    <div className="">
      <div className="mb-16">
        <ToolsTitle>My Tools</ToolsTitle>
        <Tooltip className="">* Click for list view</Tooltip>
      </div>
      <div className="mb-2">
        <Languages>Programming Languages *</Languages>
      </div>
      <div>
        <Swiper
          slidesPerView={5}
          direction="horizontal"
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={1800}
          loop={true}
        >
          {createSlides("languages")}
        </Swiper>
      </div>
      <div className="mb-2">
        <Languages>Tools & Frameworks *</Languages>
      </div>
      <div>
        <Swiper
          slidesPerView={5}
          direction="horizontal"
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          speed={1800}
          loop={true} // Loop the slides
        >
          {createSlides("frameworks")}
        </Swiper>
      </div>
    </div>
  );
};

export default Tools;
