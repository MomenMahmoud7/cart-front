import { CATGORY_SELECTED } from './Constants';

export const addProduct = (state={ categorySelected:0 }, action={}) =>{
    switch (action.type){
        case CATGORY_SELECTED :
            return { ...state, categorySelected: action.payload }
        default :
            return state;
    }
}