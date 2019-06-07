export const CATGORY_SELECTED = 'CATGORY_SELECTED';

export const selectCategory = (text) => ({
    type: CATGORY_SELECTED,
    payload: text,
})