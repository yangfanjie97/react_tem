import { UPDATE_USER_TOKEN, UPDATE_USER_INFO } from './constants'
import { userAccountPasswordLogin, getUserInfo } from '@/api/user'
import { updatePermissionRouter } from '../permission/actionCreators'

export function updateUserToken(data) {
    return {
        type: UPDATE_USER_TOKEN,
        data
    }
}

export function updateUserInfo(data) {
    return {
        type: UPDATE_USER_INFO,
        data
    }
}

// 用户账号密码登录， 获取token
export const userAPLogin = (data) => {
    return dispatch => {
        userAccountPasswordLogin(data).then(res => {
            dispatch(updateUserToken(res.data))
        })
    };
};

/**
 * token 获取用户信息  以及权限路由
 * @param data
 * @param successfun  成功回调函数
 * @param errfun  失败回调函数
 * @returns {Function}
 */
export const userTokenGetInfo = (data, successfun, errfun) => {
    return dispatch => {
        getUserInfo(data).then(res => {
            dispatch(updateUserInfo(res.data))
            dispatch(updatePermissionRouter(res.data.permissionRouter))
            successfun && successfun(res)
        }).catch(err => {
            errfun && errfun(err)
        })
    }
}
