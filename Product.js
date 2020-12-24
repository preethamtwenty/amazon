import React from 'react';
import './Product.css';
import { useStateValue } from './stateprovider';
import {actionTypes} from './reducer';
function Product({id,name,price,rating,image}) {

    const [{basket},dispatch]=useStateValue();
    

    const add = () => {
        // dispatch the item into the data layer
        
        console.log(basket)
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id: id,
              name:name,
              image: image,
              price: price,
              rating: rating,
            },
        });
        
       
      };


    return (
        <div className="product">
            <div className="product_name">
            {name}
            </div>

            <div className="product_cost">
            RS {price}
            </div>

            <div className="product_rating">
            {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>

            <div className="product_image">
            <img className="product__image" src={image} alt="thereshuold be a picture"></img>
            </div>

            <div className="add_basket">
            <button onClick={add} className="product_add">Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
