import { FETCH_CART_ITEMS } from "./Actions";

const initialState = {
    cartItems: [],
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART_ITEMS:
            return { ...state, cartItems: action.payload };
        default:
            return state;
    }
}