import './Cart.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useState } from 'react';
import CartItem from './CartItem'

function Cart() {

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <Navbar/>
      <div className='cartWrapper pageWrapper'>
        <ul className='contentSections'>
          <li style={{ width: '50%' }}>Item</li>
          <li style={{ width: '20%' }}>Amount</li>
          <li style={{ width: '30%' }}>Price</li>
        </ul>

        <CartItem/>
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