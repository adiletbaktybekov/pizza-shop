import {ADD_TO_BASKET, GET_PRODUCTS} from "../types/actionTypes";
import axios from "axios";

export const addToBasket = (item) => {
    return {type: "ADD_TO_BASKET", payload:item}
}

export const getProducts = ()=> {
    return (dispatch) => {
        axios(`https://motion-food.herokuapp.com/pizza-list/`)
            .then(({data}) =>{
                console.log(data, "pizza")
                dispatch({type:GET_PRODUCTS, payload: data.results})
            })
        axios(`https://motion-food.herokuapp.com/food-list/`)
            .then(({data}) =>{
                console.log(data, "food")
                dispatch({type:GET_PRODUCTS, payload: data.results})
            })
        axios(`https://motion-food.herokuapp.com/drinks-list/`)
            .then(({data}) =>{
                console.log(data, "drink")
                dispatch({type:GET_PRODUCTS, payload: data.results})
            })
    }
}