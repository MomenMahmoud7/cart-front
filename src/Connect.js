import { showSidebar, showCategory } from './Components/SideBar/Actions';
import { 
    signinEmail, 
    signinPassword, 
    signinEmailError, 
    // signinPasswordError 
} from './Components/SignIn/Actions';
import { 
    signupName,
    signupPhone,
    signupPassword,
    signupConfirmPassword,
    // signupPasswordError,
    signupEmail,
    signupEmailError,
    signupAddress,
    signupNationalId,
} from './Components/SignUp/Actions';
import { addItem, removeItem } from './Components/Cart/Actions';
import { selectCategory } from './Components/Add Product/Actions';

export const mapStateToProps = state => {
    return {
        // DATA
        products: state.data.products,
        // SIDEBAR
        sidebarCollapsed: state.sideBar.sidebarCollapsed,
        categoryCollapsed: state.sideBar.categoryCollapsed,
        // SIGN IN
        signinEmail: state.signIn.signinEmail,
        signinPassword: state.signIn.signinPassword,
        signinEmailError: state.signIn.signinEmailError,
        signinPasswordError: state.signIn.signinPasswordError,
        // SIGN UP
        signupName: state.signUp.signupName,
        signupPhone: state.signUp.signupPhone,
        signupPassword: state.signUp.signupPassword,
        signupConfirmPassword: state.signUp.signupConfirmPassword,
        signupPasswordError: state.signUp.signinPasswordError,
        signupEmail: state.signUp.signupEmail,
        signupEmailError: state.signUp.signupEmailError,
        signupAddress: state.signUp.signupAddress,
        signupNationalId: state.signUp.signupNationalId,
        // CART
        cartItems: state.cart.cartItems,
        //  ADD PRODUCT
        categorySelected: state.addProduct.categorySelected,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        // SIDEBAR
        showSidebar : () => dispatch(showSidebar()),
        showCategory: item => dispatch(showCategory(item)),
        // SIGN IN
        signinEmailOnChange : event => dispatch(signinEmail(event.target.value)),
        signinPasswordOnChange : event => dispatch(signinPassword(event.target.value)),
        signinOnClick : () => dispatch(signinEmailError()),
        // SIGN UP
        signupNameOnChange : event => dispatch(signupName(event.target.value)),
        signupPhoneOnChange : event => dispatch(signupPhone(event.target.value)),
        signupPasswordOnChange : event => dispatch(signupPassword(event.target.value)),
        signupConfirmPasswordOnChange : event => dispatch(signupConfirmPassword(event.target.value)),
        signupEmailOnChange : event => dispatch(signupEmail(event.target.value)),
        signupAddressOnChange : event => dispatch(signupAddress(event.target.value)),
        signupNationalIdOnChange : event => dispatch(signupNationalId(event.target.value)),
        signupOnClick : () => dispatch(signupEmailError()),
        addItem: item => dispatch(addItem(item)),
        removeItem: item => dispatch(removeItem(item)),
        // ADD PRODUCT
        selectCategory: (event, data) => dispatch(selectCategory(data.value))
    }
}