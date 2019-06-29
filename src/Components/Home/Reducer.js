import { FETCH_ADVERTISEMENTS } from './Actions';

const initialState = {
    advertisements: []
};

export const home = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ADVERTISEMENTS:
            return { ...state, advertisements: action.payload };
        default:
            return state;
    }
};
