import './CartItem.css'
import trash from '../../assets/trash.png'
function CartItem({ image, name, amount, price}) {


  return (
    <div className='CartItemWrapper'>
        
      <div className='itemDescription' style={{ width: '50%' }}>
        <img src={image} alt="item" className='itemImage'/>
        <span>{name}</span>
      </div>  

      <div className='itemControl' style={{ width: '50%' }}>
        <span className='amountCounter' style={{ width: '40%' }}>
            <button>-</button>
            <input className="amountCounter" type="number" name="amount" value={amount} min="1" max="20" step="1"></input>
            <button>+</button>
        </span>

        <span className="priceAndDeleteBtn" style={{ width: '60%' }}>
            <span style={{ fontWeight: 600 }}>{price} $</span>
            <button className='deleteBtn'><img src={trash} alt="trash bin"/></button>
        </span>
      </div>
    </div>
  )
}

CartItem.defaultProps = {  //значения по дефолту (не применяются)
  image: "https://www.scotsman.com/webimg/b25lY21zOjJiN2Q1NjhlLWI5ZDMtNGM2ZS1iOTFjLTNkYjcwOTE3OGI0NzplNWFkZDUxYy0yZjNiLTRiM2QtOTRjMC04YjllN2VhY2U3Mzg=.jpg?crop=3:2,smart&width=640&quality=65&enable=upscale",
  name: "no name",
  amount: 0,
  price: 0,
};

export default CartItem