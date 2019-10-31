import * as actionTypes from "./constants";
import {fromJS} from "immutable";
import { RouterKeys } from '../../routers'

const defaultState = fromJS({
    permissionRouter: [], // 权限路由
    routerWhiteList: [RouterKeys.NotFound, RouterKeys.Login] // 路由白名单
})

export default function (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_PERMISSION_ROUTER:
            return state.set('token', action.data)
        default:
            return state
    }
}
