import React, {useEffect} from 'react';
import Slider from "react-slick";
import saleCola from '../../../assets/img/sale.png'
import saleHit from '../../../assets/img/hitSushiSale.png'
import saleDost from '../../../assets/img/dostavkaSale.png'
import saleMain from '../../../assets/img/mainSale.png'
import {useSelector} from "react-redux";
import MenuTabs from "../../Tabs/MenuTabs";
import MenuCards from "../../Cards/MenuCards";

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
                        <MenuTabs/>
                        <div className="">
                            <div className="home-meals flex flex-wrap flex-row justify-between">
                                {
                                    catalog.map(el => (
                                       <MenuCards el={el}/>
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