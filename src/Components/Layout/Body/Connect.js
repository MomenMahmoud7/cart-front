export const mapStateToProps = state => {
    return {
        products: state.data.products,
        signedIn: state.signIn.signedIn,
        signedUp: state.signUp.signedUp
    };
};
