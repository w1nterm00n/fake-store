import './Cart.css'
import Footer from '../footer/Footer'
import { useState, useEffect } from 'react';
import CartItem from './CartItem'

function Cart() {

  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  // useEffect(() => { //getting items, which added in cart, to display them
  //   let cartStorage = localStorage.getItem("cart");
  //   let newCart = JSON.parse(cartStorage);
  //   setCart(newCart[0].items);
  // }, []);

  return (
    
    <>
      <div className='cartWrapper pageWrapper'>
        <ul className='contentSections'>
          <li style={{ width: '50%' }}>Item</li>
          <li style={{ width: '20%' }}>Amount</li>
          <li style={{ width: '30%' }}>Price</li>
        </ul>

        <CartItem/>

        <div className='priceAndCheckout'>
          <span className='totalPriceDisplay'>
            <span>Total price:</span>
            <span>{totalPrice}$</span>
          </span>

          <button className='blueButton'>
              <a href="#!">Checkout</a> 
          </button>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Cart