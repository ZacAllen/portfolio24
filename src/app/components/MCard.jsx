import { styled, Typography, Box, Card, CardContent, CardHeader, CardMedia } from "@mui/material";

const Type = styled(Box)(({ theme }) => ({}));

// Consider propTypes
const MCard = ({ title, image, type, description, flavorText, background }) => {
  return (
    <Card sx={{ maxWidth: "345px" }}>
      <CardHeader title={title} />
      <CardMedia component="img" height="194" image="" alt="z_allen" />
      <Type>
        <Typography>{type}</Typography>
      </Type>
      <CardContent></CardContent>
    </Card>
  );
};

export default MCard;
