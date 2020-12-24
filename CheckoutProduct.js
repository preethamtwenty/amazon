import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './stateprovider';

function CheckoutProduct({id,name,image,price,rating}) {
    const [{basket},dispatch]=useStateValue()
    
    const removefrombasket=()=>{   
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,

        })
     }


    return (
        <div className="checkoutproduct">
        <img src={image} className="checkout_image"></img>
        <div className="checkoutproduct_info">
        <div className="checkout_name">{name}</div>
        <div className="checkout_price">{price}</div>
        <div className="checkout_rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removefrombasket} className="product_add">Remove from Basket</button>
        </div>
            
        </div>
    )
}

export default CheckoutProduct
