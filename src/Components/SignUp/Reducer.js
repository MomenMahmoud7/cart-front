import {
    SIGNUP_NAME,
    SIGNUP_NAME_ERROR,
    SIGNUP_PHONE,
    SIGNUP_PHONE_ERROR,
    SIGNUP_PASSWORD,
    SIGNUP_CONFIRM_PASSWORD,
    SIGNUP_PASSWORD_ERROR,
    SIGNUP_EMAIL,
    SIGNUP_EMAIL_ERROR,
    SIGNUP_ADDRESS,
    SIGNUP_ADDRESS_ERROR,
    SIGNUP_USER_TYPE,
    SIGNUP_USER_TYPE_ERROR,
    SIGNUP_NATIONAL_ID,
    SIGNUP_NATIONAL_ID_ERROR,
    SIGNUP_TERMS,
    SIGNUP_TERMS_ERROR,
    SIGNUP_ERROR,
    USER_STATUS
} from './Actions';

const initialState = {
    signupName: '',
    signupPhone: '',
    signupPassword: '',
    signupConfirmPassword: '',
    signupEmail: '',
    signupAddress: '',
    signupUserType: '',
    signupNationalId: '',
    signupTerms: false,
    signupNameError: false,
    signupPhoneError: false,
    signupPasswordError: false,
    signupEmailError: false,
    signupAddressError: false,
    signupUserTypeError: false,
    signupNationalIdError: false,
    signupTermsError: false,
    signupError: false,
    signedUp: false,
}


export const signUp = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_NAME:
            return { ...state, signupName: action.payload };
        case SIGNUP_NAME_ERROR:
            return { ...state, signupNameError: action.payload };
        case SIGNUP_PHONE:
            return { ...state, signupPhone: action.payload };
        case SIGNUP_PHONE_ERROR:
            return { ...state, signupPhoneError: action.payload };
        case SIGNUP_PASSWORD:
            return { ...state, signupPassword: action.payload };
        case SIGNUP_CONFIRM_PASSWORD:
            return { ...state, signupConfirmPassword: action.payload };
        case SIGNUP_PASSWORD_ERROR:
            return { ...state, signupPasswordError: action.payload };
        case SIGNUP_EMAIL:
            return { ...state, signupEmail: action.payload };
        case SIGNUP_EMAIL_ERROR:
            return { ...state, signupEmailError: action.payload };
        case SIGNUP_ADDRESS:
            return { ...state, signupAddress: action.payload };
        case SIGNUP_ADDRESS_ERROR:
            return { ...state, signupAddressError: action.payload };
        case SIGNUP_USER_TYPE:
            return { ...state, signupUserType: action.payload };
        case SIGNUP_USER_TYPE_ERROR:
            return { ...state, signupUserTypeError: action.payload };
        case SIGNUP_NATIONAL_ID:
            return { ...state, signupNationalId: action.payload };
        case SIGNUP_NATIONAL_ID_ERROR:
            return { ...state, signupNationalIdError: action.payload };
        case SIGNUP_TERMS:
            return { ...state, signupTerms: !state.signupTerms };
        case SIGNUP_TERMS_ERROR:
            return { ...state, signupTermsError: action.payload };
        case SIGNUP_ERROR:
            return { ...state, signupError: action.payload };
        case USER_STATUS:
            return { ...state, signedUp: action.payload };
        default:
            return state;
    }
}