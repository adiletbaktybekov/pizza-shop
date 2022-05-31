import React from 'react';
import axios from "axios";
import {ADD_TO_BASKET, GET_PRODUCTS} from "./types/actionTypes";

export const getPizza = () => {
    return (dispatch) => {
        axios(`https://motion-food.herokuapp.com/pizza-list/`)
            .then(({data}) => {
                console.log(data, "PIZZA")
                dispatch({type: GET_PRODUCTS, ADD_TO_BASKET, payload: data.results})
            })
    }
}