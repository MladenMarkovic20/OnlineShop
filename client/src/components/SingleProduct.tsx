/* eslint-disable import/order */
/* eslint-disable no-restricted-imports */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link, useParams } from 'react-router-dom';
import { darkTheme } from '../components/Products';

const theme = darkTheme;

type ProductObject = {
  categoryId: number;
  categoryName: string;
  productName: string;
  productDescription: string;
  productImage: string;
  price: number;
};

const SingleProduct = (): JSX.Element => {
  const [product, setProduct] = useState({} as ProductObject);

  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      const { data } = await axios.get(`http://localhost:5000/onlineshop/products/${id}`);
      console.log('~SingleProduct.tsx~#35: ~data~', data);
      setProduct(data);
    };

    getProductById();
  }, [id]);

  const renderSingleProduct = () => (
    <Card
      key={product.categoryId}
      className="App-Single-Card"
      sx={{
        fontFamily: 'Dosis',
        position: 'relative',
        borderRadius: '20px',
        mt: 7,
        [theme.breakpoints.down('lg')]: {
          minWidth: '14rem',
          mt: 7,
          mb: 0,
          minHeight: '8rem',
          ml: '.2rem',
          mr: '.2rem',
        },
        [theme.breakpoints.down(800)]: {
          minWidth: '12rem',
          minHeight: '7rem',
        },
        [theme.breakpoints.down(600)]: {
          minWidth: '10rem',
        },
      }}
    >
      <CardMedia
        component="img"
        alt="Picture of watch"
        src={`http://localhost:5000/${product.productImage}`}
        className="App-Single-Cart-img"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily={'Dosis'}
          fontWeight={700}
          sx={{
            textTransform: 'uppercase',
            [theme.breakpoints.down('lg')]: { fontSize: '1.3rem', minHeight: '2.3rem' },
            [theme.breakpoints.down(800)]: { fontSize: '.9rem', minHeight: '2rem' },
            [theme.breakpoints.down(600)]: { fontSize: '.6rem', minHeight: '1rem' },
          }}
        >
          Brand: {product.categoryName}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          fontFamily={'Dosis'}
          fontWeight={500}
          sx={{
            textTransform: 'uppercase',
            [theme.breakpoints.down('lg')]: { fontSize: '1.1rem', minHeight: '2rem' },
            [theme.breakpoints.down(800)]: { fontSize: '.9rem', minHeight: '2rem' },
            [theme.breakpoints.down(600)]: { fontSize: '.6rem', minHeight: '1rem' },
          }}
        >
          Model: {product.productName}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          fontFamily={'Dosis'}
          fontWeight={200}
          height={100}
          sx={{
            [theme.breakpoints.down('lg')]: { fontSize: '.9rem' },
            [theme.breakpoints.down(800)]: { fontSize: '.7rem', height: '3rem' },
            [theme.breakpoints.down(600)]: { fontSize: '.4rem', height: '1rem' },
          }}
        >
          Product description: {product.productDescription}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          fontFamily: 'Dosis',
          justifyContent: 'space-between',
          [theme.breakpoints.down('lg')]: {
            maxWidth: '30rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            p: 0,
            minHeight: '1rem',
          },
          [theme.breakpoints.down(800)]: {
            maxWidth: '15rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            p: 0,
          },
          [theme.breakpoints.down(600)]: {
            maxWidth: '12rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            p: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.down('lg')]: {
              maxWidth: '30rem',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              p: 0,
              minHeight: '1rem',
            },
            [theme.breakpoints.down(800)]: {
              maxWidth: '10rem',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              p: 0,
            },
            [theme.breakpoints.down(600)]: {
              maxWidth: '10rem',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              p: 0,
            },
          }}
        >
          <Button
            className="AppBar_anhor_black"
            size="large"
            sx={{
              fontFamily: 'Dosis',
              fontWeight: 700,
              [theme.breakpoints.down('lg')]: {
                fontSize: '.7rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                p: 0,
                m: 0,
                minWidth: '3rem',
              },
              [theme.breakpoints.down(800)]: {
                fontSize: '.5rem',
                p: 0,
                m: 0,
                minWidth: '2rem',
              },
              [theme.breakpoints.down(600)]: {
                minWidth: '.2rem',
                maxWidth: '1.5rem',
                height: '1rem',
                fontSize: '.35rem',
                p: '.2rem',
                m: '.2rem',
              },
            }}
          >
            <Link to={`/onlineshop/products/`} className="AppBar_anhor_black">
              Back
            </Link>
          </Button>
          <Button
            className="AppBar_anhor_black"
            size="large"
            color="inherit"
            sx={{
              fontFamily: 'Dosis',
              fontWeight: 700,
              [theme.breakpoints.down('lg')]: {
                fontSize: '.7rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                p: 0,
                pl: '1rem',
                minWidth: '3rem',
              },
              [theme.breakpoints.down(800)]: {
                fontSize: '.5rem',
                p: 0,
                m: 0,
                minWidth: '4rem',
              },
              [theme.breakpoints.down(600)]: {
                minWidth: '1rem',
                height: '1rem',
                fontSize: '.35rem',
                p: '.2rem',
                m: '.2rem',
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
        <p className="App-price">
          Price:
          <NumericFormat
            displayType="text"
            value={product.price}
            allowLeadingZeros
            thousandSeparator=","
            prefix={'$'}
          />
        </p>
      </CardActions>
    </Card>
  );

  return <div className="App-product">{renderSingleProduct()}</div>;
};

export default SingleProduct;
