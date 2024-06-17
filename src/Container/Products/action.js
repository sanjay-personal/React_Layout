import { Get_Products, Get_Products_Reset } from "./actionType"

export const getProducts = ()=>{
    return {
        type: Get_Products
    }
}

export const getProductsRest = ()=>{
    return {
        type: Get_Products_Reset
    }
}