import { CATGORY_SELECTED } from './Actions';

const initialState = {
    categorySelected: 0
}
export const addProduct = (state = initialState, action) => {
    switch (action.type) {
        case CATGORY_SELECTED:
            return { ...state, categorySelected: action.payload }
        default:
            return state;
    }
}