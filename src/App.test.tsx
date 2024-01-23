import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from './components/Home';

test('should be headings on screen', async () => {
  render(<Home />, { wrapper: BrowserRouter });
  expect(screen.getByText(/About company/i)).toBeInTheDocument();
  expect(screen.getByText(/History of watches: The wristwatch/i)).toBeInTheDocument();
});
