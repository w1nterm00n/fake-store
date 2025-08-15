import './ShopItem.css'
import { Link, useOutletContext } from "react-router-dom";
import cart from '../../assets/cart.png';
import { useState, useEffect } from 'react';
import { CartItem, CartOutletContext } from '../types';

type ShopItemProps = {
  item: CartItem,
  addItemToCart: (item: CartItem) => void
}

function ShopItem({ item, addItemToCart }: ShopItemProps) {

  const [, , changeAmount] = useOutletContext<CartOutletContext>();
  const [croppedDescription, setCroppedDescription] = useState("");
  const [isLong, setIsLong] = useState(false); //true if description is longer then 25 words
  //const [isAddedToCart, setIsAdded] = useState(isAdded);

    useEffect(() => {
      function cropDescription(description: string) {
        const wordsArr = description.trim().split(/\s+/);
        if (wordsArr.length > 25) {
          let str = wordsArr.slice(0, 25).join(' ');
          setCroppedDescription(str + "...");
          setIsLong(true);
        } 
      }
      cropDescription(item.description);
    }, [item.description]);
  
  
      return (
        <div className="shopItemWrapper">
          <img className="itemImage" src={item.image} alt="" />
          <p className='itemName'>{item.title}</p>
          <span className='itemCathegory'>{item.category}</span>
          {isLong && (
              <>
                <a href='#!' className='itemDescription'>{croppedDescription}</a>
              </>
            )
          }
          {!isLong && (
              <a href='#!' className='itemDescription'>{item.description}</a>
            )
          }
          <div className="itemPriceAndAmount">
              <span className="itemPrice">{item.price} $</span>
  
              {(item.amount && item.amount > 0) && (
                  <span className='amountCounter'>
                      <button onClick={() => changeAmount(item.id, "-")}>-</button>
                      <input className="amountCounter" type="number" name="amount" value={item.amount} min="1" max="20" step="1" readOnly></input>
                      <button onClick={() => changeAmount(item.id, "+")}>+</button>
                  </span>
                  )
              }
              {(item.amount && item.amount <= 0) && (
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
