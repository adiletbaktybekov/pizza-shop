import React from 'react';
import axios from "axios";
import {ADD_TO_BASKET, GET_PRODUCTS} from "../types/types";

export const getFoods = () => {
    return (dispatch) => {
        axios(`https://motion-food.herokuapp.com/food-list/`)
            .then(({data}) => {
                console.log(data, "DRINKS")
                dispatch({type: GET_PRODUCTS, ADD_TO_BASKET, payload: data.results})
            });
    };
}