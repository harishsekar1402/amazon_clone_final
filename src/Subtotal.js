import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './assets/css/Subtotal.css'
import { useStateValue } from './Stateprovider'
import { getBasketTotal } from './reducer';
import { Link,useHistory } from 'react-router-dom';
function Subtotal() {
  const history = useHistory();
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
      
      <CurrencyFormat
        renderText = {(value)=>(
          <>
          <p>
            Subtotal({basket.length} items):<strong>{value}</strong></p>
            <small className="subtotal-gift">
              <input type="checkbox"></input>This order contains a gift 
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}/>
        <button onClick={e => history.push('/payment')}>Proceed to pay</button>
    </div>
  )
}

export default Subtotal