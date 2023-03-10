import React from 'react';
import {Link} from "react-router-dom";
import LogoNew from "../../assets/img/newLogo.png";

const Footer = () => {
    return (
        <section className="footer bg-black">
            <div className="container">
                <div className="flex justify-center">
                    <Link className="flex items-center mt-[30px]" to="/"><img src={LogoNew} className="w-[70px] rounded-full" alt=""/>
                        <h1 className="logo-text uppercase mx-2 text-2xl font-bold text-orange-500">My Sushi</h1>
                    </Link>
                </div>
                <div className="footer-global text-xl border-b border-gray-500  text-white pt-[50px] pb-[50px] flex flex-row flex-wrap justify-between">
                    <div className="links mx-[50px] my-[20px]">
                        <h1 className="footer-title">Быстрые ссылки </h1>
                        <div className="links flex flex-col">
                            <Link to="/"
                                  className="header-nav-item  inline-block  border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Меню</Link>
                            <Link to="/about"
                                  className="header-nav-item inline-block  border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">О нас</Link>
                            <Link to="/contacts"
                                  className="header-nav-item   inline-block border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Контакты</Link>

                        </div>
                    </div>
                    <div className="links mx-[50px] my-[20px] flex flex-col">
                        <h1 className="">Звоните по номеру телефона:</h1>
                        <a href="tel:+7 968 882-92-92" className="">+7 968 882-92-92</a>
                    </div>
                    <div className="links mx-[50px] my-[20px] flex flex-col">
                        <h1>График работы:</h1>
                        <p>10:00 - 22:00</p>
                    </div>
                </div>
                <div className="flex justify-end pt-3 pb-5">
                    <h3 className="text-white">Разработано от ADILET © 2023</h3>
                </div>
            </div>
        </section>
    );
};

export default Footer;