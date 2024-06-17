import { useContext } from "react"
import { ShoppingContext } from "./ShoppingStore"
import { Rating } from "react-simple-star-rating"

export const  Shopping = () =>{
    const shops = useContext(ShoppingContext)
    return <>

    <div className="books">

    <div className="book">
    <div className="book-outline row">
     {
        shops && shops.map(x=>{
            return <div key={x.id} className="book-inline col-sm-3" >

                <div className="book-title"> {x.title} </div>
                <div className="book-img"> 
                    <img src={x.image} width={100} height={100} />
                     </div>

                <div className="book-price-rating">
                <div className="price"> {x.price.toLocaleString("en-IN",{style:"currency", currency:"INR"})} </div>
                <div className="rating"> 
                    <Rating initialValue={x.rating.rate} readonly="true" size={15} />
                    
                     </div>
                    
                    
                     </div>


            </div>
        })
     }
    </div>

    </div>

    </div>
    </> 
} 