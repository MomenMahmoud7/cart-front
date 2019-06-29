export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';

export const fetchCartItems = cartItems => ({
    type: FETCH_CART_ITEMS,
    payload: cartItems
});