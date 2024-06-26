import './Cart.css'
import Footer from '../footer/Footer'
import { useState, useEffect } from 'react';
import CartItem from './CartItem'
import { useOutletContext } from 'react-router-dom';


function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useOutletContext();

  useEffect(() => {
    let price = 0;
    cartItems.forEach(item => {
      price = price + (item.price * item.amount);
    });
    setTotalPrice(price);
  }, [cartItems]);

  return (
    
    <>
      <div className='cartWrapper pageWrapper'>
        <ul className='contentSections'>
          <li style={{ width: '50%' }}>Item</li>
          <li style={{ width: '20%' }}>Amount</li>
          <li style={{ width: '30%' }}>Price</li>
        </ul>

        {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} image={item.image} name={item.title} amount={item.amount} price={item.price}/>;
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