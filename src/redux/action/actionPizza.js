import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";
import {ADD_TO_BASKET} from "../types/actionTypes";

export  const getPizza = () =>{
        return(dispatch) => {
        axios(`https://motion-food.herokuapp.com/pizza-list/`)
            .then(({data})=> dispatch({type:ADD_TO_BASKET, payload:data}))
        }

}