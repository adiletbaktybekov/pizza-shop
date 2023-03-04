import React, {useEffect} from 'react';
import img from "../../../assets/img/headerLogo.png";
import {ImCross} from "react-icons/im";
import {useDispatch, useSelector} from "react-redux";
import {getPizza} from "../../../redux/action/Pizza";
import {getDrinks} from "../../../redux/action/Drinks";

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
        <div className="basket-basket w-[55%] p-[15px] bg-black text-white rounded-xl">
            <div className="flex flex-col">
                <div className="border-b flex justify-between border-gray-500">
                    <h1>Корзина</h1>
                </div>
                {/*{*/}
                {/*    basket.map((el, idx) => (*/}
                <div
                    className="flex justify-between flex-wrap items-center border-b border-dashed border-gray-500 my-2">
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
    );
};

export default BasketsBasket;