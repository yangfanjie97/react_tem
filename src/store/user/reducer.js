import * as actionTypes from "./constants";
import {fromJS} from "immutable";

const defaultState = fromJS({
    token: '默认token',
    userInfo: {}
})

export default function (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_USER_TOKEN:
            return state.set('token', action.data)
        default:
            return state
    }
}
