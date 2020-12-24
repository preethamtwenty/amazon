import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateprovider';
import './Subtotal.css';
import { getBasketTotal} from './reducer';
import { totalScores} from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const [{basket},dispatch]=useStateValue()
    const history=useHistory()
    console.log(basket.id)

    console.log(basket)


    return (
        <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <p>
              <p>
               
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </p>
          )}
          decimalScale={1}
          value={getBasketTotal(basket)} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rs "}
        />
  
        <button onClick={e=>history.push('/payment')} className="checkout_button">Proceed to Checkout</button>
      </div>
    )
}

export default Subtotal
