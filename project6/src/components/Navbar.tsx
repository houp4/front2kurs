import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  MenuItem,
  MenuList,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: '8px 12px',
}));

interface NavbarProps {
  active: string;
}

function Navbar({ active }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        mt: '28px',
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{
              color: '#1976d2',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
            }}
          >
            АвтоРейтинг
          </Typography>

          {/* Десктопное меню */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button
              variant={active === '1' ? 'contained' : 'text'}
              color="primary"
              size="medium"
            >
              Главная
            </Button>
            <Button
              variant={active === '2' ? 'contained' : 'text'}
              color="primary"
              size="medium"
            >
              Рейтинг
            </Button>
            <Button
              variant={active === '3' ? 'contained' : 'text'}
              color="primary"
              size="medium"
            >
              Машина дня
            </Button>
            <Button
              variant={active === '4' ? 'contained' : 'text'}
              color="primary"
              size="medium"
            >
              О нас
            </Button>
          </Box>

          {/* Мобильное меню */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 1,
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuList sx={{ textAlign: 'center' }}>
                  <MenuItem
                    selected={active === '1'}
                    onClick={toggleDrawer(false)}
                    sx={{ justifyContent: 'center' }}
                  >
                    Главная
                  </MenuItem>
                  <MenuItem
                    selected={active === '2'}
                    onClick={toggleDrawer(false)}
                    sx={{ justifyContent: 'center' }}
                  >
                    Рейтинг
                  </MenuItem>
                  <MenuItem
                    selected={active === '3'}
                    onClick={toggleDrawer(false)}
                    sx={{ justifyContent: 'center' }}
                  >
                    Машина дня
                  </MenuItem>
                  <MenuItem
                    selected={active === '4'}
                    onClick={toggleDrawer(false)}
                    sx={{ justifyContent: 'center' }}
                  >
                    О нас
                  </MenuItem>
                </MenuList>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;