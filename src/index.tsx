/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data';
import './index.css';

data;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
