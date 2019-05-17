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

const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

export const signUp = (
    state = {
        signupName:'',
        signupPhone:'',
        signupPassword:'',
        signupConfirmPassword:'',
        signupPasswordError: false,
        signupEmail:'',
        signupEmailError: false,
        signupAddress:'',
        signupNationalId:'',
    }, action={} ) => {
    switch (action.type) {
        case SIGNUP_NAME:
            return { ...state , signupName: action.payload };
        case SIGNUP_PHONE:
            return { ...state , signupPhone: action.payload };
        case SIGNUP_PASSWORD:
            return { ...state , signupPassword: action.payload };
        case SIGNUP_CONFIRM_PASSWORD:
            return { ...state , signupConfirmPassword: action.payload };
        case SIGNUP_PASSWORD_ERROR:
            return { ...state , signupPasswordError: action.payload };        
        case SIGNUP_EMAIL:
            return { ...state , signupEmail: action.payload };        
        case SIGNUP_EMAIL_ERROR:
            return { ...state , signupEmailError: mailFormat.test(state.signupEmail) ? false : true };
        case SIGNUP_ADDRESS:
            return { ...state , signupAddress: action.payload };
        case SIGNUP_NATIONAL_ID:
            return { ...state , signupNationalId: action.payload };
        default:
            return state;
    }
}