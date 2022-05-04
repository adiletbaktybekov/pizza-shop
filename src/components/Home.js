import React, {useEffect} from 'react';
import Slider from "react-slick";
import Slide from '../assets/img/unsplash_gJW-pfaqihA.png'
import Slide2 from '../assets/img/unsplash_msdTDnUxtEA.png'
import Slide3 from '../assets/img/unsplash_UxRhrU8fPHQ.png';
import {Routes, Link, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, getProducts} from "../redux/action/MenuActions";
import MealImg from "../assets/img/Image 2.svg";
import {GET_SORTED_PRODUCTS} from "../redux/types/actionTypes";
import MealCard from "./MealsCard/MealCard";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,

    }
    const catalog = useSelector(state => state.catalog)
    console.log(catalog, "catalog")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <section id="home">
            <div className="container">
                <div className="home">
                    <div className="slider pt-28">

                        <Slider {...settings}>
                            <div>
                                <img src={Slide} className="slider-img" alt=""/>
                            </div>
                            <div>
                                <img src={Slide2} className="slider-img" alt=""/>
                            </div>
                            <div>
                                <img src={Slide3} className="slider-img" alt=""/>
                            </div>
                            <div>
                                <img src={Slide3} className="slider-img" alt=""/>
                            </div>
                            <div>
                                <img src={Slide3} className="slider-img" alt=""/>
                            </div>
                        </Slider>
                    </div>
                    {/*<div className="inline-block mr-2 bg-gray-600 select-none">*/}
                    {/*    <input type="checkbox" className="checked:bg-transparent focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-20 h-10 rounded-md bg-gray-600 border-4 appearance-none cursor-pointer"/>*/}
                    {/*</div>*/}

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
                                <Link to="deserts">Десерты</Link>
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
                        </select>
                    </div>
                    <div className="home-cont flex flex-row flex-wrap">
                        <div className="basis-2/3">
                            {
                                catalog.map(el => (
                                    <Routes>
                                        <Route path="" element={
                                            <div className="" key={el.id}>
                                                {/*<MealCard el={el} key={el.id}/>*/}
                                                <div className="meal flex flex-wrap basis-2/3" key={el.id}>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex m-0 justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}>
                                        </Route>
                                        <Route path="combo" element={
                                            <div className="" key={el.id}>
                                                <div className=" meal flex flex-wrap  basis-2/3" key={el.id}>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}>
                                        </Route>
                                        <Route path="brand-rolls" element={
                                            <div className="" key={el.id}>
                                                <div className="meal flex flex-wrap  basis-2/3" key={el.id}>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}>
                                        </Route>
                                        <Route path="bake-rolls" element={
                                            <div className="" key={el.id}>
                                                <div className="meal  flex flex-wrap  basis-2/3" key={el.id}>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}>
                                        </Route>
                                        <Route path="sets" element={
                                            <div className="" key={el.id}>
                                                <h1 className="text-zinc-50">sets</h1>
                                                <h3 className=" text-white">{el.title}</h3>
                                                <h3 className="text-white">{el.description}</h3>
                                                <button className="text-white"
                                                        onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                </button>
                                            </div>}>
                                        </Route>
                                        <Route path="drinks" element={
                                            <div className="" key={el.id}>
                                                <div className="meal  flex flex-wrap  basis-2/3" key={el.id}>
                                                    <div className="meal-cont m-5 mt-4">
                                                        <div className="meal-cont-head flex flex-row">
                                                            <div className="meal-cont-head-news bg-red-500">
                                                                <h3 className="meal-cont-head-news-new text-white mt-2 ">New!</h3>
                                                            </div>
                                                            <img src={MealImg} className="meal-img mx-4" alt=""/>
                                                        </div>
                                                        <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
                                                        <h3 className="meal-cont-desc text-white">{el.description}</h3>
                                                        <div className="meal-cont-buttons flex justify-center mt-5">
                                                            <button
                                                                className="meal-cont-buttons-btn text-white">Традиционное
                                                            </button>
                                                            <button
                                                                className="meal-cont-buttons-btn2 text-white">Тонкое
                                                            </button>
                                                        </div>
                                                        <div className="meal-cont-buttons2 flex justify-center">
                                                            <button className="meal-cont-buttons2-btn3 text-white mt-4"
                                                                    onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                                за {el.price} c.
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}>
                                        </Route>
                                        <Route path="deserts" element={
                                            <div className="" key={el.id}>
                                                <h1 className="text-zinc-50">deserts</h1>
                                                <h3 className=" text-white">{el.title}</h3>
                                                <h3 className="text-white">{el.description}</h3>
                                                <button className="text-white"
                                                        onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                </button>
                                            </div>}>
                                        </Route>
                                        <Route path="hot" element={
                                            <div className="" key={el.id}>
                                                <h1 className="text-zinc-50">Hot</h1>
                                                <h3 className=" text-white">{el.title}</h3>
                                                <h3 className="text-white">{el.description}</h3>
                                                <button className="text-white"
                                                        onClick={() => dispatch(addToBasket(el))}>В Корзину
                                                </button>
                                            </div>}>
                                        </Route>
                                    </Routes>
                                ))
                            }
                        </div>
                        <div className="basis-1/3">
                            <div className="basket">
                                <h1 className="basket-title text-white pb-5 mx-2">Корзина</h1>
                                <div className="basket-buttons flex">
                                    <button className="basket-buttons-btn text-white m-3 ">Пообедать в
                                    </button>
                                    <button className="basket-buttons-btn text-white m-3 ">Идти</button>
                                    <button className="basket-buttons-btn text-white m-3 ">Доставка</button>
                                </div>
                                <h1 className="text-white ">Еда</h1>
                                <div
                                    className="basket-meal border-b border-solid border-gray-400  flex flex-row pt-8">
                                    <img src={MealImg} className="basket-img" alt=""/>
                                    <div className="basket-texts flex flex-col mx-2">
                                        <p className="basket-texts-title text-white">Японский суп</p>
                                        <p className="basket-texts-desc">450сом</p>
                                    </div>
                                    {/*<button className="basket-delete mx-32">*/}
                                    {/*    <AiOutlineDelete style={{color: "orange"}}*/}
                                    {/*                     className="basket-delete-icon"/>*/}
                                    {/*</button>*/}
                                </div>
                                <div className="basket-prices flex flex-row pt-8">
                                    <h1 className="basket-prices-title">Скидка</h1>
                                    <p className="basket-prices-desc text-white mx-44">-15%</p>
                                </div>
                                <div className="basket-prices flex flex-row pt-8">
                                    <h1 className="basket-prices-title">Скидка</h1>
                                    <p className="basket-prices-desc text-white mx-44">-15%</p>
                                </div>
                                <button className="basket-btn text-white mx-20 mt-20">Оформить заказ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;