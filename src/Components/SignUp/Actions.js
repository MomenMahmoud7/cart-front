export const SIGNUP_NAME = 'SIGNUP_NAME';
export const SIGNUP_NAME_ERROR = 'SIGNUP_NAME_ERROR';
export const SIGNUP_PHONE = 'SIGNUP_PHONE';
export const SIGNUP_PHONE_ERROR = 'SIGNUP_PHONE_ERROR';
export const SIGNUP_PASSWORD = 'SIGNUP_PASSWORD';
export const SIGNUP_CONFIRM_PASSWORD = 'SIGNUP_CONFIRM_PASSWORD';
export const SIGNUP_PASSWORD_ERROR = 'SIGNUP_PASSWORD_ERROR';
export const SIGNUP_EMAIL = 'SIGNUP_EMAIL';
export const SIGNUP_EMAIL_ERROR = 'SIGNUP_EMAIL_ERROR';
export const SIGNUP_ADDRESS = 'SIGNUP_ADDRESS';
export const SIGNUP_ADDRESS_ERROR = 'SIGNUP_ADDRESS_ERROR';
export const SIGNUP_USER_TYPE = 'SIGNUP_USER_TYPE';
export const SIGNUP_USER_TYPE_ERROR = 'SIGNUP_USER_TYPE_ERROR';
export const SIGNUP_NATIONAL_ID = 'SIGNUP_NATIONAL_ID';
export const SIGNUP_NATIONAL_ID_ERROR = 'SIGNUP_NATIONAL_ID_ERROR';
export const SIGNUP_IMAGE = 'SIGNUP_IMAGE';
export const SIGNUP_TERMS = 'SIGNUP_TERMS';
export const SIGNUP_TERMS_ERROR = 'SIGNUP_TERMS_ERROR';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const USER_STATUS = 'USER_STATUS';


export const signupNameOnChange = name => ({
    type: SIGNUP_NAME,
    payload: name
})
export const signupNameErrorHandler = error => ({
    type: SIGNUP_NAME_ERROR,
    payload: error
})
export const signupPhoneOnChange = text => ({
    type: SIGNUP_PHONE,
    payload: text
})
export const signupPhoneErrorHandler = error => ({
    type: SIGNUP_PHONE_ERROR,
    payload: error
})
export const signupPasswordOnChange = text => ({
    type: SIGNUP_PASSWORD,
    payload: text
})
export const signupConfirmPasswordOnChange = text => ({
    type: SIGNUP_CONFIRM_PASSWORD,
    payload: text
})
export const signupPasswordErrorHandler = error => ({
    type: SIGNUP_PASSWORD_ERROR,
    payload: error
})
export const signupEmailOnChange = text => ({
    type: SIGNUP_EMAIL,
    payload: text
})
export const signupEmailErrorHandler = error => ({
    type: SIGNUP_EMAIL_ERROR,
    payload: error
})
export const signupAddressOnChange = text => ({
    type: SIGNUP_ADDRESS,
    payload: text
})
export const signupAddressErrorHandler = error => ({
    type: SIGNUP_ADDRESS_ERROR,
    payload: error
})
export const signupUserTypeOnChange = text => ({
    type: SIGNUP_USER_TYPE,
    payload: text
})
export const signupUserTypeErrorHandler = error => ({
    type: SIGNUP_USER_TYPE_ERROR,
    payload: error
})
export const signupNationalIdOnChange = text => ({
    type: SIGNUP_NATIONAL_ID,
    payload: text
})
export const signupNationalIdErrorHandler = error => ({
    type: SIGNUP_NATIONAL_ID_ERROR,
    payload: error
})
export const signupTermsOnChange = status => ({
    type: SIGNUP_TERMS,
    payload: status,
})
export const signupTermsErrorHandler = error => ({
    type: SIGNUP_TERMS_ERROR,
    payload: error
})
export const signupErrorHandler = error => ({
    type: SIGNUP_ERROR,
    payload: error
})
export const setUserStatus = status => ({
    type: USER_STATUS,
    payload: status,
})