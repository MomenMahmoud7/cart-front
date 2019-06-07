import { showSidebar } from '../SideBar/Actions';
import { setUserStatus } from '../../SignIn/Actions';
import { fetchCartItems } from '../../Cart/Actions';

export const mapStateToProps = state => {
    return {
        products: state.data.products,
        signedIn: state.signIn.signedIn,
        sidebarCollapsed: state.sideBar.sidebarCollapsed,
        cartItems: state.cart.cartItems,
        itemStatus: state.category.itemStatus,
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        showSidebar: () => dispatch(showSidebar()),
        signOut: () => {
            dispatch(setUserStatus(false));
            localStorage.removeItem('user');
            dispatch(fetchCartItems([]));
        },
    }
}