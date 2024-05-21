import './Footer.css'
import logo from '../../assets/logo_dark.svg'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className="footerWrapper">
            <footer>
                <Link to="/" className="footerLogo">
                    <img src={logo} alt="fake shop"/>
                </Link>
                <div className="footerLine"></div>
                <ul className='footerMenu'>
                    <li><a href="#!"><img src={facebook} alt="facebook"/></a></li>
                    <li><a href="#!"><img src={instagram} alt="instagram"/></a></li>
                    <li><a href="#!"><img src={twitter} alt="twitter"/></a></li>
                    <li><a href="#!"><img src={youtube} alt="youtube"/></a></li>
                </ul>
            </footer>
        </div>
    )
  }
  
  export default Footer

