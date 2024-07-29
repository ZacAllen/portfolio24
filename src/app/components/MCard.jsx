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

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  padding: "10px",
  backgroundColor: "black",
  maxWidth: "345px",
  minWidth: "300px",
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
  margin: "0 5px -30px 5px",
}));

const Type = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "0 15px 0 5px",
  border: "solid 3px black",
  borderRadius: "10px",
  backgroundColor: theme.palette.accent.medium,
  // paddingLeft: "0.5rem",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.textFont,
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
}));

// Consider propTypes
const MCard = ({ title, image, type, description, flavorText, background }) => {
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

      <CardActions>
        {/* Github/LinkedIn or Project Tech */}
        <IconButton></IconButton>
        <IconButton></IconButton>
      </CardActions>
    </StyledCard>
  );
};

export default MCard;
