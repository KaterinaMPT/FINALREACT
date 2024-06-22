import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import '../styles/Favorites.css';

const Favorites = () => {
  const { favorites } = useContext(StoreContext);

  return (
    <div>
      <h1 id="fav">Избранное</h1>
      <div className="cards-container">
        {favorites.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;