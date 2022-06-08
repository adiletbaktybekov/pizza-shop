import React, {useEffect} from 'react';
import {addToBasket} from "../../Pages/Basket/Basket";
import {getPizza} from "../../../redux/action/Pizza";
import {useDispatch} from "react-redux";

const PizzaCard = ({el}) => {
    console.log(el)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPizza())
    }, [])
    return (
        <>
            <div className="meal">
                <div className="meal-asset">
                    <img src={el.image} className="meal-asset-img" alt="photo"/>
                </div>
                <h3 className="meal-title text-white">{el.name}</h3>
                <h3 className="meal-desc text-white">{el.description}</h3>
                <div className="meal-buttons2 flex justify-center">
                    <button className="meal-buttons2-btn3 text-white"
                            onClick={() => dispatch(addToBasket(el))}>В Корзину
                        за {el.price} c.
                    </button>
                </div>
            </div>
        </>
    );
};

export default PizzaCard;