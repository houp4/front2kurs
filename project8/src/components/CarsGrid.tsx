import { Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { topCars, detailedCars } from '../data';

function CarsGrid() {
  return (
    <Box sx={{ width: '90%', margin: '30px auto', display: 'flex', flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' } }}>
      {/* Первый блок - кружки с автомобилями */}
      <Box sx={{ flex: { xs: '100%', md: '0 0 70%' }, overflow: 'hidden', marginBottom: { xs: '30px', md: 0 } }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', columnGap: '8%', alignItems: { xs: 'center', md: 'flex-start' }, flexDirection: { xs: 'column', md: 'row' } }}>
          {topCars.map((car) => (
            <Box key={car.id} sx={{ flex: { xs: '45%', md: '0 0 10%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: { xs: '30px', md: 0 } }}>
              <Box component={Link} to={car.link} sx={{ width: '80%', maxWidth: '150px', maxHeight: '150px', borderRadius: '50%', overflow: 'hidden', margin: '3.5% auto', border: '2px solid #ccc', display: 'flex' }}>
                <img src={car.logo} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Box sx={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '20px' }}>{car.name}</Box>
              <Box sx={{ fontSize: '15px', color: '#000000', marginBottom: '10%' }}>{car.country}</Box>
              <MuiLink component={Link} to={car.link} sx={{ borderRadius: '10%', borderColor: '#3e3e3e', border: '3px solid #3e3e3e', padding: '2%', color: 'white', backgroundColor: '#3e3e3e', textDecoration: 'none', '&:hover': { backgroundColor: '#555' } }}>
                подробнее
              </MuiLink>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Второй блок */}
      <Box sx={{ flex: { xs: '100%', md: '0 0 30%' }, overflow: 'hidden', marginBottom: { xs: '30px', md: 0 } }}>
        <Box sx={{ width: '100%', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, borderLeft: { xs: 'none', md: '1px solid #000000' } }}>
          <Box sx={{ width: { xs: '100%', md: '35%' }, height: { xs: '200px', md: '100%' }, overflow: 'hidden' }}>
            <img src={detailedCars[0]?.image} alt={detailedCars[0]?.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ marginTop: 0, textAlign: 'right' }}>{detailedCars[0]?.name}</h2>
            <ol style={{ paddingLeft: '20px', flex: 1 }}>
              <li><span>Страна:</span> {detailedCars[0]?.country}</li>
              <li><span>Тип:</span> {detailedCars[0]?.type}</li>
              <li><span>Привод:</span> {detailedCars[0]?.drive}</li>
              <li><span>Мощность:</span> {detailedCars[0]?.power} л.с.</li>
              <li><span>Рейтинг:</span> {detailedCars[0]?.rating}</li>
            </ol>
            <MuiLink component={Link} to={detailedCars[0]?.link} sx={{ marginTop: 'auto', padding: '10px 20px', marginLeft: 'auto', textDecoration: 'none', color: '#1976d2' }}>
              подробнее
            </MuiLink>
          </Box>
        </Box>
      </Box>

      {/* Третий блок */}
      <Box sx={{ flex: { xs: '100%', md: '0 0 70%' }, overflow: 'hidden', marginBottom: { xs: '30px', md: 0 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ textAlign: 'center' }}><h2>{detailedCars[1]?.name}</h2></Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ flex: 1, lineHeight: 1.6, maxWidth: { xs: '100%', md: '35%' }, textAlign: 'left', marginBottom: { xs: '20px', md: 0 } }}>
              <p>{detailedCars[1]?.description}</p>
            </Box>
            <Box sx={{ flex: '200px', height: '100%', width: { xs: '100%', md: 'auto' }, margin: { xs: '20px 0', md: 0 } }}>
              <img src={detailedCars[1]?.image} alt={detailedCars[1]?.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ flex: 1, lineHeight: 1.6, maxWidth: { xs: '100%', md: '35%' }, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <ol style={{ paddingLeft: '20px' }}>
                  <li><span>Страна:</span> {detailedCars[1]?.country}</li>
                  <li><span>Тип:</span> {detailedCars[1]?.type}</li>
                  <li><span>Привод:</span> {detailedCars[1]?.drive}</li>
                  <li><span>Мощность:</span> {detailedCars[1]?.power} л.с.</li>
                  <li><span>Рейтинг:</span> {detailedCars[1]?.rating}</li>
                </ol>
              </Box>
              <Box sx={{ marginTop: 'auto', padding: '10px 20px' }}>
                <MuiLink component={Link} to={detailedCars[1]?.link} sx={{ textDecoration: 'none', color: '#1976d2' }}>подробнее</MuiLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ flex: { xs: '100%', md: '0 0 30%' }, overflow: 'hidden' }}>
        <Box sx={{ width: '100%', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, borderLeft: { xs: 'none', md: '1px solid #000000' } }}>
          <Box sx={{ width: { xs: '100%', md: '35%' }, height: { xs: '200px', md: '100%' }, overflow: 'hidden' }}>
            <img src={detailedCars[2]?.image} alt={detailedCars[2]?.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ marginTop: 0, textAlign: 'right' }}>{detailedCars[2]?.name}</h2>
            <ol style={{ paddingLeft: '20px', flex: 1 }}>
              <li><span>Страна:</span> {detailedCars[2]?.country}</li>
              <li><span>Тип:</span> {detailedCars[2]?.type}</li>
              <li><span>Привод:</span> {detailedCars[2]?.drive}</li>
              <li><span>Мощность:</span> {detailedCars[2]?.power} л.с.</li>
              <li><span>Рейтинг:</span> {detailedCars[2]?.rating}</li>
            </ol>
            <MuiLink component={Link} to={detailedCars[2]?.link} sx={{ marginTop: 'auto', padding: '10px 20px', marginLeft: 'auto', textDecoration: 'none', color: '#1976d2' }}>
              подробнее
            </MuiLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CarsGrid;