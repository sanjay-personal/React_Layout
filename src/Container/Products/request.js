import { customAxios } from "../../request"


export const getProductsRes = ()=>{
return customAxios.get('/posts').then(res=> res.data)
}