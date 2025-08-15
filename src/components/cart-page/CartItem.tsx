import './CartItem.css'
import trash from '../../assets/trash.png'
import { useOutletContext } from "react-router-dom";
import type { CartItem, CartOutletContext } from '../types';

type CartItemProps = {
  item: CartItem,
  image: string,
  name: string,
  amount: number,
  price: number
}

function CartItem({ item, image, name, amount, price}: CartItemProps) {

  const [, , changeAmount, deleteItem] = useOutletContext<CartOutletContext>();
  
  return (
    <div className='CartItemWrapper'>
        
      <div className='itemDescription' style={{ width: '50%' }}>
        <img src={image} alt="item" className='itemImage'/>
        <span>{name}</span>
      </div>  

      <div className='itemControl' style={{ width: '50%' }}>
        <span className='amountCounter' style={{ width: '40%' }}>
            <button onClick={() => changeAmount(item.id, "-")}>-</button>
            <input className="amountCounter" type="number" name="amount" value={amount} min="1" max="20" step="1" readOnly></input>
            <button onClick={() => changeAmount(item.id, "+")}>+</button>
        </span>

        <span className="priceAndDeleteBtn" style={{ width: '60%' }}>
            <span style={{ fontWeight: 600 }}>{price} $</span>
            <button className='deleteBtn' onClick={() => deleteItem(item.id)}>
              <img src={trash} alt="trash bin"/>
            </button>
        </span>
      </div>
    </div>
  )
}

export default CartItem