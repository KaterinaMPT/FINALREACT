import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const addToFavorites = product => {
    setFavorites([...favorites, product]);
  };

  const removeFromFavorites = product => {
    setFavorites(favorites.filter(favProduct => favProduct.id !== product.id));
  };

  const addToCart = product => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <StoreContext.Provider 
      value={{ favorites, cart, addToFavorites, removeFromFavorites, addToCart, clearCart }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
