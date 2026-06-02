import { Container, Grid, Box } from '@mui/material';
import { leftColumnCars, rightColumnCars } from '../data/CarData';
import CarCard from './CarCard';

function Content() {
  const handleReadMore = (carTitle: string) => {
    console.log(`Подробнее о ${carTitle}`);
  };

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        {/* Левая колонка - 4 карточки */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {leftColumnCars.map((car, index) => (
              <CarCard
                key={car.id}
                car={car}
                index={index}
                variant="left"
                onReadMore={() => handleReadMore(car.title)}
              />
            ))}
          </Box>
        </Grid>

        {/* Правая колонка - 2 большие карточки */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {rightColumnCars.map((car, index) => (
              <CarCard
                key={car.id}
                car={car}
                index={index}
                variant="right"
                onReadMore={() => handleReadMore(car.title)}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Content;