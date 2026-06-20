import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 3,
        px: 2,
        bgcolor: '#3e3e3e',
        color: '#c2c2c2',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        Выполнил студент группы Б9123-09.03.04(3) Панухник Арсений
      </Typography>
    </Box>
  );
}

export default Footer;