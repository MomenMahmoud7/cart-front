export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const SHOW_CATEGORY = 'SHOW_CATEGORY';

export const showSidebar = () => ({
    type: SHOW_SIDEBAR,
})
export const showCategory = (item) => ({
    type: SHOW_CATEGORY,
    payload: item,
})