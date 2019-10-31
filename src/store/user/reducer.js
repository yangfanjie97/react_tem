import * as actionTypes from "./constants";
import {fromJS} from "immutable";
import { getToken, setToken, removeToken } from '@/utils/auth'

const defaultState = fromJS({
    token: getToken(),
    // token: 'xxx',
    userInfo: {
        id: '',
        userName: ''
    }
})

export default function (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_USER_TOKEN:
            action.data ? setToken(action.data) : removeToken() // 存入cookie  或者 删除token
            return state.set('token', action.data)
        case actionTypes.UPDATE_USER_INFO:
            return state.set('userInfo', action.data)
        default:
            return state
    }
}
