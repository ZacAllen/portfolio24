import {
  styled,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from '@mui/material'

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '5px',
  padding: '10px',
  backgroundColor: 'black',
}))

const StyledHeader = styled(CardHeader)(({ theme }) => ({
  padding: '2px',
  border: 'solid 1px black',
  borderRadius: '5px',
  backgroundColor: '#C4C8BC',
  color: 'black',
  fontFamily: theme.typography.mainFont,
}))

const Type = styled(Box)(({ theme }) => ({}))

const Description = styled(Typography)(({ theme }) => ({
  //
}))
const FlavorText = styled(Typography)(({ theme }) => ({
  //
}))
const CardColor = styled(Box)(({ theme, background }) => ({
  background: background,
  padding: '10px',
}))

// Consider propTypes
const MCard = ({ title, image, type, description, flavorText, background }) => {
  return (
    <StyledCard sx={{ maxWidth: '345px' }}>
      <CardColor background={background}>
        <StyledHeader title={title} />
        <CardMedia component="img" height="194" image={image} alt="z_allen" />
        <Type>
          <Typography>{type}</Typography>
        </Type>
        <CardContent>
          <Description>{description}</Description>
          <FlavorText>{flavorText}</FlavorText>
        </CardContent>
      </CardColor>

      <CardActions>
        {/* Github/LinkedIn or Project Tech */}
        <IconButton></IconButton>
        <IconButton></IconButton>
      </CardActions>
    </StyledCard>
  )
}

export default MCard
