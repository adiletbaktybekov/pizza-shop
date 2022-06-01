import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/img/headerLogo.png'
import {TiShoppingCart} from "react-icons/ti";
import {useSelector} from "react-redux";

const Header = () => {
    const {basket} = useSelector(s => s)
    const quantity = basket.reduce((acc, el) => {
        return acc + el.quantity
    }, 0)

    return (
        <header id="header">
            <div className="container">
                <div className="header flex">
                    <Link to="/"><img src={Logo} className="header-logo" alt=""/></Link>
                    <div className="header-cont flex">
                        <div className="header-nav">
                            <Link to="/" className="header-nav-item text-white m-8">Меню</Link>
                            <Link to="/sale" className="header-nav-item text-white m-8">Акции</Link>
                            <Link to="/about" className="header-nav-item text-white m-8">О нас</Link>
                            <Link to="/contacts" className="header-nav-item text-white m-8">Контакты</Link>
                        </div>
                        <div className="header-buttons flex">
                            <Link to="/basket" className="flex flex-row text-white">
                                <TiShoppingCart style={{color: "white"}} className="header-cart"/>
                                {quantity}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header2 flex justify-between pt-12">
                    <p className="header2-calendar text-white pt-2">Вторник 2 Март 2022</p>
                    <input type="search" placeholder="Поиск еды, десерты и т.д." className="header2-search  "/>
                </div>
            </div>
        </header>
    );
};

export default Header;