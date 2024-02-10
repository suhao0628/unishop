import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  })
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status !== 200) {
    Toast(res.message)
    return Promise.reject(res.message)
  } else {
    Toast.clear()
  }
  return res
}, function (error) {
  return Promise.reject(error)
})

export default request
