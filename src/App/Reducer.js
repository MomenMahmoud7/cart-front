import {
    FETCH_PRODUCTS,
    FETCH_ADVERTISEMENTS,
    FETCH_USERDATA,
} from './Actions';

const initialState = {
    products: [],
    advertisements: [],
    userData:{},
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, products: action.payload };
        case FETCH_ADVERTISEMENTS:
            return { ...state, advertisements: action.payload };
        case FETCH_USERDATA:
            return { ...state, userData: action.payload };
        default:
            return state;
    }
}