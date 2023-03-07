import React, {useEffect} from 'react';
import Slider from "react-slick";
import Slide from '../../../assets/img/unsplash_gJW-pfaqihA.png'
import Slide2 from '../../../assets/img/unsplash_msdTDnUxtEA.png'
import {Routes, Link, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GET_SORTED_PRODUCTS} from "../../../redux/types/types";
import {getPizza} from "../../../redux/action/Pizza";
import {getDrinks} from "../../../redux/action/Drinks";
import {getFoods} from "../../../redux/action/Foods";
import PizzaCard from "../../Cards/meals-cards/PizzaCard";
import DrinksCard from "../../Cards/meals-cards/DrinksCard";
import FoodCard from "../../Cards/meals-cards/FoodCard";
import {addToBasket} from "../Basket/Basket";
import {TiShoppingCart} from "react-icons/ti";
import {GiSushis, GiPizzaSlice} from "react-icons/gi";
import laghman from '../../../assets/img/5793800.png'
import {MdRamenDining} from "react-icons/md";
import Tabs from "./Tabs";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }
    const catalog = useSelector(state => state.catalog)
    console.log(catalog, "catalog")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPizza())
    }, [])
    useEffect(() => {
        dispatch(getDrinks())
    }, [])
    useEffect(() => {
        dispatch(getFoods())
    }, [])
    return (
        <section id="home">
            <div className="homeGlobal bg-white pt-[50px]">
                <div className="container">
                    <Slider {...settings}>
                        <div className="">
                            <img src={Slide} className=" w-[100%] h-[100%]" alt=""/>
                        </div>
                        <div className="">
                            <img src={Slide} className=" w-[100%] h-[100%]" alt=""/>
                        </div>
                        <div className="">
                            <img src={Slide} className=" w-[100%] h-[100%]" alt=""/>
                        </div>
                        <div className="">
                            <img src={Slide} className=" w-[100%] h-[100%]" alt=""/>
                        </div>
                    </Slider>
                    <div className="home">
                        <Tabs/>
                        <div className="mt-[100px] ">
                            <div className="home-meals flex flex-wrap flex-row justify-between">
                                <div className="home-meals-meal flex flex-col w-[280px] shadow-gray-400 mx-2 rounded-xl my-14">
                                    <div className=" flex justify-center">
                                        <img src={Slide} className="home-meals-meal-img w-[150px] h-[150px] rounded-full" alt="photo"/>
                                    </div>
                                    <div className="home-meals-meal-texts flex flex-col w-full p-[10px]">
                                        <h3 className="text-black mb-[10px] mt-[5px] text-[20px] text-center">Суши с рыбой</h3>
                                        <p className=" mb-[10px] mt-[5px] text-[12px]">Очкень вкусный ты только попробуй это тебе нравится обещаю тебе</p>
                                    </div>
                                    <div className="flex justify-around items-center mt-[15px]">
                                        <p>223 руб.</p>
                                        <button className="text-white p-[5px] bg-orange-500 hover:bg-[#f4eade] border-2 hover:text-orange-500 border-orange-500 rounded rounded-2xl" onClick={() => dispatch(addToBasket())}>
                                            В Корзину
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;