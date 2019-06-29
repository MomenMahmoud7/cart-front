import {
    SIGNIN_EMAIL,
    SIGNIN_EMAIL_ERROR,
    SIGNIN_PASSWORD,
    SIGNIN_PASSWORD_ERROR,
    KEEP_SIGNED_IN,
    SIGNIN_ERROR,
    USER_STATUS
} from './Actions';

const initialState = {
    signinEmail: '',
    signinEmailError: false,
    signinPassword: '',
    signinPasswordError: false,
    keepSignedIn: false,
    signinError: false,
    signedIn: false
};

const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

export const signIn = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_EMAIL:
            return { ...state, signinEmail: action.payload };
        case SIGNIN_EMAIL_ERROR:
            return {
                ...state,
                signinEmailError: mailFormat.test(state.signinEmail)
                    ? false
                    : true
            };
        case SIGNIN_PASSWORD:
            return { ...state, signinPassword: action.payload };
        case SIGNIN_PASSWORD_ERROR:
            return { ...state, signinPasswordError: action.payload };
        case KEEP_SIGNED_IN:
            return { ...state, keepMeSignedIn: !state.keepSignedIn };
        case SIGNIN_ERROR:
            return { ...state, signinError: action.payload };
        case USER_STATUS:
            return { ...state, signedIn: action.payload };
        default:
            return state;
    }
};
