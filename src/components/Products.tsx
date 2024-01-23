/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/order */
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import axios from 'axios';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PaginationButtons from './PaginationButtons';
import Sort from './Sort';
import { state } from './State';

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

const Products = (): JSX.Element => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const products = async () => {
      const { data } = await axios.get(`http://localhost:5000/onlineshop/products`, {
        params: {
          productByPage: `${state.name - 1}`,
          minPrice: state.minPrice,
          maxPrice: state.maxPrice,
        },
      });
      setResults(data);
    };
    products();
  }, [state.counter, state.name, state.minPrice, state.maxPrice]);

  const renderedResults = results.map(product => (
    <Card
      key={product.categoryId}
      className="App-Card"
      sx={{
        fontFamily: 'Dosis',
        position: 'relative',
        borderRadius: '20px',
        [darkTheme.breakpoints.down('lg')]: {
          minWidth: '14rem',
          mt: 7,
          mb: 0,
          minHeight: '8rem',
          ml: '.2rem',
          mr: '.2rem',
        },
        [darkTheme.breakpoints.down(800)]: {
          minWidth: '12rem',
          mt: '1rem',
          mb: '1rem',
          minHeight: '7rem',
          ml: '.2rem',
          mr: '.2rem',
          pb: 0,
        },
        [darkTheme.breakpoints.down(600)]: {
          minWidth: '10rem',
          mt: '.5rem',
          mb: '.5rem',
        },
      }}
    >
      <CardMedia
        component="img"
        alt="Picture of watch"
        src={`http://localhost:5000/${product.productImage}`}
        className="App-Cart-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontFamily={'Dosis'} fontWeight={700}>
          {product.categoryName}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          fontFamily={'Dosis'}
          fontWeight={500}
          sx={{
            textTransform: 'uppercase',
            [darkTheme.breakpoints.down('lg')]: { fontSize: '1.1rem', minHeight: '5rem' },
            [darkTheme.breakpoints.down(800)]: { fontSize: '.9rem', minHeight: '3rem' },
            [darkTheme.breakpoints.down(600)]: { fontSize: '.6rem', minHeight: '2rem' },
          }}
        >
          {product.productName}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          fontFamily={'Dosis'}
          fontWeight={200}
          height={100}
          sx={{
            [darkTheme.breakpoints.down('lg')]: { fontSize: '.9rem' },
            [darkTheme.breakpoints.down(800)]: { fontSize: '.7rem' },
            [darkTheme.breakpoints.down(600)]: { fontSize: '.4rem', maxHeight: '3rem' },
          }}
        >
          {product.productDescription}
        </Typography>

        <CardActions
          className="App-Buttons"
          sx={{
            fontFamily: 'Dosis',
            justifyContent: 'center',
            [darkTheme.breakpoints.down('lg')]: {
              maxWidth: '15rem',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              p: 0,
              minHeight: '1rem',
            },
            [darkTheme.breakpoints.down(800)]: {
              maxWidth: '15rem',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              p: 0,
            },
            [darkTheme.breakpoints.down(600)]: {
              maxWidth: '15rem',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              p: 0,
            },
          }}
        >
          <Button
            className="AppBar-button"
            size="large"
            sx={{
              fontFamily: 'Dosis',
              fontWeight: 700,
              [darkTheme.breakpoints.down('lg')]: {
                fontSize: '.7rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                p: 0,
                m: 0,
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
                justifyContent: 'center',
              },
            }}
          >
            <Link to={`/onlineshop/products/${product.categoryId}`} className="AppBar_anhor_black">
              Learn More
            </Link>
          </Button>
          <Button
            className="AppBar-button"
            size="large"
            sx={{
              fontFamily: 'Dosis',
              fontWeight: 700,
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
            <Link to={`/onlineshop/products`} className="AppBar_anhor_black">
              Add to Cart
            </Link>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  ));

  return (
    <>
      <div className="App-sorting-button">
        <Sort />
      </div>
      <div className="App-product">
        {renderedResults}
        <PaginationButtons />
      </div>
    </>
  );
};

export default observer(Products);
