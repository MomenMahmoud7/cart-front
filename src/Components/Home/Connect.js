import { fetchAdvertisements } from './Actions';

export const mapStateToProps = state => {
    return {
        advertisements: state.data.advertisements,
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        fetchAdvertisements: () => fetch("http://localhost:4000/advertisements")
            .then(res => res.json())
            .then(advertisements => {
                dispatch(fetchAdvertisements(advertisements));
            }),
    }
}