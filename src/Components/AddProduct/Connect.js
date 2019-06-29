import { selectCategory } from './Actions';

export const mapStateToProps = state => {
    return {
        products: state.data.products,
        categorySelected: state.addProduct.categorySelected
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        selectCategory: (event, data) => dispatch(selectCategory(data.value))
    };
};
