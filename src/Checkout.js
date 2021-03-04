import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const[{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <br/><br/><br/><br/><br/>
            <div className="checkout_left"> 
            <div>
                <h2 className="checkout_title">Your Basket</h2>
                 
                 {basket.map(item => (
                 <CheckoutProduct
                 id={item.id}
                 image={item.image}
                 title={item.title}
                 price={item.price}
                 />
                 ))}
                </div> 
            </div>
            <div className='checkout_right'>
                <Subtotal/>
              
            </div>
           
        </div>
    )
}

export default Checkout;

