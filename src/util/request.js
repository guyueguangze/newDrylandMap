import axios from 'axios'
import { message } from 'antd'
const request = axios.create({
  timeout: 5000,
  // baseURL: "https://tc.zjzx.gov.cn/chart/api"
})

request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    const token = 'fsafsafsagsafsaeawsdsafa'
    if (token) {
      // eslint-disable-next-line no-param-reassign
      // config.headers.Authorization = `Bearer ${token}`
      config.headers.token = token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么

    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)
export default request
