import React from 'react';
import {Routes, Link, Route} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io"
import pizza1234 from "../assets/img/image 52345.png"
import pizza from "../assets/img/unsplash_Ae7jQFDTPk4 (1).png"
import Slider from "react-slick";
import Slide from "../assets/img/unsplash_gJW-pfaqihA.png";
import Slide2 from "../assets/img/unsplash_msdTDnUxtEA.png";
import Slide3 from "../assets/img/unsplash_UxRhrU8fPHQ.png";

const SaleDetails = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,

    }
    return (
        <section id="saleDetails">
            <div className="container">
                <div className="saleDetails">
                    <Link to="/sale">
                        <button className="flex flex-row text-white pt-5"><IoIosArrowBack/>Назад</button>
                    </Link>
                    <div className="cont pt-6 mx-44">
                        <img src={pizza} className="flex justify-center" alt=""/>
                        <h1 className="cont-title text-white my-2">Новый раздел "Радости" с настольными играми!</h1>
                        <p className="cont-desc text-white">Настольные игры в новом разделе "Радости".

                            Скидки и акции по промо-кодам не распространяются на товары </p>
                    </div>
                </div>
            </div>
            <div className="slider pt-10">
                <Slider {...settings}>
                    <div className="flex flex-col">
                        <Link to="/sale/details">
                            <img src={pizza1234} className="slider-img" alt=""/>
                        </Link>
                        <h4 className="text-white">Новый раздел "Радости" с настольными играми!</h4>
                    </div>
                    <div className="flex flex-col">
                        <Link to="/sale/details">
                            <img src={pizza1234} className="slider-img" alt=""/>
                        </Link>
                        <h4 className="text-white">Новый раздел "Радости" с настольными играми!</h4>
                    </div>
                    <div className="flex flex-col">
                        <Link to="/sale/details">
                            <img src={pizza1234} className="slider-img" alt=""/>
                        </Link>
                        <h4 className="text-white">Новый раздел "Радости" с настольными играми!</h4>
                    </div>
                    <div className="flex flex-col">
                        <Link to="/sale/details">
                            <img src={pizza1234} className="slider-img" alt=""/>
                        </Link>
                        <h4 className="text-white">Новый раздел "Радости" с настольными играми!</h4>
                    </div>
                    <div className="flex flex-col">
                        <Link to="/sale/details">
                            <img src={pizza1234} className="slider-img" alt=""/>
                        </Link>
                        <h4 className="text-white">Новый раздел "Радости" с настольными играми!</h4>
                    </div>
                    <div className="flex flex-col">
                        <Link to="/sale/details">
                            <img src={pizza1234} className="slider-img" alt=""/>
                        </Link>
                        <h4 className="text-white">Новый раздел "Радости" с настольными играми!</h4>
                    </div>
                    <div className="flex flex-col">
                        <Link to="/sale/details">
                            <img src={pizza1234} className="slider-img" alt=""/>
                        </Link>
                        <h4 className="text-white">Новый раздел "Радости" с настольными играми!</h4>
                    </div>
                    <div className="flex flex-col">
                        <Link to="/sale/details">
                            <img src={pizza1234} className="slider-img" alt=""/>
                        </Link>
                        <h4 className="text-white">Новый раздел "Радости" с настольными играми!</h4>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default SaleDetails;