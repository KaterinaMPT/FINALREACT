import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StoreContext } from '../context/StoreContext';

const productVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const ProductCard = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites, addToCart } = useContext(StoreContext);

  const isFavorite = favorites.some(favProduct => favProduct.id === product.id);

  const handleFavoritesClick = () => {
    if (isFavorite) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={productVariants}>
      <div className="card">
        <img src={product.src} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">
            <b>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </b>
            <span> - {product.price} руб.</span>
          </h5>
          <button 
            className={`btn ${isFavorite ? 'btn-secondary' : 'btn-danger'}`} 
            onClick={handleFavoritesClick}
          >
            {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </button>
          <button className="btn btn-warning" onClick={() => addToCart(product)}>Добавить в корзину</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
               