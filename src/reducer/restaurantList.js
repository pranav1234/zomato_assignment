import { actionTypes } from '../constants';

const initialState = {
    fetching: false,
    data: {},
    error: '',
    restaurant: {},
}

const restaurant = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case actionTypes.FETCH_SUCCESS:
            return {
                ...state,
                restaurant: action.data.collections,
                fetching: false,
            };
        case actionTypes.FETCH_FAIL:
            return {
                ...state,
                fetching: false,
                restaurant: { error: action.error, message: action },
            };
        default: return state

    }
}
export default restaurant;