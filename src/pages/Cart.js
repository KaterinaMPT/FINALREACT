import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, clearCart } = useContext(StoreContext);
  const [purchaseMessage, setPurchaseMessage] = useState('');
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handlePurchase = () => {
    if (cart.length === 0) {
      setPurchaseMessage("Ваша корзина пуста. Добавьте товары для покупки.");
      return;
    }

    setPurchaseMessage(`Покупка завершена на сумму ${totalPrice} руб.`);
    clearCart();
  };

  return (
    <div>
      <h1 id="korz">Корзина</h1>
      <div className="cards-container">
        {cart.map(product => (
          <ProductCard key={product.id} product={product} showButtons={false} />
        ))}
      </div>
      <h2 className="total-price">Итоговая стоимость: {totalPrice} руб.</h2>
      <button className="btn btn-warning" onClick={handlePurchase}>Оформить покупку</button>
      {purchaseMessage && <p className="purchase-message">{purchaseMessage}</p>}
    </div>
  );
};

export default Cart;
