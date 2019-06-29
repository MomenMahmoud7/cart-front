import { fetchCartItems } from '../Cart/Actions';
import { fetchUserData } from '../../App/Actions';
import {
    signinEmailOnChange,
    signinEmailErrorHandler,
    signinPasswordOnChange,
    signinPasswordErrorHandler,
    keepSignedInOnChange,
    signinErrorHandler,
    setUserStatus
} from './Actions';

export const mapStateToProps = state => {
    return {
        signinEmail: state.signIn.signinEmail,
        signinEmailError: state.signIn.signinEmailError,
        signinPassword: state.signIn.signinPassword,
        signinPasswordError: state.signIn.signinPasswordError,
        keepSignedIn: state.signIn.keepMeSignedIn,
        signinError: state.signIn.signinError
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        signinEmailOnChange: event =>
            dispatch(signinEmailOnChange(event.target.value)),
        signinPasswordOnChange: event =>
            dispatch(signinPasswordOnChange(event.target.value)),
        keepSignedInOnChange: () => dispatch(keepSignedInOnChange()),
        signin: (signinEmail, signinPassword) => {
            dispatch(signinEmailErrorHandler());
            if (signinEmail.length !== 0) {
                fetch(`http://localhost:4000/users?email=${signinEmail}`)
                    .then(response => response.json())
                    .then(user => {
                        if (user[0]) {
                            dispatch(signinErrorHandler(false));
                            if (user[0].password === signinPassword) {
                                const {
                                    name,
                                    phone,
                                    email,
                                    address,
                                    userType,
                                    nationalID,
                                    image,
                                    cartItems,
                                    id
                                } = user[0];
                                dispatch(fetchCartItems(cartItems));
                                dispatch(
                                    fetchUserData(
                                        name,
                                        phone,
                                        email,
                                        address,
                                        userType,
                                        nationalID,
                                        image
                                    )
                                );
                                dispatch(signinPasswordErrorHandler(false));
                                dispatch(setUserStatus(true));
                                localStorage.setItem('user', id);
                            } else dispatch(signinPasswordErrorHandler(true));
                        } else dispatch(signinErrorHandler(true));
                    });
            }
        }
    };
};
