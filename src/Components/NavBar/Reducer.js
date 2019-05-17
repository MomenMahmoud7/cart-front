import { 
    SHOW_NAVBAR,
} from './Constants';

export const navBar = (
    state={
        navbarCollapsed: false,
    }, action={}) => {
    switch (action.type) {
        case SHOW_NAVBAR:
            return {...state , navbarCollapsed: !state.navbarCollapsed };
        default:
            return state;
    }
}