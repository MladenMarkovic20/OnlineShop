/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { darkTheme } from './Products';
import { state } from './State';
import { observer } from 'mobx-react';
import { action } from 'mobx';

const PaginationButtons = () => {
  const handleChange = action((event: React.ChangeEvent<unknown>, value: number) => {
    state.setNew(value);
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        sx={{ width: '100%', position: 'fixed', bottom: 0, backgroundColor: '#272727', mt: '5rem' }}
        component="footer"
        square
        variant="outlined"
      >
        <Container
          maxWidth="lg"
          sx={{
            [darkTheme.breakpoints.down('lg')]: { fontSize: '.1rem' },
            [darkTheme.breakpoints.down(800)]: { fontSize: '.7rem' },
            [darkTheme.breakpoints.down(600)]: { fontSize: '.4rem', maxHeight: '5rem' },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              mb: 1,
              mt: 1,
              color: '#272727',
              [darkTheme.breakpoints.down('lg')]: { fontSize: '.9rem', color: 'red' },
              [darkTheme.breakpoints.down(800)]: { fontSize: '.7rem' },
              [darkTheme.breakpoints.down(600)]: { fontSize: '.4rem', maxHeight: '3rem' },
            }}
          >
            <Box justifyContent={'center'} sx={{ fontSize: '1rem', color: 'red' }} alignItems={'center'}>
              {' '}
              <Stack spacing={5} display={'flex'} justifyContent={'center'}>
                <Pagination count={3} defaultPage={1} size={'small'} onChange={handleChange} color={'primary'} />
              </Stack>
            </Box>
          </Box>
          <Box justifyContent={'center'} sx={{ fontSize: '1rem' }} alignItems={'center'}>
            <Typography
              variant="caption"
              color="#ffffff"
              sx={{
                [darkTheme.breakpoints.down('lg')]: { fontSize: '1.2rem' },
                [darkTheme.breakpoints.down(800)]: { fontSize: '1rem' },
                [darkTheme.breakpoints.down(600)]: { fontSize: '.7rem' },
              }}
            >
              Copyright ©2022. [] Limited
            </Typography>
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default observer(PaginationButtons);
