import React from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io"
import pizza1234 from "../assets/img/image 52345.png"
import pizza from "../assets/img/unsplash_Ae7jQFDTPk4 (1).png"
import Slider from "react-slick";

const SaleDetails = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,

    }
    return (
        <section id="saleDetails">
            <div className="container">
                <div className="saleDetails">
                    <Link to="/sale">
                        <button className="flex flex-row text-white"><IoIosArrowBack/>Назад</button>
                    </Link>
                    <div className="cont">
                        <img src={pizza} className="flex justify-center" alt=""/>
                        <h1 className="cont-title text-white">Новый раздел "Радости" с настольными играми!</h1>
                        <p className="cont-desc text-white">Настольные игры в новом разделе "Радости". Скидки и акции по промо-кодам не распространяются на товары </p>
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
                </Slider>
            </div>
        </section>
    );
};

export default SaleDetails;