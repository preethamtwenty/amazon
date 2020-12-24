import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './stateprovider';

function Checkout() {
    const[{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
             <div className="checkout_left">
             <div className="checkout_title">Your Shopping Basket</div>
             <div className="checkout_name">{user ? user.email:'sign in '} </div>
             {basket.map(item=>(
                 <CheckoutProduct id={item.id}
                 image={item.image}
                 name={item.name}
                 price={item.price}
                 rating={item.rating}/>
             ))}
            
             
             
             </div>

             <div className="checkout_right">
             <Subtotal/>
             </div>
        </div>
    )
}

export default Checkout;
