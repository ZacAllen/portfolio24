import { IconButton, Typography, styled } from "@mui/material";
import Image from "next/image";
import logoDark from "../../../public/assets/img/logodark.png";

const Container = styled("div")(({ theme, width, height }) => ({
  backfaceVisibility: "hidden",
  position: "absolute",
  width: width,
  height: height,
  backgroundColor: "black",
  transform: "rotateY(180deg) translateZ(1px)",
  transformOrigin: "center",
  borderRadius: "16px",
}));

const Title = styled(Typography)(({ theme }) => ({
  zIndex: 2,
  fontFamily: theme.typography.magicFont,
  fontSize: "3.5rem",
  lineHeight: 1.2,
  WebkitTextStroke: "1px #000000",
  backgroundImage: "linear-gradient(to bottom, #3a7373, #51c8c8)",
  color: "transparent",
  backgroundClip: "text",
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.magicFont,
  color: "white",
  position: "absolute",
  right: "10%",
  bottom: "15%",
}));

const BottomText = styled(Typography)(({ theme }) => ({
  WebkitTextStroke: "1px #000000",
  fontFamily: theme.typography.magicSubFont,
  fontSize: "1rem",
  textTransform: "uppercase",
  letterSpacing: "0.4em",
  border: "1px solid black",
}));

const CardBackSide = ({ title, subtitle, backCardWidth, backCardHeight }) => {
  return (
    <Container width={backCardWidth} height={backCardHeight}>
      <div className="flex w-full h-full justify-center items-center">
        <div className="bg-[#5e3c2e] w-[90%] h-[95%] flex justify-center items-center">
          <div className="flex w-[90%] h-[95%] outline-1 outline justify-center items-center">
            <div className="flex w-[90%] h-[90%] rounded-[50%] bg-[#a26147] outline-1 outline outline-teal-700">
              <div className="flex flex-col w-full h-full justify-between items-center">
                <div className="relative text-[6rem] leading-[1.2] mt-[20%]">
                  <Title>
                    <span className="text-[6rem] inline-block align-top leading-[6rem]">{title.charAt(0)}</span>
                    {title.slice(1)}
                  </Title>
                  <SubTitle>It's a language!</SubTitle>
                </div>

                <IconButton className="!mt-[20%]">
                  <Image src={logoDark} alt="z_allen_logo" width={100} height={100} />
                </IconButton>
                <div className="bg-[#47a2a2] p-[2px] mb-[10%] bg-opacity-100">
                  <BottomText>Webmaster</BottomText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardBackSide;
