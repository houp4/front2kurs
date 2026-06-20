import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { bannerImages } from '../data';

function MainContent() {
  const leftColumnImages = bannerImages.filter(img => 
    img.className === 'block1' || 
    img.className === 'block2-part1' || 
    img.className === 'block2-part2'
  );
  
  const rightColumnImages = bannerImages.filter(img => 
    img.className === 'block4' || 
    img.className === 'block5' || 
    img.className === 'block3'
  );

  const block1Image = leftColumnImages.find(img => img.className === 'block1');
  const block2Part1 = leftColumnImages.find(img => img.className === 'block2-part1');
  const block2Part2 = leftColumnImages.find(img => img.className === 'block2-part2');
  
  const rightImages = rightColumnImages;

  const renderImage = (src?: string, alt?: string, link?: string) => {
    const img = <img src={src} alt={alt || 'Автомобиль'} />;
    if (link) {
      return (
        <Box component={Link} to={link} sx={{ display: 'block', width: '100%', height: '100%' }}>
          {img}
        </Box>
      );
    }
    return img;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '90%',
        margin: '0 auto',
        height: { xs: 'auto', md: '600px' },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '50%' } }}>
        <Box sx={{ overflow: 'hidden', height: { xs: '300px', md: '50%' }, '& img': { width: '100%', height: '100%', objectFit: 'cover' } }}>
          {renderImage(block1Image?.img, block1Image?.alt, block1Image?.link)}
        </Box>
        <Box sx={{ display: 'flex', height: { xs: 'auto', md: '50%' }, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ overflow: 'hidden', width: { xs: '100%', md: '50%' }, height: { xs: '300px', md: '100%' }, '& img': { width: '100%', height: '100%', objectFit: 'cover' } }}>
            {renderImage(block2Part1?.img, block2Part1?.alt, block2Part1?.link)}
          </Box>
          <Box sx={{ overflow: 'hidden', width: { xs: '100%', md: '50%' }, height: { xs: '300px', md: '100%' }, '& img': { width: '100%', height: '100%', objectFit: 'cover' } }}>
            {renderImage(block2Part2?.img, block2Part2?.alt, block2Part2?.link)}
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '50%' } }}>
        {rightImages.map((image) => (
          <Box key={image.id} sx={{ overflow: 'hidden', height: { xs: '200px', md: '33.333%' }, '& img': { width: '100%', height: '100%', objectFit: 'cover' } }}>
            {renderImage(image.img, image.alt, image.link)}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MainContent;