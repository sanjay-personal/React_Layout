import { Get_Products_Error, Get_Products_Load, Get_Products_Reset, Get_Products_Success } from "./actionType"

const initialState = {
    products: [],
    error: '',
    isLoading: false
}

export const productsReducer = (state=initialState, action)=>{
    console.log("productsReducer", state, action, initialState)
     switch(action.type) {
        case Get_Products_Load : return {...state, isLoading: action.payload.isLoading}
        case Get_Products_Success: return {...state, isLoading: action.payload.isLoading, products: action.payload.products}
        case Get_Products_Error: return {...state, isLoading: action.payload.isLoading, error: action.payload.error}
        case Get_Products_Reset: return {...state, ...initialState}

        default : return state
    }
}