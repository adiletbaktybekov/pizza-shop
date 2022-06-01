import React, {useEffect} from 'react';
import {addToBasket} from "../../redux/action/MenuActions";
import {useDispatch} from "react-redux";
import {getDrinks} from "../../redux/action/Drinks";

const DrinksCard = ({el}) => {
    console.log(el)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDrinks())
    }, [])
    return (
        <div>
            <div className="meal-cont">
                <div className="meal-cont-head flex flex-row">
                    <div className="meal-cont-head-news bg-red-500">
                        <h3 className="meal-cont-head-news-new text-white">New!</h3>
                    </div>
                    <img src={el.image} className="meal-img" alt="photo"/>
                </div>
                <h3 className="meal-cont-title text-white">{el.name}</h3>
                <h3 className="meal-cont-desc text-white">{el.description}</h3>
                {/*<div className="meal-cont-buttons flex justify-center">*/}
                {/*    <button*/}
                {/*        className="meal-cont-buttons-btn text-white">Традиционное*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        className="meal-cont-buttons-btn2 text-white">Тонкое*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div className="meal-cont-buttons2 flex justify-center">
                    <button className="meal-cont-buttons2-btn3 text-white"
                            onClick={() => dispatch(addToBasket(el))}>В Корзину
                        за {el.price} c.
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DrinksCard;