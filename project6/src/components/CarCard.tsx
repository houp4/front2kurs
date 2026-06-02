import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Car } from '../data/CarData';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  marginBottom: theme.spacing(1),
  fontSize: '0.875rem',
}));

interface CarCardProps {
  car: Car;
  index: number;
  variant?: 'left' | 'right';
  onReadMore?: () => void;
}

function CarCard({ car, index, variant = 'left', onReadMore }: CarCardProps) {
  const isEven = index % 2 === 0;
  const imagePosition = variant === 'left'
    ? (isEven ? 'right' : 'left')
    : (isEven ? 'left' : 'right');

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: imagePosition === 'right' ? 'row-reverse' : 'row' },
        border: 'none',
        boxShadow: 'none',
        height: '100%',
        gap: { xs: 2, md: 3 },
      }}
    >
      {/* Блок с изображением - растягиваем на всю ширину */}
      <Box
        sx={{
          width: { xs: '100%', md: '40%' },
          flexShrink: 0,
        }}
      >
        <img
          src={car.img}
          alt={car.title}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            borderRadius: '8px',
          }}
        />
      </Box>

      {/* Блок с контентом */}
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          textAlign: { xs: 'center', md: imagePosition === 'right' ? 'right' : 'left' },
          p: { xs: 1, md: 2 },
          '&:last-child': {
            pb: { xs: 1, md: 2 },
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="h5"
          sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' } }}
        >
          {car.title}
        </Typography>

        <StyledTypography variant="body2">
          {car.description}
        </StyledTypography>

        {variant === 'right' && car.fullDescription && (
          <StyledTypography
            variant="body2"
            sx={{
              mt: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          >
            {car.fullDescription}
          </StyledTypography>
        )}

        <Box
          sx={{
            mt: 'auto',
            pt: 2,
            display: 'flex',
            justifyContent: { xs: 'center', md: imagePosition === 'right' ? 'flex-start' : 'flex-end' },
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={onReadMore}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              fontSize: '0.75rem',
              py: 0.5,
              px: 2,
            }}
          >
            Подробнее &gt;&gt;
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CarCard;