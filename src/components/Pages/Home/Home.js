import React, {useEffect} from 'react';
// import Slider from "react-slick";
// import Slide from '../assets/img/unsplash_gJW-pfaqihA.png'
// import Slide2 from '../assets/img/unsplash_msdTDnUxtEA.png'
// import Slide3 from '../assets/img/unsplash_UxRhrU8fPHQ.png';
import {Routes, Link, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GET_SORTED_PRODUCTS} from "../../../redux/action/types/actionTypes";
import {getPizza} from "../../../redux/action/Pizza";
import {getDrinks} from "../../../redux/action/Drinks";
import PizzaCard from "../../meals-cards/PizzaCard";
import DrinksCard from "../../meals-cards/DrinksCard";


const Home = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 2,
    //     arrows: false,
    //
    // }
    const catalog = useSelector(state => state.catalog)
    console.log(catalog, "catalog")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPizza())
    }, [])
    useEffect(() => {
        dispatch(getDrinks())
    }, [])
    return (
        <section id="home">
            <div className="container">
                <div className="home">
                    <div className="slider">
                        {/*    <Slider {...settings}>*/}
                        {/*        <div>*/}
                        {/*            <img src={Slide} className="slider-img" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <img src={Slide2} className="slider-img" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <img src={Slide3} className="slider-img" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <img src={Slide3} className="slider-img" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <img src={Slide3} className="slider-img" alt=""/>*/}
                        {/*        </div>*/}
                        {/*    </Slider>*/}
                    </div>
                    <div className="tabs">
                        <ul className="tabs-ul flex border-b border-gray-300">
                            <li className="px-12 inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                <Link to="">Пиццы</Link>
                            </li>
                            <li className="px-12  inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                <Link to="combo">Комбо</Link>
                            </li>
                            <li className="px-12  inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                <Link to="brand-rolls">Фирменные роллы</Link>
                            </li>
                            <li className="px-12  inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                <Link to="bake-rolls">Запеченные роллы</Link>
                            </li>
                            <li className="px-12  inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                <Link to="sets">Сеты</Link>
                            </li>
                            <li className="px-12  inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                <Link to="drinks">Напитки</Link>
                            </li>
                            <li className="px-12  inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                <Link to="deserts">Десерт</Link>
                            </li>
                            <li className="px-12  inline-block p-4 border-b-4 border-transparent text-white hover:text-orange-500 hover:border-orange-900">
                                <Link to="hot">Горячее</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="home-cont flex justify-start pt-12">
                        <h1 className="home-cont-title text-white">Выбрать блюда</h1>
                        <select className="home-cont-selector text-white"
                                onChange={(e) => dispatch({type: GET_SORTED_PRODUCTS, payload: e.target.value})}>
                            <option value="highest">По ценам: Самые дорогие</option>
                            <option value="lowest">По ценам: Самые дешёвые</option>
                            <option value="a-z">От а до я</option>
                            <option value="z-a">От я до а</option>
                            <option value="z-a">По популярности</option>
                            <option value="z-a">По алфавиту</option>
                            <option value="z-a">От я до а</option>
                            <option value="z-a">По алфавиту</option>
                        </select>
                    </div>
                    <div className="home-cont flex flex-row flex-wrap">
                        <div className="">
                            {
                                catalog.map(el => (
                                    <Routes>
                                        <Route path="" element={
                                            <div className="meal flex flex-wrap" key={el.id}>
                                                <PizzaCard el={el} key={el.id}/>
                                            </div>
                                        }/>
                                        <Route path="drinks" element={
                                            <div className="meal flex flex-wrap" key={el.id}>
                                                <DrinksCard el={el} key={el.id}/>
                                            </div>
                                        }/>
                                    </Routes>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;