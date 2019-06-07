export const FETCH_ADVERTISEMENTS = 'FETCH_ADVERTISEMENTS';

export const fetchAdvertisements = advertisements => ({
    type: FETCH_ADVERTISEMENTS,
    payload: advertisements
});