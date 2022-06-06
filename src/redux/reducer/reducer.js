import {
    DECREASE_QUANTITY,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    GET_PRODUCTS,
    GET_SORTED_PRODUCTS,
    GET_SINGLE_PRODUCT
} from "../action/types/actionTypes";


const initialState = {
    catalog: [],
    singleProduct: [],
    basket: [],
    products: [],
    about: [],
}


export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_SINGLE_PRODUCT:
            return {...state, singleProduct: action.payload}

        case GET_PRODUCTS :
            return {...state, catalog: action.payload}


        case "ADD_TO_BASKET":
            console.log("payload:", action.payload)
            const findProduct = state.basket.find(el => el.id === action.payload.id)

            if (findProduct) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el
                    )
                }
            }

            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}

            return {...state, basket: [...state.basket, action.payload]}


        case DECREASE_QUANTITY:
            if (state.basket[action.payload].quantity > 1) {
                return {
                    ...state, basket: state.basket.map((el, idx) => idx === action.payload ?
                        {...el, quantity: el.quantity - 1} : el
                    )
                }
            }
        case REMOVE_FROM_BASKET:
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}

        case "GET_SORTED_PRODUCTS":
            const sortedProducts = [...state.catalog]
            if (action.payload === "sale") {
                return {
                    ...state, catalog: sortedProducts.sort((a, b) => {
                        return a.price - b.price
                    })
                }
            } else if (action.payload === "alphabet") {
                return {
                    ...state, catalog: sortedProducts.sort((a, b) =>
                        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                }
            }
            return {...state, catalog: sortedProducts}
        default:
            return state
    }
}