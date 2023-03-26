import {useDispatch} from "react-redux";
import React from "react";
import imgCola from '../../assets/img/napitok-crazy-brothers-coca-cola-05-l-gazirovannyj-120-1.jpeg'
import imgPepsi from '../../assets/img/Без названия.jpeg'
import imgFan from '../../assets/img/Без названия (1).jpeg'
import imgBon from '../../assets/img/bon.jpeg'

const MenuCardsDrink = () => {
    const dispatch = useDispatch()
    const addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET", payload: item})
    }
    return (
        <div className="flex flex-row flex-wrap justify-between">
            <div className="home-meals-meal flex flex-col w-[280px]  shadow-2xl p-[10px] mx-4 rounded-xl my-14">
                <img src={imgCola} className="rounded-t-xl" alt="photo"/>
                <div className="home-meals-meal-texts flex flex-col w-full p-[10px]">
                    <h3 className="text-black mb-[10px] mt-[5px] text-[20px] text-center">Coca Cola 0,5</h3>
                </div>
                <div className="flex justify-around items-center mt-[15px]">
                    <p>40 руб</p>
                    <button
                        className="text-white p-[5px] bg-orange-500 hover:bg-[#f4eade] border-2 hover:text-orange-500 border-orange-500 rounded rounded-2xl"
                        onClick={() => addToBasket}>
                        В Корзину
                    </button>
                </div>
            </div>
            <div className="home-meals-meal flex flex-col w-[280px]  shadow-2xl p-[10px] mx-4 rounded-xl my-14">
                <img src={imgFan} className="rounded-t-xl" alt="photo"/>
                <div className="home-meals-meal-texts flex flex-col w-full p-[10px]">
                    <h3 className="text-black mb-[10px] mt-[5px] text-[20px] text-center">Coca Cola 0,5</h3>
                </div>
                <div className="flex justify-around items-center mt-[15px]">
                    <p>40 руб</p>
                    <button
                        className="text-white p-[5px] bg-orange-500 hover:bg-[#f4eade] border-2 hover:text-orange-500 border-orange-500 rounded rounded-2xl"
                        onClick={() => addToBasket}>
                        В Корзину
                    </button>
                </div>
            </div>
            <div className="home-meals-meal flex flex-col w-[280px]  shadow-2xl p-[10px] mx-4 rounded-xl my-14">
                <img src={imgPepsi} className="rounded-t-xl" alt="photo"/>
                <div className="home-meals-meal-texts flex flex-col w-full p-[10px]">
                    <h3 className="text-black mb-[10px] mt-[5px] text-[20px] text-center">Pepsi 0,5</h3>
                </div>
                <div className="flex justify-around items-center mt-[15px]">
                    <p>45 руб</p>
                    <button
                        className="text-white p-[5px] bg-orange-500 hover:bg-[#f4eade] border-2 hover:text-orange-500 border-orange-500 rounded rounded-2xl"
                        onClick={() => addToBasket}>
                        В Корзину
                    </button>
                </div>
            </div>
            <div className="home-meals-meal flex flex-col w-[280px]  shadow-2xl p-[10px] mx-4 rounded-xl my-14">
                <img src={imgBon} className="rounded-t-xl" alt="photo"/>
                <div className="home-meals-meal-texts flex flex-col w-full p-[10px]">
                    <h3 className="text-black mb-[10px] mt-[5px] text-[20px] text-center">Bon Aqua 0,5</h3>
                </div>
                <div className="flex justify-around items-center mt-[15px]">
                    <p>30 руб</p>
                    <button
                        className="text-white p-[5px] bg-orange-500 hover:bg-[#f4eade] border-2 hover:text-orange-500 border-orange-500 rounded rounded-2xl"
                        onClick={() => addToBasket}>
                        В Корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuCardsDrink;
