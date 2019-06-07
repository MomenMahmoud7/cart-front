import { ITEM_ADDED } from './Actions';

const initialState = {
    itemStatus: false,
};

export const category = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_ADDED:
            return { ...state, itemStatus: action.payload };
        default:
            return state;
    }
}