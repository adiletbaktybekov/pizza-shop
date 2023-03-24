const initialState = {
    catalog: [],
    basket: [],
}


export const reducer = (state = initialState, action) => {
    console.log('payload', action.payload)
    switch (action.type) {
        case "GET_PRODUCTS":
            return {...state, catalog: action.payload}

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

        default :
            return state
    }
}