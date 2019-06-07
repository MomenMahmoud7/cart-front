export const SIGNIN_EMAIL = 'SIGNIN_EMAIL';
export const SIGNIN_EMAIL_ERROR = 'SIGNIN_EMAIL_ERROR';
export const SIGNIN_PASSWORD = 'SIGNIN_PASSWORD';
export const SIGNIN_PASSWORD_ERROR = 'SIGNIN_PASSWORD_ERROR';
export const KEEP_SIGNED_IN = 'KEEP_SIGNED_IN';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';
export const USER_STATUS = 'USER_STATUS';

export const signinEmailOnChange = text => ({
    type: SIGNIN_EMAIL,
    payload: text
})

export const signinEmailErrorHandler = () => ({
    type: SIGNIN_EMAIL_ERROR,
})

export const signinPasswordOnChange = text => ({
    type: SIGNIN_PASSWORD,
    payload: text
})

export const signinPasswordErrorHandler = text => ({
    type: SIGNIN_PASSWORD_ERROR,
    payload: text
})

export const keepSignedInOnChange = () => ({
    type: KEEP_SIGNED_IN,
})

export const signinErrorHandler = text => ({
    type: SIGNIN_ERROR,
    payload: text
})
export const setUserStatus = status => ({
    type: USER_STATUS,
    payload: status
})