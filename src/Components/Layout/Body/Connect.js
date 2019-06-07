export const mapStateToProps = state => {
    return {
        product: state.category.product,
        products: state.data.products,
        signedIn: state.signIn.signedIn,
        signedUp: state.signUp.signedUp,
    }
}
