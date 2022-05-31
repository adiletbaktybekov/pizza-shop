import React from 'react';
import axios from "axios";
import {GET_PRODUCTS} from "./types/actionTypes";

export const BakeRolls = () => {
    return (dispatch) => {
        axios(`https://motion-food.herokuapp.com/pizza-list/`)
            .then(({data}) => {
                console.log(data, "bakeRolls")
                dispatch({type: GET_PRODUCTS, payload: data.results})
            });
    };
}