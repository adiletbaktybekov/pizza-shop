import React, {useEffect} from 'react';
import {addToBasket} from "../../Pages/Basket/Basket";
import {useDispatch} from "react-redux";
import MealImage from '../../../../../pizza-shop2/src/assets/img/meal52345.png'
// import {getFoods} from "../../../redux/action/Foods";

const PizzaCard = ({el}) => {
    console.log(el)
    const dispatch = useDispatch()
    // useEffect(() =/> {
        // dispatch(getFoods())
    // }, [])
    return (
        <>
            <div className="meal">
                <div className="meal-asset">
                    <img className="meal-asset-img" alt="photo"/>
                </div>
                <h3 className="meal-title text-white">BOK</h3>
                <h3 className="meal-desc text-white">ADAMDYN BOKU</h3>
                <div className="meal-buttons2 flex justify-center">
                    <button className="meal-buttons2-btn3 text-white"
                            onClick={() => dispatch(addToBasket(el))}>В Корзину
                        за  c.
                    </button>
                </div>
            </div>
        </>
    );
};

export default PizzaCard;