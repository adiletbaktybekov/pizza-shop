import React from 'react';
import axios from "axios";
import {ADD_TO_BASKET, GET_PRODUCTS} from "./types/actionTypes";

export const getDrinks = () => {
    return (dispatch) => {
        axios(`https://motion-food.herokuapp.com/drinks-list/`)
            .then(({data}) => {
                console.log(data, "DRINKS")
                dispatch({type: GET_PRODUCTS, ADD_TO_BASKET, payload: data.results})
            });
    };
}