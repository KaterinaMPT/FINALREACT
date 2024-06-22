import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light py-4">
        <div className="container-fluid">
                <img className="img-fluid" src="https://i.postimg.cc/qqYXb3VS/logo.png" alt="https://postimg.cc/FkyL11KV" width="48px" height="48px"></img>
                <span className="navbar-toggler-icon"></span>
            <div className="collapse navbar-collapse" id="nav_lc">
                <ul className="navbar-nav my-3 my-lg-0 ms-lg-3 me-auto">
                    <li className="nav-item me-4"><a className="nav-link"><Link to="/"><b>Главная</b></Link></a></li>
                    <li className="nav-item me-4"><a className="nav-link"><Link to="/catalog"><b>Каталог</b></Link></a></li>
                    <li className="nav-item me-4"><a className="nav-link"><Link to="/favorites"><b>Избранное</b></Link></a></li>
                    <li className="nav-item"><a className="nav-link"><Link to="/cart"><b>Корзина</b></Link></a></li>
                </ul>
                <p id="nazv"><b>Валерианочная ᨐฅ</b></p>
               </div>
        </div>
    </nav>
  </header>
);

export default Header;
