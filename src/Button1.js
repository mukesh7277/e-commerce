import React from 'react';
import "./Button1.css";
import {useStateValue} from "./StateProvider";

function Button1({id,image,title,price}) {
    const[{basket},dispatch] = useStateValue();
    console.log("this is the basket >>> ",basket);
    const addToBasket =() => {
       dispatch({
           type:"ADD_TO_BASKET",
           item:{
               id:id,
               image:image,
               title:title,
               price:price,
           },
       });
    };
    return (
        <div>
        <div className='productimg'>
            <div >
               <div>
                <img className='productimg2'src={image}></img>
                </div>
                <div>
                <span className='text'>{title}</span>
                </div>
                <small className='text'>₹</small>
                <span className='text'>{price}</span>
                <p>
                <button onClick={addToBasket}>Add To Basket</button>
                </p>
            </div>
           
            </div>
        </div>

    )
}
export default Button1;