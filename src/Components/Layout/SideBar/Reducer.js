import {
    SHOW_SIDEBAR,
    SHOW_CATEGORY
} from './Actions';

const initialState = {
    sidebarCollapsed: false,
    categoryCollapsed: 0,
}

export const sideBar = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
        case SHOW_CATEGORY:
            return { ...state, categoryCollapsed: state.categoryCollapsed === action.payload ? 0 : action.payload };
        default:
            return state;
    }
}