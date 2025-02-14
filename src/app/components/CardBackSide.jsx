import { styled } from "@mui/material";

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

const CardBackSide = ({ backCardWidth, backCardHeight }) => {
  return <Container width={backCardWidth} height={backCardHeight}></Container>;
};

export default CardBackSide;
