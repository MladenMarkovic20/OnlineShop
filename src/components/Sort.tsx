/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Products';
import { state } from './State';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

let counter = 0;

function dialogSelect() {
  const [open, setOpen] = useState(false);
  //   const [minPrice, setMinPrice] = useState<number | string>('');
  //   const [maxPrice, setMaxPrice] = useState<number | string>('');

  const handleChangeMin = action((event: SelectChangeEvent<unknown>) => {
    // setMinPrice(Number(event.target.value) || '');
    state.setMinPrice(Number(event.target.value));
  });

  const handleChangeMax = action((event: SelectChangeEvent<unknown>) => {
    // setMaxPrice(Number(event.target.value) || '');
    state.setMaxPrice(Number(event.target.value));
  });

  const handleClickOpen = action(() => {
    setOpen(true);
  });

  const renderAgain = () => {
    counter++;
    state.setCounter(counter);
  };

  const handleClose = action((event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
    renderAgain();
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Button
          onClick={handleClickOpen}
          sx={{
            fontFamily: 'Dosis',
            fontWeight: 700,
            flexDirection: 'row',
            [darkTheme.breakpoints.down('lg')]: {
              fontSize: '.7rem',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              p: 0,
              pl: '1rem',
            },
            [darkTheme.breakpoints.down(800)]: {
              fontSize: '.6rem',
              p: 0,
              m: 0,
            },
            [darkTheme.breakpoints.down(600)]: {
              minWidth: '1rem',
              height: '1rem',
              fontSize: '.35rem',
              p: '.2rem',
              m: '.2rem',
            },
          }}
        >
          Open filtering dialog - By Price
        </Button>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="demo-dialog-native">Min</InputLabel>
                <Select
                  native
                  //   value={minPrice}
                  onChange={e => handleChangeMin(e)}
                  input={<OutlinedInput label="Min" id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  <option value={500}>500</option>
                  <option value={1000}>1000</option>
                  <option value={2000}>2000</option>
                  <option value={5000}>5000</option>
                  <option value={10000}>10000</option>
                  <option value={20000}>20000</option>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-dialog-select-label">Max</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  //   value={maxPrice}
                  onChange={e => handleChangeMax(e)}
                  input={<OutlinedInput label="Max" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={500}>500</MenuItem>
                  <MenuItem value={1000}>1000</MenuItem>
                  <MenuItem value={2000}>2000</MenuItem>
                  <MenuItem value={3000}>3000</MenuItem>
                  <MenuItem value={5000}>5000</MenuItem>
                  <MenuItem value={10000}>10000</MenuItem>
                  <MenuItem value={15000}>15000</MenuItem>
                  <MenuItem value={20000}>20000</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default observer(dialogSelect);
