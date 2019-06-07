import {
    signupNameOnChange,
    signupNameErrorHandler,
    signupPhoneOnChange,
    signupPhoneErrorHandler,
    signupPasswordOnChange,
    signupConfirmPasswordOnChange,
    signupPasswordErrorHandler,
    signupEmailOnChange,
    signupEmailErrorHandler,
    signupAddressOnChange,
    signupAddressErrorHandler,
    signupUserTypeOnChange,
    signupUserTypeErrorHandler,
    signupNationalIdOnChange,
    signupNationalIdErrorHandler,
    signupTermsOnChange,
    signupTermsErrorHandler,
    signupErrorHandler,
    setUserStatus,
} from './Actions';

export const mapStateToProps = state => {
    return {
        signupName: state.signUp.signupName,
        signupNameError: state.signUp.signupNameError,
        signupPhone: state.signUp.signupPhone,
        signupPhoneError: state.signUp.signupPhoneError,
        signupPassword: state.signUp.signupPassword,
        signupConfirmPassword: state.signUp.signupConfirmPassword,
        signupPasswordError: state.signUp.signupPasswordError,
        signupEmail: state.signUp.signupEmail,
        signupEmailError: state.signUp.signupEmailError,
        signupAddress: state.signUp.signupAddress,
        signupAddressError: state.signUp.signupAddressError,
        signupUserType: state.signUp.signupUserType,
        signupUserTypeError: state.signUp.signupUserTypeError,
        signupNationalId: state.signUp.signupNationalId,
        signupNationalIdError: state.signUp.signupNationalIdError,
        signupTerms: state.signUp.signupTerms,
        signupTermsError: state.signUp.signupTermsError,
        signupError: state.signUp.signupError,
    }
}

const mailFormat = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export const mapDispatchToProps = dispatch => {
    return {
        signupNameOnChange: event => {
            event.preventDefault();
            dispatch(signupNameOnChange(event.target.value));
        },
        signupPhoneOnChange: event => {
            event.preventDefault();
            dispatch(signupPhoneOnChange(event.target.value));
        },
        signupPasswordOnChange: event => {
            event.preventDefault();
            dispatch(signupPasswordOnChange(event.target.value))
        },
        signupConfirmPasswordOnChange: event => {
            event.preventDefault();
            dispatch(signupConfirmPasswordOnChange(event.target.value));
        },
        signupEmailOnChange: event => {
            event.preventDefault();
            dispatch(signupEmailOnChange(event.target.value));
        },
        signupAddressOnChange: event => {
            event.preventDefault();
            dispatch(signupAddressOnChange(event.target.value));
        },
        signupUserTypeOnChange: value => {
            dispatch(signupUserTypeOnChange(value));
        },
        signupNationalIdOnChange: event => {
            event.preventDefault();
            dispatch(signupNationalIdOnChange(event.target.value));
        },
        signupTermsOnChange: event => {
            event.preventDefault();
            dispatch(signupTermsOnChange(event.target.value));
        },
        signupOnClick: (
            signupName,
            signupPhone,
            signupPassword,
            signupConfirmPassword,
            signupEmail,
            signupAddress,
            signupUserType,
            signupNationalId,
            signupTerms,
        ) => {
            dispatch(signupNameErrorHandler(signupName === '' ? true : false));
            dispatch(signupPhoneErrorHandler(signupPhone === '' ? true : false));
            dispatch(signupPasswordErrorHandler(signupPassword !== signupConfirmPassword || signupPassword === '' ? true : false));
            dispatch(signupEmailErrorHandler(mailFormat.test(String(signupEmail).toLowerCase()) ? false : true));
            dispatch(signupAddressErrorHandler(signupAddress === '' ? true : false));
            dispatch(signupUserTypeErrorHandler(signupUserType === '' ? true : false));
            dispatch(signupNationalIdErrorHandler(signupNationalId === '' ? true : false));
            dispatch(signupTermsErrorHandler(signupTerms === false ? true : false));
            if (
                signupName !== '' ||
                signupPhone !== '' ||
                signupPassword !== '' ||
                signupPassword === signupConfirmPassword ||
                mailFormat.test(String(signupEmail).toLowerCase()) === true ||
                signupAddress !== '' ||
                signupUserType !== '' ||
                signupNationalId !== '' ||
                signupTerms === false
            ) {
                fetch(`http://localhost:4000/users?email=${signupEmail}`)
                    .then(response => response.json())
                    .then(user => {
                        if (user[0]) {
                            dispatch(signupErrorHandler(true));
                        }
                        else {
                            dispatch(setUserStatus(true));
                            dispatch(signupErrorHandler(false));
                            fetch('http://localhost:4000/users', {
                                method: 'POST',
                                body: JSON.stringify(
                                    {
                                        name: signupName,
                                        phone: signupPhone,
                                        password: signupPassword,
                                        email: signupEmail,
                                        address: signupAddress,
                                        userType: signupUserType,
                                        nationalID: signupNationalId,
                                        cartItems: []
                                    }
                                ),
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                }
                            });

                            fetch(`http://localhost:4000/users`)
                                .then(response => response.json())
                                .then(users => {
                                    localStorage.setItem('user', users.length + 1);
                                })
                        }
                    });
            }
        },
    }
}