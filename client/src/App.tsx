/* eslint-disable no-restricted-imports */
/* eslint-disable import/order */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import Products from './components/Products';
import './App.css';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import NotFound from './components/NotFound';

const App: React.FC = () => (
  <BrowserRouter>
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onlineshop/products" element={<Products />} />
        <Route path="/onlineshop/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
