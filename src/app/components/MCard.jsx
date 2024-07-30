import {
  styled,
  useTheme,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  padding: "10px",
  backgroundColor: "black",
  maxWidth: "345px",
  minWidth: "300px",
  minHeight: "480px",
  maxHeight: "511px",
}));

const StyledHeader = styled(CardHeader)(({ theme }) => ({
  padding: "2px",
  border: "solid 3px black",
  borderRadius: "10px",
  backgroundColor: theme.palette.accent.medium,
}));

const StyledContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.accent.light,
  border: "3px solid black",
  padding: "8px",
  margin: "0 5px -24px 5px",
  position: "relative",
  bottom: "3px",
  minHeight: "170px",
}));

const Type = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "0 5px 0 15px",
  border: "solid 3px black",
  borderRadius: "10px",
  backgroundColor: theme.palette.accent.medium,
  // paddingLeft: "0.5rem",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.textFont,
  fontWeight: "600",
}));
const FlavorText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.textFont,
  fontStyle: "italic",
}));
const CardColor = styled(Box)(({ theme, background }) => ({
  background: background,
  padding: "5px",
  borderRadius: "10px",
}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  marginRight: "15px",
}));

// Consider propTypes
const MCard = ({ title, image, type, description, flavorText, background, footerIcons, footerText }) => {
  console.log(footerIcons);
  const theme = useTheme();
  return (
    <StyledCard>
      <CardColor background={background}>
        <StyledHeader
          title={title}
          titleTypographyProps={{
            color: "black",
            fontFamily: theme.typography.mainFont,
            paddingLeft: "0.5rem",
            fontSize: "1rem",
          }}
        />
        <CardMedia
          sx={{ margin: "auto", maxWidth: "95%", borderRight: "3px solid black", borderLeft: "3px solid black" }}
          component="img"
          height="194"
          image={image}
          alt="card image"
        />
        <Type>
          <Typography sx={{ color: "black", fontFamily: theme.typography.mainFont }}>{type}</Typography>
          <StyledIconButton size="large" edge="end" color="inherit">
            <AccountCircleIcon />
          </StyledIconButton>
        </Type>
        <StyledContent>
          <Description>{description}</Description>
          <FlavorText>{flavorText}</FlavorText>
        </StyledContent>
      </CardColor>

      <CardActions sx={{ padding: "20px 15px 0 15px", display: "flex", justifyContent: "space-between" }}>
        {/* Github/LinkedIn or Project Tech */}
        <div>
          {footerIcons.map((icon) => (
            <StyledIconButton size="large" edge="end" color="inherit">
              <Image src={icon} width={24} height={24} alt="card_emblem" />
            </StyledIconButton>
          ))}
        </div>

        <Typography color={"white"} sx={{ fontFamily: theme.typography.textFont }}>
          {footerText}
        </Typography>
      </CardActions>
    </StyledCard>
  );
};

export default MCard;
