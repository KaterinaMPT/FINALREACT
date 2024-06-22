import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../context/StoreContext';
import { motion } from 'framer-motion';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToFavorites, addToCart } = useContext(StoreContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        if (response.data) {
          console.log('Информация:', response.data); 
          setProduct(response.data);
        } else {
          console.error('Нет информации...');
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Загрузка...</div>;

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0px 0px 8px rgb(0,0,0)', transition: { yoyo: 5 } }
  };

  return (
    <div className="product-detail">
      <div className="row">
        <img src={product.src} alt={product.name} />
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
          <div className="button-group">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className='btn'
              onClick={() => addToFavorites(product)}
            >
              Добавить в избранное
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className='btn'
              onClick={() => addToCart(product)}
            >
              Добавить в корзину
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
