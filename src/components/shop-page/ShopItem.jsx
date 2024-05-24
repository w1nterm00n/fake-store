import './ShopItem.css'
import { Link } from "react-router-dom";
import cart from '../../assets/cart.png';

function ShopItem({ image, name, cathegory, description, price, isAdded}) {

    return (
      <div className="shopItemWrapper">
        <img className="itemImage" src={image} alt="" />
        <p className='itemName'>{name}</p>
        <span className='itemCathegory'>{cathegory}</span>
        <p className='itemDescription'>{description}</p>
        <div className="itemPriceAndAmount">
            <span className="itemPrice">{price} $</span>

            {isAdded && (
                <span className='amountCounter'>
                    <button>-</button>
                    <input className="amountCounter" type="number" name="amount" value="1" min="1" max="20" step="1"></input>
                    <button>+</button>
                </span>
                )
            }
            {!isAdded && (
                <button className='addToCart'>
                    <Link to="#!">Add to cart</Link> 
                    <img src={cart} alt="cart icon" />
                </button>
                )
            }
        </div>
      </div>
    )
  }

  ShopItem.defaultProps = {  //значения по дефолту
    image: "https://www.scotsman.com/webimg/b25lY21zOjJiN2Q1NjhlLWI5ZDMtNGM2ZS1iOTFjLTNkYjcwOTE3OGI0NzplNWFkZDUxYy0yZjNiLTRiM2QtOTRjMC04YjllN2VhY2U3Mzg=.jpg?crop=3:2,smart&width=640&quality=65&enable=upscale",
    name: "no name",
    cathegory: "no cathegory",
    description: "no description",
    price: "100",
    isAdded: false,
  };

  export default ShopItem