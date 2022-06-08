import React from 'react';
import axios from "axios";
import {GET_PRODUCTS} from "../types/types";

export const About1 = () => {
    return (dispatch) => {
        axios(`https://motion-food.herokuapp.com/about-list/`)
            .then(({data}) => {
                console.log(data, "ABOUT")
                dispatch({payload: data.results})
            })
    }
}
