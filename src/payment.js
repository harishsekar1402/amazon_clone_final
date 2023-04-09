import React from 'react'
import './assets/css/payment.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './Stateprovider';
import { Link} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer";


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();   


  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout(
                    <Link to="/checkout" style={{textDecoration: 'none'}}>{basket?.length} items</Link>
                )
            </h1>
            <div className='payment-section'>
            <div className='payment-title'>
            <h3>Delivery Address</h3>
                </div>
                <div className='Delivery-address'>
                    <p>{user?.email}</p>
                    <p>68, Harish Street</p>
                    <p>Avadi, Chennai</p>
                </div>
                
            </div>
        <div className='payment-section'>
        <div className='payment-title'>
            <h3>Review items and Delivery</h3>
                </div>
            <div className='payment-items'>
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
            </div>
        </div>
        <div className='payment-section'>
            <div className='payment-title'>
                <h3>Payment Method</h3>
            </div>
            <div className='payment-details'>
            <form >

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                                    <Link to='/home'>
                                    <button className='btn'>
                                        <span>Buy now</span>
                                    </button></Link>
                                </div>

                            </form>
            </div>
                
        </div>
        </div>
    </div>
  )
}

export default Payment