import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/img/headerLogo.png'
import {TiShoppingCart} from "react-icons/ti";
import {useSelector} from "react-redux";
import {BsMoonStarsFill} from "react-icons/bs";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
    const {basket} = useSelector(s => s)
    const quantity = basket.reduce((acc, el) => {
        return acc + el.quantity
    }, 0)
    return (
        <header className="header bg-[#f4eade]">
            <div className="container">
                <div className="flex justify-between h-[100px] text-black pt-[20px]">
                    <Link to="/"><img src={Logo} className="header-logo" alt=""/></Link>
                    <div className="header-nav mt-[20px]">
                        <Link to="/"
                              className="header-nav-item font-bold mx-[20px] text-[16px] inline-block  border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Меню</Link>
                        <Link to="/"
                              className="header-nav-item font-bold mx-[20px] text-[16px] inline-block  border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Меню</Link>
                        <Link to="/"
                              className="header-nav-item font-bold mx-[20px] text-[16px] inline-block  border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500">Меню</Link>
                        <Link to="/contacts"
                              className="header-nav-item  mx-[20px] text-[16px] font-bold inline-block border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Контакты</Link>
                    </div>
                    <div className="header-nav flex flex-col mt-[10px]">
                        <a href="tel:+380441234567" className="">+38 (044) 123-45-67</a>
                        <a href="tel:+380441234567" className="">+38 (044) 123-45-67</a>
                    </div>
                    <Link to="/" className="header-nav">
                        <BsMoonStarsFill style={{color: "#f97316"}} className="header-cart w-[30px] h-[30px] mt-[20px]"/>
                    </Link>
                    <Link to="/basket">
                        <button className="flex text-white flex-row items-center mt-3 bg-orange-500 rounded rounded-2xl p-[10px]">
                            <span className="font-bold">Корзина</span>
                            <TiShoppingCart style={{color: "white"}} className="header-cart w-[30px] h-[30px] ml-3"/>
                            <span className="-mt-5 ml-2">{quantity}</span>
                        </button>
                    </Link>
                    <BurgerMenu/>
                </div>
                <div
                    className="flex justify-center w-full items-center border border-b border-b-4 border-orange-500"></div>
            </div>
        </header>
    );

};

export default Header;