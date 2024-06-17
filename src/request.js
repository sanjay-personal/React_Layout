import axios from "axios"

function responseInterceptor(config) {
  console.log("responseInterceptor", config)
  return config
}

function requestInterceptor(config) {
  console.log("requestInterceptor", config)
    return config
}

export const customAxios = (()=>{
    const API = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/'
    })
    API.defaults.headers = {'test':'1234'}
    API.interceptors.request.use(requestInterceptor)
    API.interceptors.response.use(responseInterceptor)
   return API
})()