import React from 'react';
import {Link} from "react-router-dom";
import LogoNew from '../../assets/img/newLogo.png'
import {TiShoppingCart} from "react-icons/ti";
import {useSelector} from "react-redux";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
    const {basket} = useSelector(s => s)

    const quantity = basket.reduce((acc, el) => {
        return acc + el.quantity
    }, 0)
    return (
        <header className="header bg-white fixed w-full z-10">
            <div className="container">
                <div className="header-global flex justify-between h-[100px] text-black pt-[20px]">
                    <div className="head-logo">
                        <Link className="flex items-center" to="/"><img src={LogoNew} className="w-[70px] rounded-full" alt=""/>
                            <h1 className="logo-text uppercase mx-2 text-2xl font-bold text-orange-500">My Sushi</h1>
                        </Link>
                    </div>
                    <div className="header-nav mt-[20px]">
                        <Link to="/"
                              className="header-nav-item font-bold mx-[20px] text-[16px] inline-block  border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Меню</Link>
                        <Link to="/about"
                              className="header-nav-item font-bold mx-[20px] text-[16px] inline-block  border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">О нас</Link>
                        <Link to="/contacts"
                              className="header-nav-item  mx-[20px] text-[16px] font-bold inline-block border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Контакты</Link>
                    </div>
                    <div className="header-nav flex flex-col mt-[10px]">
                        <h1 className="">Звоните по номеру телефона:</h1>
                        <a href="tel:+7 968 882-92-92" className="">+7 968 882-92-92</a>
                    </div>
                        {/*<Link to="/" className="header-nav">*/}
                        {/*    <BsMoonStarsFill style={{color: "#f97316"}} className="header-cart w-[30px] h-[30px] mt-[20px]"/>*/}
                        {/*</Link>*/}
                    <div className="head-basket">
                        <Link to="/basket">
                            <button
                                className="flex text-white flex-row items-center mt-3 bg-orange-500 rounded-full pt-[10px] pb-[10px] pl-[5px] pr-[5px]">
                                {/*<span className="font-bold">Корзина</span>*/}
                                <TiShoppingCart style={{color: "white"}} className="header-cart w-[30px] h-[30px] "/>
                                <span className="-mt-3 ml-1 ">{quantity}</span>
                            </button>
                        </Link>
                    </div>
                    <BurgerMenu/>
                </div>
                <div className="flex justify-center w-full items-center border border-b border-b-3 border-orange-500"></div>
            </div>
        </header>
    );

};

export default Header;