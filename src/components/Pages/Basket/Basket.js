import React, {useEffect} from "react"
import {useSelector} from "react-redux";
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

    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <section id="basket" className="py-[150px]">
            <div className="container">
                {
                    basket.length === 0 ?
                        <div className="flex flex-col items-center">
                            <img src={empty} className="w-[70%] mb-3" alt=""/>
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
                                <div className="basket-order text-black p-[15px] w-[40%] h-full shadow-2xl">
                                    <h1 className="text-center font-bold text-2xl  ">Оформление заказа</h1>
                                    <div className="">
                                        <Tabs>
                                            <div label="Доставка" className="">
                                                <h1 className="mt-3">Контактные данные</h1>
                                                <input
                                                    className="rounded w-full py-2 px-3 text-black border border-gray-500 outline-none my-2"
                                                    type="text" placeholder="Ваше имя"/>
                                                <input className="rounded w-full text-black py-2 px-3 border border-gray-500 outline-none my-2"
                                                    type="tel" placeholder="Номер телефона" />
                                                <h1 className="">Укажите адрес</h1>
                                                <input
                                                    className="rounded w-full text-black py-2 px-3 border border-gray-500 outline-none my-2"
                                                    type="tel" placeholder="Адрес" />
                                                <p className="text-sm mb-2">Бесплатная доставка от 1500 руб. Оплата производится наличными, или картой курьеру при получении заказа.</p>
                                                <button className="px-[10px] py-[5px] bg-orange-500 text-white rounded">Отправить</button>
                                            </div>
                                            <div label="Самовызов">
                                                <h1 className="mt-3">Контактные данные</h1>
                                                <input
                                                    className="rounded w-full py-2 px-3 text-black border border-gray-500 outline-none my-2"
                                                    type="text" placeholder="Ваше имя"/>
                                                <input className="rounded w-full text-black py-2 px-3 border border-gray-500 outline-none my-2"
                                                       type="tel" placeholder="Номер телефона" />
                                                <h1 className="">Напишите время когда вы заберете</h1>
                                                <input type="text" placeholder="Время"
                                                       className="rounded w-full text-black py-2 px-3 border border-gray-500 outline-none my-2"/>
                                                <button className="px-[10px] py-[5px] bg-orange-500 text-white rounded">Отправить</button>
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