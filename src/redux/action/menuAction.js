import React from 'react';
import axios from "axios";

export const getPizza = () => {
    return (dispatch) => {
        axios.get(`https://motion.herokuapp.com/pizza-list/`)
            .then(({data}) => {
                console.log(data, "PIZZA")
                dispatch({type: "GET_PRODUCTS", payload: data.results})
            })
    }
}