import './Cart.css'
import Footer from '../footer/Footer'
import { useState, useEffect } from 'react';
import CartItem from './CartItem'
import { useOutletContext } from 'react-router-dom';


function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useOutletContext();

  return (
    
    <>
      <div className='cartWrapper pageWrapper'>
        <ul className='contentSections'>
          <li style={{ width: '50%' }}>Item</li>
          <li style={{ width: '20%' }}>Amount</li>
          <li style={{ width: '30%' }}>Price</li>
        </ul>

        {cartItems.map((item) => {
            return <CartItem key={item.id} image={item.image} name={item.title} price={item.price}/>;
        })}

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