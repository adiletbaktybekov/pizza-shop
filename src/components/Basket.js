import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {BsFillTrashFill} from "react-icons/bs";
import {ImCross} from "react-icons/im"
import MealImg from '../assets/img/Image 2.svg';
import {getProducts} from "../redux/action/MenuActions";

const Basket = () => {
    const basket = useSelector(s => s.basket)
    console.log(basket)
    const dispatch = useDispatch()
    const totalSum = basket.reduce((acc, el) => {
        return el.quantity * el.price + acc
    }, 0)
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <section id="basket">
            <div className="container">
                <div className="basket py-8">
                    <div className="basket-table py-5 overflow-x-auto">
                        <table className="w-full text-sm text-white">
                            <thead
                                className="">
                            <tr className=" basket-table-tr border-b border-gray-400 flex justify-around">
                                <th scope="col" className="basket-table-tr-basket">
                                    Корзина
                                </th>
                                <th scope="col" className="basket-table-tr-delete">
                                    <button
                                        onClick={() => []}
                                    >
                                        Очистить все<BsFillTrashFill style={{width: "18px", height: "20px"}}
                                                                     className=""/>
                                    </button>
                                </th>
                            </tr>
                            </thead>
                            {
                                basket.map((el, idx) => (
                                    <tbody>
                                    <tr className="border-b flex justify-between border-gray-500">
                                        <th scope="row"
                                            className="py-4 flex flex-row text-white">
                                            <td>{idx + 1}</td>
                                            <img src={MealImg} className="basket-table-td-img" alt=""/>
                                            <div className="basket-table-th flex flex-col align-middle">
                                                <h3 className="basket-table-th-mealTitle">{el.name}</h3>
                                            </div>
                                        </th>
                                        <td className="py-7">
                                            <button className="basket-table-btn text-white"
                                                    onClick={() => dispatch({
                                                        type: "DECREASE_QUANTITY",
                                                        payload: idx
                                                    })}>
                                                -
                                            </button>
                                            {el.quantity}
                                            <button className="basket-table-btn text-white"
                                                    onClick={() => dispatch({
                                                        type: "ADD_TO_BASKET",
                                                        payload: el
                                                    })}>
                                                +
                                            </button>
                                        </td>
                                        <td className="py-7">
                                            {el.price * el.quantity}
                                        </td>
                                        <td className="py-3 mr-3">
                                            <button
                                                onClick={() => dispatch({
                                                    type: "REMOVE_FROM_BASKET",
                                                    payload: el.id
                                                })}>
                                                <ImCross/>
                                            </button>
                                        </td>
                                    </tr>

                                    </tbody>
                                ))
                            }
                            <h1 className="text-center my-4"> Итого: {totalSum} </h1>
                        </table>
                    </div>
                    <div className="basket-buttons py-5">
                        <button className="basket-buttons-btn text-white m-5">Доставка</button>
                        <button className="basket-buttons-btn2 text-white m-5">Самовызов</button>
                    </div>
                    <div className="basket-inputs flex flex-col columns-3xs">
                        <input type="text" className="basket-inputs-input"/>
                        <input type="text" className="basket-inputs-input"/>
                        <input type="text" className="basket-inputs-input"/>
                        <input type="text" className="basket-inputs-input"/>
                        <input type="text" className="basket-inputs-input"/>
                        <input type="text" className="basket-inputs-input"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;