import axios from 'axios'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        if (getToken()) {
            // 让每个请求携带 token
            config.headers['Authorization'] = 'Bearer ' + getToken()
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const data = response.data
        return data
        /*if (res.code !== 2000) {
            return Promise.reject(new Error(res.message || '请求数据错误'))
        } else {
            return res
        }*/
    },
    error => {
        // Toast.fail(error.message)
        console.log(error)
        return Promise.reject(error)
    }
)

export default service
