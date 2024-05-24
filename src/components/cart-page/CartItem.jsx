import './CartItem.css'
import trash from '../../assets/trash.png'
function CartItem() {


  return (
    <div className='CartItemWrapper'>
        
      <div className='itemDescription' style={{ width: '50%' }}>
        <img src={trash} alt="item" className='itemImage'/>
        <span>Item name blah blah</span>
      </div>  

      <div className='itemControl' style={{ width: '50%' }}>
        <span className='amountCounter' style={{ width: '40%' }}>
            <button>-</button>
            <input className="amountCounter" type="number" name="amount" value="1" min="1" max="20" step="1"></input>
            <button>+</button>
        </span>

        <span className="priceAndDeleteBtn" style={{ width: '60%' }}>
            <span style={{ fontWeight: 600 }}>100 $</span>
            <button className='deleteBtn'><img src={trash} alt="trash bin"/></button>
        </span>
      </div>
    </div>
  )
}

export default CartItem