/* eslint-disable @typescript-eslint/naming-convention */
import React, { createContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Tooltip from '@mui/material/Tooltip';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider, createTheme, styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const darkTheme = createTheme({
  typography: {
    htmlFontSize: 10,
    h3: {
      ['@media(minWidth: 600px)']: {
        fontSize: '1rem',
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#292721',
    },
    text: {
      primary: '#86adb5',
    },
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const homeInfo = 'First page of out watch store';
const productsInfo = 'See all available products from our shop';
const categoryInfo = 'See all available products grouped by category';
const aboutInfo = 'All information about our company';
const contactInfo = 'Page where costumer can find all information to contact us';
// const changeThemeColor = 'Adjust color of screen by user wish';

export default function SearchAppBar() {
  const [term, setTerm] = useState('');
  const Book = createContext(term);
  // const handleChange = (event: React.ChangeEvent<unknown>, value: string) => {
  //   setTerm(value);
  // };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          [darkTheme.breakpoints.down('md')]: { flexDirection: 'row' },
        }}
      >
        <AppBar position="fixed">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              [darkTheme.breakpoints.down('lg')]: { justifyContent: 'center' },
              [darkTheme.breakpoints.down(800)]: { justifyContent: 'center' },
            }}
          >
            <IconButton size="small" color="error" aria-label="open drawer">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MenuIcon sx={{ color: '#ffffff' }} />
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>
                  {' '}
                  <Link to="/" className="AppBar_anhor">
                    HOME
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/onlineshop/products" className="AppBar_anhor">
                    PRODUCTS
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {' '}
                  <Link to="/onlineshop/productsss" className="AppBar_anhor">
                    CATEGORIES
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {' '}
                  <Link to="/onlineshop/productsss" className="AppBar_anhor">
                    ABOUT
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {' '}
                  <Link to="/onlineshop/productsss" className="AppBar_anhor">
                    CONTACT
                  </Link>
                </MenuItem>
              </Menu>
            </IconButton>
            <Typography
              sx={{ display: 'flex', [darkTheme.breakpoints.down(800)]: { display: 'none' } }}
              className="App-NavBar"
            >
              <HomeOutlinedIcon
                sx={{
                  ml: 5,
                  [darkTheme.breakpoints.down('lg')]: { height: '2.2rem', width: '2.2rem' },
                }}
                className="App-icon"
              />{' '}
              <Tooltip title={homeInfo}>
                <Link to="/" className="AppBar_anhor">
                  HOME
                </Link>
              </Tooltip>
              <ProductionQuantityLimitsIcon
                sx={{ ml: 5, [darkTheme.breakpoints.down('lg')]: { height: '2.2rem', width: '2.2rem' } }}
              />
              <Tooltip title={productsInfo}>
                <Link to="/onlineshop/products" className="AppBar_anhor">
                  PRODUCTS
                </Link>
              </Tooltip>
              <CategoryIcon sx={{ ml: 5, [darkTheme.breakpoints.down('lg')]: { height: '2.2rem', width: '2.2rem' } }} />
              <Tooltip title={categoryInfo}>
                <Link to="/onlineshop/productsss" className="AppBar_anhor">
                  CATEGORIES
                </Link>
              </Tooltip>
              <InfoIcon sx={{ ml: 5, [darkTheme.breakpoints.down('lg')]: { height: '2.2rem', width: '2.2rem' } }} />
              <Tooltip title={aboutInfo}>
                <a href="#" className="AppBar_anhor">
                  ABOUT
                </a>
              </Tooltip>
              <ContactSupportIcon
                sx={{ ml: 5, [darkTheme.breakpoints.down('lg')]: { height: '2.2rem', width: '2.2rem' } }}
              />
              <Tooltip title={contactInfo}>
                <a href="#" className="AppBar_anhor">
                  CONTACT
                </a>
              </Tooltip>
              {/* <DarkModeIcon sx={{ ml: 10 }} />
              <Tooltip title={changeThemeColor}>
                <a href="#" className="AppBar_anhor AppBar_theme">
                  DARK
                </a>
              </Tooltip> */}
            </Typography>
            <Search
              sx={{ [darkTheme.breakpoints.down('lg')]: { display: 'none' } }}
              onChange={(event: React.ChangeEvent<unknown>) => {
                const target = event.target as HTMLTextAreaElement;
                console.log(target.value);
                setTerm(target.value);
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
