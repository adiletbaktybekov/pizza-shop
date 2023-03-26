import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {getFoods} from "../../redux/action/FoodAction";

const MenuCardsDrink = ({el}) => {
    const dispatch = useDispatch()
    const addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET", payload: item})
    }
    useEffect(() => {
        dispatch(getFoods())
    }, [])

    return (
        <div className="home-meals-meal flex flex-col w-[280px]  shadow-2xl p-[10px] mx-2 rounded-xl my-14"
             key={el.id}>
            <img src={el.image} className="rounded-t-xl" alt="photo"/>
            <div className="home-meals-meal-texts flex flex-col w-full p-[10px]">
                <h3 className="text-black mb-[10px] mt-[5px] text-[20px] text-center">{el.name}</h3>
                <p className=" mb-[10px] mt-[5px] text-[12px]">{el.description}</p>
            </div>
            <div className="flex justify-around items-center mt-[15px]">
                <p>{el.price}</p>
                <button
                    className="text-white p-[5px] bg-orange-500 hover:bg-[#f4eade] border-2 hover:text-orange-500 border-orange-500 rounded rounded-2xl"
                    onClick={() => addToBasket(el)}>
                    В Корзину
                </button>
            </div>
        </div>
    );
};

export default MenuCardsDrink;