import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, Link } from 'react-router-dom';
import { carsForGallery } from "../data";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Car() {
  const { id } = useParams();
  const index = id !== undefined ? parseInt(id, 10) : 0;
  const safeIndex =
    Number.isFinite(index) && index >= 0 && index < carsForGallery.length ? index : 0;
  const car = carsForGallery[safeIndex];

  return (
    <div>
      <Navbar active="1" />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link to="/" style={{ color: '#5d8aa8', textDecoration: 'none' }}>
            Главная
          </Link>
          <Typography color="text.primary">{car.title}</Typography>
        </Breadcrumbs>

        <Typography variant="h4" component="h1" align="center" gutterBottom>
          {car.title}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <img
                src={car.img}
                alt={car.title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            {car.description.map((paragraph, i) => (
              <Typography key={i} variant="body1" sx={{ textAlign: 'justify', mb: 2 }}>
                {paragraph}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Car;