import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#fff',
        py: 3,
        mt: 5,
        borderTop: '1px solid #dee2e6',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body2" align="center" color="text.secondary">
          Группа: Б9123-09.03.04(3) | Разработчик: Панухник А. А | 2025 год
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;