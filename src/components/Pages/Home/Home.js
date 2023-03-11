import React, {useEffect} from 'react';
import Slider from "react-slick";
import saleCola from '../../../assets/img/sale.png'
import saleHit from '../../../assets/img/hitSushiSale.png'
import saleDost from '../../../assets/img/dostavkaSale.png'
import saleMain from '../../../assets/img/mainSale.png'
import {useDispatch, useSelector} from "react-redux";
import {addToBasket} from "../Basket/Basket";
import Tabs from "./Tabs";
import {AiFillHeart} from "react-icons/ai";
import {BiMinusCircle, BiPlusCircle} from "react-icons/bi";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
    }
    const catalog = useSelector(state => state.catalog)
    console.log(catalog, "catalog")
    const dispatch = useDispatch()
    const addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET", payload: item})
    }
    return (
        <section id="home">
            <div className="homeGlobal bg-white pt-[150px]">
                <div className="container">
                    <Slider {...settings}>
                        <div className="">
                            <img src={saleMain} className="slide-img w-[90%]" alt=""/>
                        </div>
                        <div className="">
                            <img src={saleDost} className="slide-img w-[90%]" alt=""/>
                        </div>
                        <div className="">
                            <img src={saleHit} className="slide-img w-[90%]" alt=""/>
                        </div>
                        <div className="">
                            <img src={saleCola} className="slide-img w-[90%]" alt=""/>
                        </div>
                    </Slider>
                    <div className="home">
                        <Tabs/>
                        <div className="mt-[100px] ">
                            <div className="home-meals flex flex-wrap flex-row justify-between">
                                {
                                    catalog.map((el, idx) => (
                                        <div
                                            className="home-meals-meal flex flex-col w-[280px]  shadow-2xl p-[10px] mx-2 rounded-xl my-14"
                                            key={el.id}>
                                                <img src={el.img} className="rounded-t-xl"
                                                     alt="photo"/>
                                            <div className="home-meals-meal-texts flex flex-col w-full p-[10px]">
                                                <h3 className="text-black mb-[10px] mt-[5px] text-[20px] text-center">{el.name}</h3>
                                                <p className=" mb-[10px] mt-[5px] text-[12px]">{el.description}</p>
                                            </div>
                                            <div className="flex justify-around items-center mt-[15px]">
                                                <div className=" bg-orange-500 py-1 rounded">
                                                    <button className="mx-1 rounded-full text-white focus:text-black focus:bg-white px-[3px]">{el.option.mini}</button>
                                                    <button className="mx-1 rounded-full text-white focus:text-black focus:bg-white px-[3px]">{el.option.big}</button>
                                                </div>
                                                <p>{el.price}</p>
                                                <button
                                                    className="text-white p-[5px] bg-orange-500 hover:bg-[#f4eade] border-2 hover:text-orange-500 border-orange-500 rounded rounded-2xl"
                                                    onClick={() => addToBasket(el)}>
                                                    В Корзину
                                                </button>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;