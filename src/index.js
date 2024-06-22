import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './styles/Header.css'
import './styles/Footer.css'
import './styles/Home.css'
import './styles/Catalog.css'
import './styles/Favorites.css'
import './styles/ProductCard.css'
import './styles/Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
