import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {BsFillTrashFill} from "react-icons/bs";
import {ImCross} from "react-icons/im"
import {getPizza} from "../../../redux/action/Pizza";
import {getDrinks} from "../../../redux/action/Drinks";
import {ADD_TO_BASKET} from "../../../redux/types/types";
import {Link} from "react-router-dom";
import empty from '../../../assets/img/pngfind.com-cart-png-2727925.png'
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
        <section id="basket" className="py-[150px]">
            <div className="container">
                {
                    basket.length === 0 ?
                        <div className="flex flex-col items-center">
                            <img src={empty} className="w-[50%] mb-3" alt=""/>
                            <h1 className="text-black text-xl mb-3">Корзина пустая!</h1>
                            <Link to="/">
                                <button
                                    className="px-[10px] py-[5px] bg-orange-500 rounded text-white">Вернуться в меню
                                </button>
                            </Link>
                        </div>
                        :
                        <div className="">
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