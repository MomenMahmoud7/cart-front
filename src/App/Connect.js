import { fetchProducts, fetchAdvertisements, fetchUserData } from './Actions';
import { setUserStatus } from '../Components/SignIn/Actions';
import { showSidebar, showCategory } from '../Components/Layout/SideBar/Actions';
import { fetchCartItems } from '../Components/Cart/Actions';

export const mapStateToProps = state => {
    return {
        products: state.data.products,
        advertisements: state.data.advertisements,
        sidebarCollapsed: state.sideBar.sidebarCollapsed,
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => fetch("http://localhost:4000/products")
            .then(res => res.json())
            .then(products => {
                dispatch(fetchProducts(products));
            }),
        fetchAdvertisements: () => fetch("http://localhost:4000/advertisements")
            .then(res => res.json())
            .then(advertisements => {
                dispatch(fetchAdvertisements(advertisements));
            }),
        showSidebar: () => dispatch(showSidebar()),
        setUserStatus: () => {
            if (localStorage.user)
                dispatch(setUserStatus(true))
        },
        fetchUserData: () => {
            if (localStorage.user)
                fetch(`http://localhost:4000/users?id=${localStorage.user}`)
                    .then(res => res.json())
                    .then(user => {
                        const {
                            name,
                            phone,
                            email,
                            address,
                            userType,
                            nationalID,
                            image,
                            cartItems,
                        } = user[0]
                        dispatch(fetchCartItems(cartItems));
                        dispatch(fetchUserData(
                            name,
                            phone,
                            email,
                            address,
                            userType,
                            nationalID,
                        ));
                    }
                    )
        },
        showCategory: (category) => dispatch(showCategory(category)),
    }
}