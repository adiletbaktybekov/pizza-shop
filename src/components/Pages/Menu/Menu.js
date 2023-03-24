import React, {useEffect} from 'react';
import Slider from "react-slick";
import saleCola from '../../../assets/img/sale.png'
import saleHit from '../../../assets/img/hitSushiSale.png'
import saleDost from '../../../assets/img/dostavkaSale.png'
import saleMain from '../../../assets/img/mainSale.png'
import {useDispatch, useSelector} from "react-redux";
import MenuCategoryTabs from "../../Tabs/MenuCategoryTabs";
import MenuCards from "../../Cards/MenuCards";
import {getPizza} from "../../../redux/action/menuAction";
import {Route, Routes} from "react-router-dom";
import DrinkCard from "../../Cards/DrinkCard";

const Menu = () => {
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
    useEffect(() => {
        dispatch(getPizza())
    }, [])

    return (
        <section id="home">
            <div className="homeGlobal bg-white pt-[200px]">
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
                <div className="container">
                    <div className="home">
                        <MenuCategoryTabs/>
                        <div className="">
                            <div className="home-meals flex flex-wrap flex-row justify-between">
                                {
                                    catalog.map(el => (
                                        <Routes>
                                            <Route path="" element={
                                                <MenuCards el={el} key={el.id}/>
                                            }/>
                                            <Route path="/drinks" element={
                                                <DrinkCard el={el} key={el.id}/>
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

export default Menu;