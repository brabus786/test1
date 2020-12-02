import * as actionTypes from '../actions/actionTypes';
const initialState = {
    isLoading: false,
    users: [],
    isFail: false,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_USERS_START: {
            return {
                ...state,
                isLoading: true,
            }
        };
        case actionTypes.FETCH_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload.results,
                isLoading: false,
            }
        };
        case actionTypes.FETCH_USERS_FAIL: {
            return {
                ...state,
                users: action.payload,
                isFail: true,
            }
        };

        default: return state;
    }

};

export default reducer;