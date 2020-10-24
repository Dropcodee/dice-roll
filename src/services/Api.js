import axios from 'axios'
import NProgress from 'nprogress'

export default () => {
  const api = axios.create({
    baseURL: process.env.VUE_APP_TEST_API
    // timeout: 25000
  })
  api.interceptors.request.use(config => {
    NProgress.start()
    return config
  })
  api.interceptors.response.use(
    response => {
      NProgress.done()
      return response
    },
    error => {
      NProgress.done()
      NProgress.remove()
      return Promise.reject(error)
    }
  )
  return api
}
