import {combineReducers} from "redux-immutable";
import {reducer as userReducer} from "./user";
import { reducer as permissionReducer  } from './permission'

export default combineReducers({
    user: userReducer,
    permission: permissionReducer
});
