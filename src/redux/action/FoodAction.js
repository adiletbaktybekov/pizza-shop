import axios from "axios";

export const getFoods = () => {
    return (dispatch) => {
        axios.get(`https://motion.herokuapp.com/food-list/`)
            .then(({data}) => {
                console.log(data, "Foods")
                dispatch({type: "GET_PRODUCTS", payload: data.results})
            })
    }
}