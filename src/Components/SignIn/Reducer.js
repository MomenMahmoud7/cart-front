import { 
    SIGNIN_EMAIL,
    SIGNIN_PASSWORD,
    SIGNIN_EMAIL_ERROR,
    SIGNIN_PASSWORD_ERROR,
    KEEP_ME_SIGNED_IN
} from './Constants';

const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

export const signIn = (
    state = {
        signinEmail:'',
        signinPassword:'',
        signinEmailError: false,
        signinPasswordError: false,
        keepMeSignedIn: false,
    }, action={} ) => {
    switch (action.type) {
        case SIGNIN_EMAIL:
            return { ...state , signinEmail: action.payload };
        case SIGNIN_PASSWORD:
            return { ...state , signinPassword: action.payload };
        case SIGNIN_EMAIL_ERROR:
            return { ...state , signinEmailError: mailFormat.test(state.signinEmail) ? false : true };
        case SIGNIN_PASSWORD_ERROR:
            return { ...state , signinPasswordError: action.payload };
        case KEEP_ME_SIGNED_IN:
            return { ...state , keepMeSignedIn: action.payload };
        default:
            return state;
    }
}