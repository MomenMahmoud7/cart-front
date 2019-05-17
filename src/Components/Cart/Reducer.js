import { ADD_ITEM, REMOVE_ITEM } from "./Constants";

export const cart = (
    state={
        cartItems:[],
    }, action={}) => {
    switch (action.type) {
        case ADD_ITEM :
            return {...state, 
                cartItems: 
                state.cartItems.includes(
                    (state.cartItems.filter(item => item.id === action.payload.id))[0]
                )
                ? state.cartItems.map(item => 
                    item.id === action.payload.id?
                    {...item, quantity: ++ item.quantity}:
                    item    
                )
                : state.cartItems.concat({...action.payload, quantity: 1})
            }
        case REMOVE_ITEM :
            return {...state, cartItems: state.cartItems.filter(
                (item) => item.id !== action.payload.id
            )};
        default :
            return state;
    }
}