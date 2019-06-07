export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_ADVERTISEMENTS = 'FETCH_ADVERTISEMENTS';
export const FETCH_USERDATA = 'FETCH_USERDATA';
export const USER_STATUS = 'USER_STATUS';

export const fetchProducts = products => ({
    type: FETCH_PRODUCTS,
    payload: products
});
export const fetchAdvertisements = advertisements => ({
    type: FETCH_ADVERTISEMENTS,
    payload: advertisements
});
export const fetchUserData = (
    name,
    phone,
    email,
    address,
    userType,
    nationalID,
    image,
) => ({
    type: FETCH_USERDATA,
    payload: {
        name,
        phone,
        email,
        address,
        userType,
        nationalID,
        image,
    }
});