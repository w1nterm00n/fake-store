import './Navbar.css'
import logo from '../../assets/logo_light.svg'
import { Link, Outlet } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { CartItem, Operator } from '../types';

function Navbar(): JSX.Element {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const location = useLocation();

  function changeAmount (item: CartItem, operator: Operator) {  //when user pressing + or - buttons to increment/decrement
    const newCartItems: CartItem[] = cartItems.map(cartItem => {
      if(cartItem.id === item.id) {
        if (operator === "+") {
          return { ...cartItem, amount: cartItem.amount ? cartItem.amount + 1 : 1 };
        } else if (operator === "-") {
          return { ...cartItem, amount: cartItem.amount ? cartItem.amount - 1 : 0 };
        }
      } 
      return cartItem;
   });
   setCartItems(newCartItems);
  }


  function deleteItem(item: CartItem) {
      setCartItems(prev => prev.filter(ci => ci.id !== item.id));
  }

    return (
      <>
      <div className="navbarWrapper">
        <header>
            <Link to="/"><img src={logo} alt="fake shop"/></Link>
            <div className="navbarLine"></div>
            <ul className="navbarMenu">

                <li><Link to="/" className={location.pathname === "/" ? "colouredLink" : ""}>Home</Link></li>
                <li><Link to="/shop" className={location.pathname === "/shop" ? "colouredLink" : ""}>Shop</Link></li>

                <li className="cardLi">
                  <Link to="/cart" className={location.pathname === "/cart" ? "colouredLink" : ""}>Cart</Link>
                  <div className="displayItemsAmount">{cartItems.length}</div> 
                </li>

            </ul>
        </header>
      </div>

      <div>
        <Outlet context={[cartItems, setCartItems, changeAmount, deleteItem]}/>
        {/* useOutletContext — это хук из react-router-dom, который позволяет достать данные, переданные родительским <Outlet> из маршрутов. */}
      </div>
      </>
    )
  }
  export default Navbar

