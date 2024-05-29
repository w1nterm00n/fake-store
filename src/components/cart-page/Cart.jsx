import './Cart.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useState, useEffect } from 'react';
import CartItem from './CartItem'

function Cart() {

  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => { //getting items, which added in cart
    let cartStorage = localStorage.getItem("cart");
    let newCart = JSON.parse(cartStorage);
    setCart(newCart[0].items);
  }, []);

  return (
    
    <>
      <Navbar page="cart"/>
      <div className='cartWrapper pageWrapper'>
        <ul className='contentSections'>
          <li style={{ width: '50%' }}>Item</li>
          <li style={{ width: '20%' }}>Amount</li>
          <li style={{ width: '30%' }}>Price</li>
        </ul>

        {cart.map((item) => {
            return <CartItem key={item.id} name={item.title} image={item.image}
            price={item.price} amount={0}/>;
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