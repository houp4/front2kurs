import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { carsForGallery } from "../../data";
import CarCard from './CarCard';

const featured = [0, 1, 2, 3];

function Content() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 3, md: 6 }}>
        {featured.map((id, index) => (
          <Grid key={id} size={{ xs: 12, md: 6 }}>
            <CarCard car={carsForGallery[id]} id={id} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Content;