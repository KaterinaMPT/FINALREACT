import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import '../styles/Home.css';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs.sendForm('service_t7p0q5m', 'template_0x0hk5b', form.current, 'RDC34XxHazgilthud')
      .then(
        () => {
          console.log('Отправлено!');
          reset();
        },
        (error) => {
          console.error('Провалено...', error);
        }
      );
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category ? product.category === category : true)
  );

  return (
    <div id="mainsec">
      <img id="ros" src="https://i.postimg.cc/FK5mtWVs/2024-06-18-233730461.png" alt="ros" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <section>
          <h2 id="opis">Мы предлагаем лучшие алкогольные напитки на любой вкус! Пожалуйста, перейдите в каталог, если хотите увидеть список товаров!</h2>
        </section>
        <section>
          <h2 id="sec1">Не знаете что выбрать? Самые популярные товары:</h2>
          <div className='cards mt-4'>
            {filteredProducts.slice(0, 10).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section>
          <h2 id="contform">Хотите связаться с нами? Контактная форма:</h2>
          <form id="forma" className="row gx-3 gy-2 align-items-center" ref={form} onSubmit={handleSubmit(sendEmail)}>
            <div className="col-sm-3">
              <label className="visually-hidden" htmlFor="specificSizeInputName">Имя</label>
              <input type="text" className="form-control" id="specificSizeInputName" {...register('name')} placeholder="Ваше имя" name="user_name" />
            </div>
            <div className="col-sm-3">
              <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Почта</label>
              <div className="input-group">
                <div className="input-group-text" id="pocht">@</div>
                <input {...register('email')} placeholder="Ваш email" name="user_email" type="text" className="form-control" id="specificSizeInputGroupUsername" />
              </div>
            </div>
            <div className="col-sm-3">
              <label className="visually-hidden" htmlFor="specificSizeInputMessage">Сообщение</label>
              <textarea className="form-control" id="specificSizeInputMessage" {...register('message')} placeholder="Ваше сообщение" name="message" />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-danger">Отправить</button>
            </div>
          </form>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
