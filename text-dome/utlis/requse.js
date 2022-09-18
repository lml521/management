import axios from 'axios'

const http = axios.create({
    timeout: 3000,
    baseURL: 'http://leju.bufan.cloud/'
})

http.interceptors.request.use(res => {
    res.headers.token=window.localStorage.getItem('token')
    return res
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use(res => {
    console.log(res);
    return Promise.resolve(res)
}, error => {
    return Promise.reject(error)
})
export default http