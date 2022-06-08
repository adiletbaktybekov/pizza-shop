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


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img src={Slide} className="slider-img" alt=""/>
                    </div>
                    <div>
                        <img src={Slide2} className="slider-img" alt=""/>
                    </div>
                    <div>
                        <img src={Slide} className="slider-img" alt=""/>
                    </div>
                    <div>
                        <img src={Slide} className="slider-img" alt=""/>
                    </div>
                    <div>
                        <img src={Slide2} className="slider-img" alt=""/>
                    </div>
                    <div>
                        <img src={Slide} className="slider-img" alt=""/>
                    </div>
                </Slider>
                <div className="container">
                    <div className="home">

                        <div className="tabs">
                            <ul className="tabs-ul flex justify-center border-b border-gray-300">
                                <li className="inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                    <Link to="">
                                        <h1 className="tabs-title">Пиццы</h1>
                                    </Link>
                                </li>
                                <li className="inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                    <Link to="sushi">
                                        <h1 className="tabs-title">Суши</h1>
                                    </Link>
                                </li>
                                <li className="inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                    <Link to="drinks">
                                        <h1 className="tabs-title">Напитки</h1>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="home-cont flex justify-between pt-12">
                            <h1 className="home-cont-title text-white">Выбрать блюда</h1>
                            <select className="home-cont-selector text-white"
                                    onChange={(e) => dispatch({type: "GET_SORTED_PRODUCTS", payload: e.target.value})}>
                                <option value="ффф">Сортировка</option>
                                <option value="alphabet">По алфавиту</option>
                                <option value="sale">По цене</option>
                                <option value="new">Новинки</option>
                            </select>
                        </div>
                        <div className="home-cont">
                            <div className="grid grid-cols-4">
                                {
                                    catalog.map(el => (
                                        <Routes>
                                            <Route path="" element={
                                                <PizzaCard el={el} key={el.id}/>

                                            }/>
                                            <Route path="/drinks" element={
                                                <DrinksCard el={el} key={el.id}/>
                                            }/>
                                            <Route path="/sushi" element={
                                                <FoodCard el={el} key={el.id}/>
                                            }/>
                                        </Routes>
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