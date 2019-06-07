import { fetchCartItems } from '../Cart/Actions';
import { addedItemStatusChange, openProduct } from './Actions';

export const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        signedIn: state.signIn.signedIn,
        product: state.category.product,
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        openProduct: product => dispatch(openProduct(product)),
        addItem: product => {
            dispatch(addedItemStatusChange(true))
            setTimeout(() => {
                dispatch(addedItemStatusChange(false))
            }, 10000);
            fetch(`http://localhost:4000/users?id=${localStorage.user}`)
                .then(res => res.json())
                .then(user => {
                    if (user[0].cartItems.includes(
                        (user[0].cartItems.filter(item => item.id === product.id))[0]
                    ))
                        fetch(`http://localhost:4000/users/${localStorage.user}`, {
                            method: 'PATCH',
                            body: JSON.stringify(
                                {
                                    cartItems: user[0].cartItems.map(item =>
                                        item.id === product.id ?
                                            { ...item, quantity: ++item.quantity } :
                                            item
                                    )
                                }
                            ),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            }
                        })
                            .then(res => res.json())
                            .then(user => dispatch(fetchCartItems(user.cartItems)))
                    else
                        fetch(`http://localhost:4000/users/${localStorage.user}`, {
                            method: 'PATCH',
                            body: JSON.stringify(
                                { cartItems: user[0].cartItems.concat({ ...product, quantity: 1 }) }
                            ),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            }
                        })
                            .then(res => res.json())
                            .then(user => dispatch(fetchCartItems(user.cartItems)))
                });
            fetch(`http://localhost:4000/users?id=${localStorage.user}`)
                .then(res => res.json())
                .then(user => dispatch(fetchCartItems(user[0].cartItems)))
        }
    }
}