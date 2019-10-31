import request from '@/utils/request'

// 用户账号密码登录
export function userAccountPasswordLogin(data) {
    return request({
        url: '/client/login/user-login',
        method: 'post',
        data
    })
}

/**
 * 使用 token 获取 用户信息 以及权限路由
 * @param data
 */
export function getUserInfo(data) {
    return request({
        url: '/user/info',
        params: data
    })
}
