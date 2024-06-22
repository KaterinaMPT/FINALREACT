import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Product from './pages/Product';
import StoreProvider from './context/StoreContext';

class App extends React.Component{
render(){
  return(
    <StoreProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </StoreProvider>
  )
}
}

export default App;
