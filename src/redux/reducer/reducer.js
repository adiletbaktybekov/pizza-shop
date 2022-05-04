import {
    DECREASE_QUANTITY,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    GET_PRODUCTS,
    GET_SORTED_PRODUCTS,
    GET_SINGLE_PRODUCT
} from "../types/actionTypes";

const initialState = {
    catalog: [
        // {
        //     id: 1,
        //     description: "Готовить классическую итальянскую",
        //     image: "https://motion-food.herokuapp.com/media/image/pizza/Unknown.jpeg",
        //     name: "Пицца Пепперони",
        //     price: 580,
        // },
        // {
        //     id: 2,
        //     description: "С колбасой, очень вкусно",
        //     image: "https://motion-food.herokuapp.com/media/image/pizza/photo_2022-04-12_12-21-21_5xKnHAS.jpg",
        //     name: "Маргарита",
        //     price: 400,
        // },

    ],
    singleProduct: [],
    basket: [],
    products: []
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

        case GET_SORTED_PRODUCTS:
            const sortedProducts = [...state.catalog]
            if (action.payload === "highest") {
                return {
                    ...state, catalog: sortedProducts.sort((a, b) => {
                        return a.price - b.price
                    })
                }
            } else if (action.payload === "lowest") {
                return {
                    ...state, catalog: sortedProducts.sort((a, b) => {
                        return b.price - a.price
                    })
                }
            } else if (action.payload === "a-z") {
                return {
                    ...state, catalog: sortedProducts.sort((a, b) =>
                        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                }
            } else if (action.payload === "z-a") {
                return {
                    ...state, catalog: sortedProducts.sort((a, b) =>
                        a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1)
                }
            }
            return {...state, catalog: sortedProducts}

        default:
            return state
    }
}