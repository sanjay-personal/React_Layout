import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getProducts, getProductsRest } from "../Container/Products/action"

const Product = (props)=>{
    console.log("props", props)
useEffect(()=>{
    console.log("useEffect", props)

      props.getAllProducts()
   return ()=>{
    console.log("useEffect2", props)
     props.getResetProducts()
    }

},[])

useState(props.products)


    return <>
    Hi Product {props.products.length}
    
    </> 

}

const mapStateToProps = (state)=>{
    console.log("mapStateToProps", state)

    return{
        products: state.productsReducer.products
    }
}

const mapStateToDispatch = (dispatch)=>{
    return{
        getAllProducts: ()=>dispatch(getProducts()),
        getResetProducts: ()=>dispatch(getProductsRest())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Product)