import './Navbar.css'
import logo from '../../assets/logo_light.svg'



function Navbar() {
    return (
      <>
      <div className="navbarWrapper">
        <header>
            <a href="/"><img src={logo} alt="fake shop"/></a>
            <div className="navbarLine"></div>
            <ul className="navbarMenu">
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li className="cardLi">
                    <a href="/card">Card</a> 
                    <div className="displayItemsAmount">2</div> 
                </li>
            </ul>
        </header>
      </div>
      </>
    )
  }
  
  export default Navbar

