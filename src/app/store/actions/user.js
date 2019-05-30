import {GET_USER_SUCCESS, GET_REPOS_SUCCESS} from "../constants/user";

export const getUserSucessAction = payload => ({
    type: GET_USER_SUCCESS,
    payload: payload
});

export const getReposSuccessAction = err => ({
    type: GET_REPOS_SUCCESS,
    payload: err
});