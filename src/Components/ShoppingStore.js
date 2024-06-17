import { createContext, useEffect, useState } from "react";

export const ShoppingContext = createContext()

export const ShoppingProvider = ({children})=>{
    const [shopping , setShopping] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then((res)=>res.json())
        .then((ress)=>setShopping(ress))
        .catch((err)=> console.log("err", err) )
    })
      return(
    <ShoppingContext.Provider value={shopping}> {children} </ShoppingContext.Provider>
      )
}