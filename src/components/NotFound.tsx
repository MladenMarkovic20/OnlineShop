import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { darkTheme } from './Products';

const NotFoundPage = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
    className="App-NotFoundPage"
  >
    <Container
      className="App-NotFoundPage"
      sx={{
        [darkTheme.breakpoints.down('lg')]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        [darkTheme.breakpoints.down(800)]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        [darkTheme.breakpoints.down(600)]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        [darkTheme.breakpoints.down(400)]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <Grid
        container
        sx={{
          [darkTheme.breakpoints.down('lg')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          [darkTheme.breakpoints.down(800)]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          [darkTheme.breakpoints.down(600)]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          [darkTheme.breakpoints.down(400)]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <Grid xs={6}>
          <Typography
            variant="h1"
            sx={{
              [darkTheme.breakpoints.down('lg')]: {
                mt: '5rem',
                fontSize: '5rem',
              },
              [darkTheme.breakpoints.down(800)]: {
                fontSize: '3rem',
              },
              [darkTheme.breakpoints.down(600)]: {
                fontSize: '2rem',
              },
            }}
          >
            404
          </Typography>
          <Typography
            variant="h6"
            sx={{
              [darkTheme.breakpoints.down('lg')]: {
                fontSize: '2rem',
              },
              [darkTheme.breakpoints.down(800)]: {
                fontSize: '1.5rem',
              },
              [darkTheme.breakpoints.down(600)]: {
                fontSize: '1rem',
              },
            }}
          >
            The page you’re looking for doesn’t exist.
          </Typography>
          <Button variant="contained">
            <Link to="/" className="AppBar_anhor">
              Back
            </Link>
          </Button>
        </Grid>
        <Grid
          xs={6}
          sx={{
            [darkTheme.breakpoints.down('lg')]: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
            },
            [darkTheme.breakpoints.down(800)]: {
              flexDirection: 'column',
              alignItems: 'center',
            },
            [darkTheme.breakpoints.down(600)]: {
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
            alt=""
            width={500}
            height={250}
            className="img"
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default NotFoundPage;
