import { showSidebar, showCategory } from './Actions';

export const mapStateToProps = state => {
    return {
        products: state.data.products,
        sidebarCollapsed: state.sideBar.sidebarCollapsed,
        categoryCollapsed: state.sideBar.categoryCollapsed,
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        showSidebar: () => dispatch(showSidebar()),
        showCategory: item => dispatch(showCategory(item)),
    }
}