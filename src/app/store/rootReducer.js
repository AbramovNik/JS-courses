import {combineReducers} from "redux";
import {usersReducer} from "./reducers/users";
import {userReducer} from "./reducers/user";
import { accordionReducer} from "./reducers/accordion";

export const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
    accordion: accordionReducer

});