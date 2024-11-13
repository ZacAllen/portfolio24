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
  useMediaQuery,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";

const StyledCard = styled(Card)(({ theme, isGroup }) => ({
  borderRadius: "10px",
  padding: "10px",
  backgroundColor: "black",
  aspectRatio: "8/13",
  maxWidth: "345px",
  minWidth: !isGroup ? "300px" : "240px",
  minHeight: !isGroup && "480px",
  maxHeight: !isGroup && "511px",
}));

const StyledHeader = styled(CardHeader)(({ theme }) => ({
  padding: "2px",
  border: "solid 3px black",
  borderRadius: "10px",
  backgroundColor: theme.palette.accent.medium,
}));

const StyledContent = styled(CardContent)(({ theme, isGroup }) => ({
  backgroundColor: theme.palette.accent.light,
  border: "3px solid black",
  padding: "8px",
  margin: "0 5px -24px 5px",
  position: "relative",
  bottom: "3px",
  minHeight: "10.625rem",
  [theme.breakpoints.down("xl")]: {
    minHeight: isGroup && "7.5rem",
  },
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

const Description = styled(Typography)(({ theme, isGroup }) => ({
  fontFamily: theme.typography.textFont,
  fontWeight: "600",
  [theme.breakpoints.down("xl")]: {
    fontSize: isGroup && "12px",
  },
}));
const FlavorText = styled(Typography)(({ theme, isGroup }) => ({
  fontFamily: theme.typography.textFont,
  fontStyle: "italic",
  [theme.breakpoints.down("md")]: {
    fontSize: isGroup && "12px",
  },
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

/**
 * MTG-Based card component for landing and project section.
 *
 * @param {string} title - title of the card.
 * @param {string} image - URL of the card image.
 * @param {string} type - type/category of the card's content.
 * @param {string} description - Main description text for the card.
 * @param {string} flavorText - Additional text to provide context or details.
 * @param {string} background - The background color or image for the card.
 * @param {array} footerIcons - Array of icon URLs to display in the card footer.
 * @param {string} footerText - Text to display alongside the icons in the footer.
 * @param {boolean} isGroup - Flag indicating whether the card belongs to a group (e.g. hand animation).
 * @returns The fully styled card component with content and actions.
 */
const MCard = ({ title, image, type, description, flavorText, background, footerIcons, footerText, isGroup }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <StyledCard isGroup={isGroup}>
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
          height={md && isGroup ? "124" : "194"}
          image={image}
          alt="card image"
        />
        <Type>
          <Typography sx={{ color: "black", fontFamily: theme.typography.mainFont }}>{type}</Typography>
          <StyledIconButton size="large" edge="end" color="inherit">
            <AccountCircleIcon />
          </StyledIconButton>
        </Type>
        <StyledContent isGroup={isGroup}>
          <Description isGroup={isGroup}>{description}</Description>
          <FlavorText isGroup={isGroup}>{flavorText}</FlavorText>
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
