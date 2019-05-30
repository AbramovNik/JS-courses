import {
    GET_USER_SUCCESS,
    GET_REPOS_SUCCESS
} from "../constants/user";


const initState = {
    data: {},
    repos: []
};

export const userReducer = (state = initState, action) => {
switch (action.type) {
    case GET_USER_SUCCESS : {
        return {...state, data: action.payload};
    }
    case GET_REPOS_SUCCESS : {
        return {...state, repos: action.payload};
    }
    default: return state;
};  

}
