/* eslint-disable no-restricted-imports */
import React from 'react';
import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import '@testing-library/jest-dom';
import Product from '../Products';

describe('Testing product component', () => {
  const data = [
    {
      categoryId: 2,
      categoryName: 'Rolex',
      productName: 'Yacht-Master',
      productDescription: 'Self-winding mechanical chronograph',
      productImage: 'Professional watches_Yacht-Master.jpg',
      price: 13500,
    },
  ];
  const server = setupServer(rest.get('/onlineshop/products', (req, res, ctx) => res(ctx.json(data))));

  beforeAll(() => server.listen());

  afterAll(() => server.close());

  it('test error', () => {
    server.use(rest.get('/greeting', (req, res, ctx) => res(ctx.status(500))));
  });

  it('test data from url', () => {
    server.use(rest.get('/onlineshop/products', (req, res, ctx) => res(ctx.json(data))));
  });
});

describe('Checking rendering elements', () => {
  const { container } = render(<Product />);
  expect(container.firstChild).toHaveClass('App-product');
});
