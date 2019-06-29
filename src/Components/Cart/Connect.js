import { fetchCartItems } from './Actions';

export const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        removeItem: product =>
            fetch(`http://localhost:4000/users?id=${localStorage.user}`)
                .then(res => res.json())
                .then(user => {
                    fetch(`http://localhost:4000/users/${localStorage.user}`, {
                        method: 'PATCH',
                        body: JSON.stringify({
                            cartItems: user[0].cartItems.filter(
                                item => item.id !== product.id
                            )
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8'
                        }
                    })
                        .then(res => res.json())
                        .then(user => dispatch(fetchCartItems(user.cartItems)));
                }),
        changeItemQuantity: (value, product) =>
            fetch(`http://localhost:4000/users?id=${localStorage.user}`)
                .then(res => res.json())
                .then(user => {
                    fetch(`http://localhost:4000/users/${localStorage.user}`, {
                        method: 'PATCH',
                        body: JSON.stringify({
                            cartItems: user[0].cartItems.map(item =>
                                item.id === product.id
                                    ? { ...item, quantity: value }
                                    : item
                            )
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8'
                        }
                    })
                        .then(res => res.json())
                        .then(user => dispatch(fetchCartItems(user.cartItems)));
                })
    };
};
