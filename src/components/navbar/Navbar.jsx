import './Navbar.css'
import logo from '../../assets/logo_light.svg'
import { Link, Outlet } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from "react-router-dom";

function Navbar() {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  function changeAmount (item, operator) {  //when user pressing + or - buttons to increment/decrement
    let newCartItems = cartItems.map(cartItem => {
      if(cartItem.id == item.id) {
        if (operator == "+") {
          return { ...cartItem, amount: cartItem.amount + 1 };
        } else if (operator == "-") {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
      } else {
          return cartItem;
      }
   });
   setCartItems(newCartItems);
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
        <Outlet context={[cartItems, setCartItems, changeAmount]}/>
      </div>
      </>
    )
  }
  export default Navbar

