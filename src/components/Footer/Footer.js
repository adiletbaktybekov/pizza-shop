import React from 'react';
import Logo from '../../assets/img/FooterLogo.svg'
import {Link} from "react-router-dom";
import {BsTelegram} from "react-icons/bs";
import {IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp} from "react-icons/io";
import {FaCcMastercard} from "react-icons/fa";
import {SiVisa} from "react-icons/si";

const Footer = () => {
    return (
        <section className="bg-black">
            <div className="container">
                <div className="text-white pt-[50px] pb-[50px] flex flex-row flex-wrap justify-around">
                    <div className="mx-[50px] my-[20px]">
                        <Link to="/">
                            <img src={Logo} alt=""/>
                        </Link>
                    </div>
                    <div className="links mx-[50px] my-[20px]">
                        <h1 className="footer-title">Быстрые ссылки </h1>
                        <div className="links flex flex-col">
                            <Link to="/sale" className="links-text text-white">Акции</Link>
                            <Link to="/about" className="links-text text-white">График работы</Link>
                            <Link to="/contacts" className="links-text text-white">Контакты</Link>
                        </div>
                    </div>
                    <div className="links mx-[50px] my-[20px] flex flex-col">
                        <h1 className="footer-title">Адрес</h1>
                        <Link to="/contacts" className="links-text1 text-white">Турусбекова 109/3</Link>
                    </div>
                    <div className="links mx-[50px] my-[20px] flex flex-col">
                        <h1 className="footer-title">Принимаем к оплате</h1>
                        <Link to="/contacts" className="links-text1">
                            <div className="flex flex-row">
                                <FaCcMastercard style={{color: "white", width: "35px", height: "35px"}}
                                                className="footer-cards"/>
                                <SiVisa style={{color: "white", width: "35px", height: "35px"}}
                                        className="footer-cards"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-end pb-[50px]">
                    <h3 className="text-white">Разработано от ИМЯ ОТЧЕСТВО</h3>
                </div>
            </div>
        </section>
    );
};

export default Footer;