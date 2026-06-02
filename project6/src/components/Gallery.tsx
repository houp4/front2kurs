import { Box, Container } from '@mui/material';
import { galleryImages } from '../data/CarData';

function Gallery() {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: 3,
        }}
      >
        {/* Левое большое изображение */}
        <Box
          sx={{
            flex: { xs: 'auto', lg: 2 },
            width: '100%',
          }}
        >
          <img
            src={galleryImages[0].img}
            alt={galleryImages[0].alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '8px',
            }}
          />
        </Box>

        {/* Правая колонка с тремя маленькими изображениями */}
        <Box
          sx={{
            flex: { xs: 'auto', lg: 1 },
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {/* Верхнее маленькое изображение */}
          <Box sx={{ width: '100%' }}>
            <img
              src={galleryImages[1].img}
              alt={galleryImages[1].alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '8px',
              }}
            />
          </Box>

          {/* Два маленьких изображения внизу */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
            }}
          >
            <Box sx={{ width: '100%' }}>
              <img
                src={galleryImages[2].img}
                alt={galleryImages[2].alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <img
                src={galleryImages[3].img}
                alt={galleryImages[3].alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Gallery;