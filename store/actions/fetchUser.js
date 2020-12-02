import * as actionTypes from './actionTypes';
import { UserAPI }  from '../../UTILS/api';

const fetchUsersStart = () => ({type: actionTypes.FETCH_USERS_START});
const fetchUsersSuccess = (data) => ({type: actionTypes.FETCH_USERS_SUCCESS, payload: data});
const fetchUsersFail = (data) => ({type: actionTypes.FETCH_USERS_FAIL});


export const fetchUsers =  (page) => async (dispatch) => {

    dispatch(fetchUsersStart());

    try {
        const users = await UserAPI.getAll();
        dispatch(fetchUsersSuccess(users));
    } catch {
        dispatch(fetchUsersFail());
    }
};
