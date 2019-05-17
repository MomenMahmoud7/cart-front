import { 
    SIGNIN_EMAIL,
    SIGNIN_PASSWORD,
    SIGNIN_EMAIL_ERROR,
    SIGNIN_PASSWORD_ERROR,
    KEEP_ME_SIGNED_IN
} from './Constants';

export const signinEmail = (text) => ({
    type: SIGNIN_EMAIL,
    payload: text
})
export const signinPassword = (text) => ({
    type: SIGNIN_PASSWORD,
    payload: text
})
export const signinEmailError = (text) => ({
    type: SIGNIN_EMAIL_ERROR,
})
export const signinPasswordError = (text) => ({
    type: SIGNIN_PASSWORD_ERROR,
})
export const keepMeSignedIn = () => ({
    type: KEEP_ME_SIGNED_IN,
})