import { CATGORY_SELECTED } from './Constants'

export const selectCategory = (text) => ({
    type: CATGORY_SELECTED,
    payload: text,
})