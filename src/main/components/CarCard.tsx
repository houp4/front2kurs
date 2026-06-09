import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  marginBottom: theme.spacing(1),
}));

interface ComponentProps {
  car: {
    img: string;
    title: string;
    description: string[];
  };
  id: number;
  index: number;
}

function CarCard({ car, id, index }: ComponentProps) {
  return (
    <Card sx={{ display: 'flex', height: '100%', flexDirection: {xs: 'column', md: 'row'}}}>
      <CardMedia
        component="img"
        alt={car.title}
        image={car.img}
        sx={{
          width: {xs: '100%', md: 190 },
          flexShrink: 0,
          order: {xs: 0, md: index % 2 === 0 ? 1 : 0}
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {car.title}
          </Typography>
          {car.description.map((item, ind) => (
            <StyledTypography key={ind} variant="body2">
              {item}
            </StyledTypography>
          ))}
        </CardContent>
        <CardActions
          sx={{
            justifyContent: index % 2 === 0 ? 'start' : 'end',
            mt: 'auto',
          }}
        >
          <Button component={Link} to={`/car/${id}`} size="small">
            Подробнее
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default CarCard;