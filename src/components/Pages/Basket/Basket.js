import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {BsFillTrashFill} from "react-icons/bs";
import {ImCross} from "react-icons/im"
import {getPizza} from "../../../redux/action/Pizza";
import {getDrinks} from "../../../redux/action/Drinks";
import {ADD_TO_BASKET} from "../../../redux/types/types";
import {Link} from "react-router-dom";
import img from '../../../assets/img/headerLogo.png'
import Tabs from "./Tabs/TabsBasket";
import BasketsBasket from "./BasketsBasket";

export const addToBasket = (item) => {
    return {type: "ADD_TO_BASKET", payload: item}
}
const Basket = () => {
    const basket = useSelector(s => s.basket)
    // console.log(basket)
    // const dispatch = useDispatch()
    // const totalSum = basket.reduce((acc, el) => {
    //     return el.quantity * el.price + acc
    // }, 0)
    // useEffect(() => {
    //     dispatch(getPizza())
    // }, [])
    //
    // useEffect(() => {
    //     dispatch(getDrinks())
    // }, [])
    return (
        <section id="basket" className="">
            <div className="container">
                {
                    basket.length === 0 ?
                        <div className="">
                            <p className="text-black">Корзина пустая!</p>
                            <Link to="/">
                                <button
                                    className="w-[100px] h-[30px] bg-orange-500 rounded-2xl text-[20px] text-white">Назад
                                </button>
                            </Link>
                        </div>
                        :
                        <div className="py-[150px]">
                        <div className="flex flex-row justify-between flex-wrap">
                                <BasketsBasket/>
                                <div className="basket-order text-black p-[15px] w-[40%] shadow-2xl">
                                    <h1 className="text-center font-bold text-2xl  ">Оформление заказа</h1>
                                    <div className="">
                                        <Tabs>
                                            <div label="Доставка" className="">
                                                <h1 className="">Контактные
                                                    данные</h1>
                                                <input
                                                    className="rounded w-full py-2 px-3 text-black border border-gray-500 outline-none my-2"
                                                    type="text" placeholder="Фио*"/>
                                                <input
                                                    className="rounded w-full text-black py-2 px-3 border border-gray-500 outline-none my-2"
                                                    type="tel" placeholder="Телефон*" />
                                                <h1 className="">Укажите адрес</h1>
                                                <input
                                                    className="rounded w-full text-black py-2 px-3 border border-gray-500 outline-none my-2"
                                                    type="tel" placeholder="Адрес" />
                                                <button className="px-[10px] py-[5px] bg-orange-500 text-white rounded">Отправить</button>
                                            </div>
                                            <div label="Самовызов">
                                                <input type="text" placeholder="Напишите время когда вы заберете"
                                                       className="rounded w-full text-black py-2 px-3 outline-none my-2"/>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default Basket;