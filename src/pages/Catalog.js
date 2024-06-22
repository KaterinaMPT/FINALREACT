import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import '../styles/Catalog.css';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const { addToFavorites, addToCart } = useContext(StoreContext);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category ? product.category === category : true)
  );

  return (
    <div>
      <h1 id="catal">Каталог</h1>
      <input 
        id="in"
        type="text" 
        placeholder="Поиск товаров..." 
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select id="categg" className='mr-4 mb-4' onChange={e => setCategory(e.target.value)}>
        <option value="">Все категории</option>
        <option value="wine">Вино</option>
        <option value="beer">Пиво</option>
        <option value="whiskey">Виски</option>
        <option value="vodka">Водка</option>
        <option value="rum">Ром</option>
        <option value="coctail">Коктейли</option>
        <option value="liqueur">Ликёр</option>
        <option value="tequila">Текила</option>
        <option value="sake">Саке</option>
        <option value="gin">Джин</option>
        <option value="absinthe">Абсент</option>
        <option value="cognac">Коньяк</option>
      </select>
      
      <div className='cards'>
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            addToFavorites={addToFavorites}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;