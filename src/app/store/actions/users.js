import {GET_USERS_SUCCESS, GET_USERS_ERROR} from "../constants/users";

export const getUsersSucessAction = payload => ({
    type: GET_USERS_SUCCESS,
    payload: payload
});

export const getUsersErrorAction = err => ({
    type: GET_USERS_ERROR,
    payload: err
});