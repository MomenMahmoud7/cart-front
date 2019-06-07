export const OPEN_ITEM = 'OPEN_ITEM';
export const ITEM_ADDED = 'ITEM_ADDED';

export const openProduct = item => ({
    type: OPEN_ITEM,
    payload: item,
});
export const addedItemStatusChange = status => ({
    type: ITEM_ADDED,
    payload: status,
});