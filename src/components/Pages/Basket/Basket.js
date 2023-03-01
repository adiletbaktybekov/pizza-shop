import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {BsFillTrashFill} from "react-icons/bs";
import {ImCross} from "react-icons/im"
import {getPizza} from "../../../redux/action/Pizza";
import {getDrinks} from "../../../redux/action/Drinks";
import {ADD_TO_BASKET} from "../../../redux/types/types";
import {Link} from "react-router-dom";
// import {API} from "../../../API/API";
import img from '../../../assets/img/headerLogo.png'
import Tabs from "../../Tabs/TabsBasket";

export const addToBasket = (item) => {
    return {type: "ADD_TO_BASKET", payload: item}
}
const Basket = () => {
    const basket = useSelector(s => s.basket)
    console.log(basket)

    // const {register, handleSubmit, formState: {errors}} = useForm();
    // const onSubmit = data => {
    //     API.post('contact/', data)
    //         .then(response => {
    //             alert("ok")
    //             console.log(response)
    //         }).catch(e => {
    //         console.log(e)
    //         console.log(data)
    //     })
    //     console.log(data)
    // };
    // console.log(el, "Backend ЗАПРОС")

    //
    const dispatch = useDispatch()
    const totalSum = basket.reduce((acc, el) => {
        return el.quantity * el.price + acc
    }, 0)
    useEffect(() => {
        dispatch(getPizza())
    }, [])

    useEffect(() => {
        dispatch(getDrinks())
    }, [])
    return (
        <section id="basket">
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
                        <div className="my-[100px] flex flex-row justify-between flex-wrap">
                            <div className="basket-basket w-[55%] p-[15px] bg-black text-white rounded-xl">
                                  <div className="flex flex-col">
                                        <div className="border-b flex justify-between border-gray-500">
                                            <h1>Корзина</h1>
                                        </div>
                                    {/*{*/}
                                    {/*    basket.map((el, idx) => (*/}
                                    <div className="flex justify-between flex-wrap items-center border-b border-dashed border-gray-500 my-2">
                                        <div className="">
                                            {/*<img src={el.image} className="basket-table-td-img ml-3" alt=""/>*/}
                                            <img src={img} className="" alt=""/>
                                        </div>
                                        <div className="">
                                            <h3 className="">namenamename</h3>
                                            {/*<h3 className="basket-table-th-mealTitle pt-5 pl-3">{el.name}</h3>*/}
                                        </div>
                                        <div className="">
                                            <div className="flex flex-row">
                                                <button className=""
                                                        onClick={() => dispatch({
                                                            type: "DECREASE_QUANTITY",
                                                            // payload: idx
                                                        })}>
                                                    -
                                                </button>
                                                <p className="mx-2">1</p>
                                                {/*<p className="font-bold ml-2">{el.quantity}</p>*/}
                                                <button className=""
                                                        onClick={() => dispatch({
                                                            type: "ADD_TO_BASKET",
                                                            // payload: el
                                                        })}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="">
                                            {/*<p className="font-bold pt-5 text-xl">{el.price * el.quantity}</p>*/}
                                            <p className="">price</p>
                                        </div>
                                        <div className=" ">
                                            <button
                                                onClick={() => dispatch({
                                                    type: "REMOVE_FROM_BASKET",
                                                    // payload: el.id

                                                })}
                                                className="">
                                                <ImCross/>
                                            </button>
                                        </div>
                                    </div>
                                    {/*))*/}
                                    {/*}*/}
                                </div>
                                <h1 className="text-white flex justify-end"> Итого: {totalSum} </h1>
                            </div>
                            <div className="basket-order text-white p-[15px] w-[40%] bg-orange-900">
                                <h1 className="text-center font-bold text-2xl text-white ">Оформление заказа</h1>
                                <div className="">
                                    <Tabs>
                                        <div label="Доставка" className="">
                                            <h1 className="">Контактные
                                                данные</h1>
                                            <input
                                                className="rounded w-full py-2 px-3 text-black outline-none my-2"
                                                type="text" placeholder="Фио*"/>
                                            <input
                                                className="rounded w-full text-black py-2 px-3 outline-none my-2"
                                                type="tel" placeholder="Телефон*" />
                                            <h1 className="">Укажите адрес</h1>
                                            <input
                                                className="rounded w-full text-black py-2 px-3 outline-none my-2"
                                                type="tel" placeholder="Адрес" />
                                            <button>Отправить</button>
                                        </div>
                                        <div label="Самовызов">
                                            <input type="text" placeholder="Напишите время когда вы заберете"
                                                   className="rounded w-full text-black py-2 px-3 outline-none my-2"/>
                                        </div>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default Basket;