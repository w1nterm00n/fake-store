import './Navbar.css'
import logo from '../../assets/logo_light.svg'
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <>
      <div className="navbarWrapper">
        <header>
            <Link to="/"><img src={logo} alt="fake shop"/></Link>
            <div className="navbarLine"></div>
            <ul className="navbarMenu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li className="cardLi">
                <Link to="/cart">Cart</Link>
                    <div className="displayItemsAmount">2</div> 
                </li>
            </ul>
        </header>
      </div>
      </>
    )
  }
  
  export default Navbar

