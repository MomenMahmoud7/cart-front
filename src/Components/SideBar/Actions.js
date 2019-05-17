import { 
    SHOW_SIDEBAR,
    SHOW_CATEGORY,
} from './Constants';

export const showSidebar = () => ({
    type: SHOW_SIDEBAR,
})
export const showCategory = (item) => ({
    type: SHOW_CATEGORY,
    payload: item,
})