import './ShopItem.css'
import { Link } from "react-router-dom";
import cart from '../../assets/cart.png';
import { useState, useEffect } from 'react';

function ShopItem({ item, image, name, category, description, price, amount, addItemToCart}) {

  const [croppedDescription, setCroppedDescription] = useState("");
  const [isLong, setIsLong] = useState(false); //true if description is longer then 25 words
  //const [isAddedToCart, setIsAdded] = useState(isAdded);

    useEffect(() => {
      function cropDescription(description) {
        const wordsArr = description.trim().split(/\s+/);
        if (wordsArr.length > 25) {
          let str = wordsArr.slice(0, 25).join(' ');
          setCroppedDescription(str + "...");
          setIsLong(true);
        } 
      }
  
      cropDescription(description);
    }, [description]);
  
  
      return (
        <div className="shopItemWrapper">
          <img className="itemImage" src={image} alt="" />
          <p className='itemName'>{name}</p>
          <span className='itemCathegory'>{category}</span>
          {isLong && (
              <>
                <a href='#!' className='itemDescription'>{croppedDescription}</a>
              </>
            )
          }
          {!isLong && (
              <a href='#!' className='itemDescription'>{description}</a>
            )
          }
          <div className="itemPriceAndAmount">
              <span className="itemPrice">{price} $</span>
  
              {(amount > 0) && (
                  <span className='amountCounter'>
                      <button>-</button>
                      <input className="amountCounter" type="number" name="amount" value={amount} min="1" max="20" step="1"></input>
                      <button>+</button>
                  </span>
                  )
              }
              {(amount <= 0) && (
                  <button className='addToCart' 
                  onClick={() => addItemToCart(item)}>
                      <Link to="#!">Add to cart</Link> 
                      <img src={cart} alt="cart icon" />
                  </button>
                  )
              }
          </div>
        </div>
      )
    }
  
    ShopItem.defaultProps = {  //значения по дефолту (не применяются)
      image: "https://www.scotsman.com/webimg/b25lY21zOjJiN2Q1NjhlLWI5ZDMtNGM2ZS1iOTFjLTNkYjcwOTE3OGI0NzplNWFkZDUxYy0yZjNiLTRiM2QtOTRjMC04YjllN2VhY2U3Mzg=.jpg?crop=3:2,smart&width=640&quality=65&enable=upscale",
      name: "no name",
      cathegory: "no cathegory",
      description: "no description",
      price: "100",
      amount: 0,
    };
  
    export default ShopItem
