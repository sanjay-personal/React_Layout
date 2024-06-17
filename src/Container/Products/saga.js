import { call, put } from "redux-saga/effects";
import { Get_Products_Error, Get_Products_Load, Get_Products_Success } from "./actionType";
import { getProductsRes } from "./request";

export function* loadProducts() {
    
    try {
        yield put({type: Get_Products_Load, payload:{isLoading:true}})
        let res = yield call(getProductsRes)
        console.log("res", res)
        yield put({type: Get_Products_Success, payload:{isLoading:false, products: res}})
    } catch (error) {
        yield put({type: Get_Products_Error, payload:{isLoading:false, error: error}})
        
    }


}