import request from '@/utils/request'

// 例子：登录
export function login(data) {
    return request({
        url: '/client/login/user-login',
        method: 'post',
        data
    })
}
