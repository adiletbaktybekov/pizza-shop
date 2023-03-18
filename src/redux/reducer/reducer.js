import imgMeal from '../../assets/img/hitSushiSale.png'
// import {
//     DECREASE_QUANTITY,
//     ADD_TO_BASKET,
//     REMOVE_FROM_BASKET,
//     GET_PRODUCTS,
//     GET_SORTED_PRODUCTS,
//     GET_SINGLE_PRODUCT
// } from "../types/types";
//

const initialState = {
    catalog: [
        {
            id:1,
            name: "с рыбой",
            description:'Рыба, Рис, кетчуп',
            option:{
                big:30,
                mini:10,
            },
            price: 44,
            img: 'https://ru.foodsoul.pro/uploads/branches/9570/images/items/medium/981cd16f6893b463f292ae3624282656.jpg?v1673345686',
        },
        {
            id:2,
            name:"пицца с рыбой",
            description:'Рыба, Рис, кетчуп',
            option:{
                big:30,
                mini:10,
            },
            price: 78,
            img:'https://ru.foodsoul.pro/uploads/branches/9570/images/items/medium/41c35f8abf8d57f6a08b089032dee60e.jpg?v1673345517',
        },
        {
            id:3,
            name:"Сушбек Сушбек Сушбек Сушбек",
            description:'Рыба, Рис, кетчуп',
            price: 7,
            option:{
                big:30,
                mini:10,
            },
            img: 'https://ru.foodsoul.pro/uploads/branches/9570/images/items/medium/981cd16f6893b463f292ae3624282656.jpg?v1673345686',
        },
        {
            id:4,
            name:"Суши с сыром",
            description:'Рыба, Рис, кетчуп',
            price: 45,
            option:{
                big:30,
                mini:10,
            },
            img: 'https://ru.foodsoul.pro/uploads/branches/9570/images/items/medium/981cd16f6893b463f292ae3624282656.jpg?v1673345686',
        },

    ],
    // singleProduct: [],
    basket: [],
    // products: [],
    // favorites:[],
}


export const reducer = (state = initialState, action) => {
    console.log('payload', action.payload)
    switch (action.type) {
        case "ADD_TO_BASKET" :
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

        case "DECREASE_QUANTITY":
            if (state.basket[action.payload].quantity > 1) {
                return {
                    ...state, basket: state.basket.map((el, idx) => idx === action.payload ?
                        {...el, quantity: el.quantity - 1} : el
                    )
                }
            }

        case "REMOVE_FROM_BASKET":
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}
        //
        //
        // case GET_SINGLE_PRODUCT:
        //     return {...state, singleProduct: action.payload}
        //
        // case GET_PRODUCTS :
        //     return {...state, catalog: action.payload}
        //
        //
        // case "ADD_TO_BASKET":
        //     console.log("payload:", action.payload)
        //     const findProduct = state.basket.find(el => el.id === action.payload.id)
        //
        //     if (findProduct) {
        //         return {
        //             ...state, basket: state.basket.map(el => el.id === action.payload.id ?
        //                 {...el, quantity: el.quantity + 1} : el
        //             )
        //         }
        //     }
        //
        //     return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
        //
        //     return {...state, basket: [...state.basket, action.payload]}
        //
        //
        // case DECREASE_QUANTITY:
        //     if (state.basket[action.payload].quantity > 1) {
        //         return {
        //             ...state, basket: state.basket.map((el, idx) => idx === action.payload ?
        //                 {...el, quantity: el.quantity - 1} : el
        //             )
        //         }
        //     }
        // case REMOVE_FROM_BASKET:
        //     return {...state, basket: state.basket.filter(el => el.id !== action.payload)}
        //
        // case "GET_SORTED_PRODUCTS":
        //     const sortedProducts = [...state.catalog]
        //     if (action.payload === "sale") {
        //         return {
        //             ...state, catalog: sortedProducts.sort((a, b) => {
        //                 return a.price - b.price
        //             })
        //         }
        //     } else if (action.payload === "alphabet") {
        //         return {
        //             ...state, catalog: sortedProducts.sort((a, b) =>
        //                 a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
        //         }
        //     }
        //     return {...state, catalog: sortedProducts}
        default :
            return state
    }
}