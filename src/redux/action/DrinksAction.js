import axios from "axios";

export const getDrinks = () => {
    return (dispatch) => {
        axios.get(`https://motion.herokuapp.com/drinks-list/`)
            .then(({data}) => {
                console.log(data, "Drinks")
                dispatch({type: "GET_PRODUCTS", payload: data.results})
            })
    }
}