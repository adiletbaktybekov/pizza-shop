import React, {useEffect} from 'react';
import {ImCross} from "react-icons/im";
import {useDispatch, useSelector} from "react-redux";
import img from '../../assets/img/mainSale.png'
import {BiMinusCircle, BiPlusCircle} from "react-icons/bi";

const BasketCard = () => {
    const basket = useSelector(s => s.basket)
    const dispatch = useDispatch()
    const totalSum = basket.reduce((acc, el) => {
        return el.quantity * el.price + acc
    }, 0)

    return (
        <div className="basket-basket w-[55%] p-[15px] text-black shadow-2xl rounded-xl">
            <div className="flex flex-col">
                <div className="mb-2">
                    <h1 className="text-2xl text-orange-500 font-bold">Корзина</h1>
                </div>
                {
                    basket.map((el, idx) => (
                        <div className=" bg-[#DFDFDF] p-[10px] rounded border-2 border-dashed border-gray-500 my-2">
                            <div className="flex flex-col">
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => dispatch({
                                            type: "REMOVE_FROM_BASKET",
                                            payload: el.id

                                        })}
                                        className="">
                                        <ImCross/>
                                    </button>
                                </div>
                                <div className="flex justify-between flex-wrap items-center ">
                                    <div className="mb-2">
                                        <img src={el.img} className="rounded-full w-[75px] h-[75px]" alt=""/>
                                    </div>
                                    <div className="mb-2">
                                        <h1 className="basket-meal-title text-xl mx-2">{el.name}</h1>
                                    </div>
                                    <div className="text-xl">
                                        <div className="flex flex-row">
                                            <button className=""
                                                    onClick={() => dispatch({
                                                        type: "DECREASE_QUANTITY",
                                                        payload: idx
                                                    })}>
                                                <BiMinusCircle className="bg-orange-500 text-white rounded-full "/>
                                            </button>
                                            <p className="mx-2">{el.quantity}</p>
                                            <button className=""
                                                    onClick={() => dispatch({
                                                        type: "ADD_TO_BASKET",
                                                        payload: el
                                                    })}>
                                                <BiPlusCircle className="bg-orange-500 text-white rounded-full "/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="">{el.price * el.quantity} руб.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h1 className="flex justify-end"> Итого: {totalSum} </h1>
        </div>
    );
};

export default BasketCard;