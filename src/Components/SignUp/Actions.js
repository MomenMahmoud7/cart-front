import {
    SIGNUP_NAME,
    SIGNUP_PHONE,
    SIGNUP_PASSWORD,
    SIGNUP_CONFIRM_PASSWORD,
    SIGNUP_PASSWORD_ERROR,
    SIGNUP_EMAIL,    
    SIGNUP_EMAIL_ERROR,
    SIGNUP_ADDRESS,
    SIGNUP_NATIONAL_ID,
} from './Constants';

export const signupName = (text) => ({
    type: SIGNUP_NAME,
    payload: text
})
export const signupPhone = (text) => ({
    type: SIGNUP_PHONE,
    payload: text
})
export const signupPassword = (text) => ({
    type: SIGNUP_PASSWORD,
    payload: text
})
export const signupConfirmPassword = (text) => ({
    type: SIGNUP_CONFIRM_PASSWORD,
    payload: text
})
export const signupPasswordError = () => ({
    type: SIGNUP_PASSWORD_ERROR,
})
export const signupEmail = (text) => ({
    type: SIGNUP_EMAIL,
    payload: text
})
export const signupEmailError = () => ({
    type: SIGNUP_EMAIL_ERROR,
})
export const signupAddress = (text) => ({
    type: SIGNUP_ADDRESS,
    payload: text
})
export const signupNationalId = (text) => ({
    type: SIGNUP_NATIONAL_ID,
    payload: text
})