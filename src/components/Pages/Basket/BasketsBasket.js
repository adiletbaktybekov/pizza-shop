import React, {useEffect} from 'react';
import {ImCross} from "react-icons/im";
import {useDispatch, useSelector} from "react-redux";
import {getPizza} from "../../../redux/action/Pizza";
import {getDrinks} from "../../../redux/action/Drinks";
import img  from '../../../assets/img/mainSale.png'
import {BiMinusCircle, BiPlusCircle} from "react-icons/bi";

const BasketsBasket = () => {
    const basket = useSelector(s => s.basket)
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
        <div className="basket-basket w-[55%] p-[15px] text-black shadow-2xl rounded-xl">
            <div className="flex flex-col">
                <div className="mb-2">
                    <h1 className="text-2xl text-orange-500 font-bold">Корзина</h1>
                </div>
                {/*{*/}
                {/*    basket.map((el, idx) => (*/}
                <div className=" bg-[#DFDFDF] p-[10px] rounded border-2 border-dashed border-gray-500 my-2">
                    <div className="flex flex-col">
                        <div className="flex justify-end">
                            <button
                                onClick={() => dispatch({
                                    type: "REMOVE_FROM_BASKET",
                                    // payload: el.id

                                })}
                                className="">
                                <ImCross/>
                            </button>
                        </div>
                        <div className="flex justify-between flex-wrap items-center ">
                            <div className="mb-2">
                                {/*<img src={el.image} className="basket-table-td-img ml-3" alt=""/>*/}
                                <img src={img} className="" alt=""/>
                            </div>
                            <div className="mb-2">
                                <h1 className="basket-meal-title text-xl mx-2 w-full">Калифорния запеченная</h1>
                                {/*<h3 className="basket-table-th-mealTitle pt-5 pl-3">{el.name}</h3>*/}
                            </div>
                            <div className="text-xl">
                                <div className="flex flex-row">
                                    <button className=""
                                            onClick={() => dispatch({
                                                type: "DECREASE_QUANTITY",
                                                // payload: idx
                                            })}>
                                        <BiMinusCircle className="bg-orange-500 text-white rounded-full "/>
                                    </button>
                                    <p className="mx-2">1</p>
                                    {/*<p className="font-bold ml-2">{el.quantity}</p>*/}
                                    <button className=""
                                            onClick={() => dispatch({
                                                type: "ADD_TO_BASKET",
                                                // payload: el
                                            })}>
                                        <BiPlusCircle className="bg-orange-500 text-white rounded-full "/>
                                    </button>
                                </div>
                            </div>
                            <div className="">
                                {/*<p className="font-bold pt-5 text-xl">{el.price * el.quantity}</p>*/}
                                <p className="text-xl">223 руб.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*))*/}
                {/*}*/}
            </div>
            <h1 className="text-white flex justify-end"> Итого: {totalSum} </h1>
        </div>
    );
};

export default BasketsBasket;