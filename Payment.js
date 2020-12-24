import React from 'react';
import './Payment.css';
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './stateprovider';

function Payment() {
    const[{basket,user},dispatch]=useStateValue();
    return (
        <div className="payment">
        <span className="payment_user">{user ? user.email:"Hello Guest"}</span>
        <div className="payment_delivery">
        <div className="delivery_heading">Delivery Address</div>
        <div className="delivery_address">
        <div>1234 Street</div>
        <div>Andhra Pradesh</div>
        <div>Visakhpatnam</div>
        
        </div>

        <div className="delivery_items">
        <span className="items_heading">Review items and delivery</span>
        {basket.map(item=>(
            <CheckoutProduct id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}/>
        ))} 
        </div>
        </div>
            
        </div>
    )
}

export default Payment;
