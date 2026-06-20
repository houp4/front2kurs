import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/carsData';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Car() {
  const { id } = useParams();
  const carId = id !== undefined ? parseInt(id, 10) : 1;
  const car = cars.find((item) => item.id === carId) ?? cars[0];

  const carDescription = [
    `${car.Модель} — ${car.Тип} от производителя из ${car.Страна}.`,
    `Привод: ${car.Привод}. Мощность двигателя: ${car.Мощность} л.с.`,
    `Расход топлива: ${car.Расход} л/100км. Цена: ${car.Цена.toLocaleString()} рублей.`,
    `Рейтинг: ${car.Рейтинг} из 5 на основании отзывов владельцев.`,
  ];

  return (
    <div>
      <Navbar active="1" />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link to="/" style={{ color: '#4a90e2', textDecoration: 'none' }}>Главная</Link>
          <Typography color="text.primary">{car.Модель}</Typography>
        </Breadcrumbs>
        <Typography variant="h4" component="h1" align="center" gutterBottom>{car.Модель}</Typography>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Box component="img" src={car.img} alt={car.Модель} sx={{ maxWidth: '100%', maxHeight: 520, objectFit: 'cover' }} />
        </Box>
        <Grid container spacing={2}>
          {carDescription.map((paragraph, i) => (
            <Grid key={i} size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>{paragraph}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Car;