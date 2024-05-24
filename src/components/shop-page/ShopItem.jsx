import './ShopItem.css'


function ShopItem({ image, name, cathegory, description, price}) {

    return (
      <div className="shopItemWrapper">
        <img className="itemImage" src={image} alt="" />
        <p className='itemName'>{name}</p>
        <span className='itemCathegory'>{cathegory}</span>
        <p className='itemDescription'>{description}</p>
        <div className="itemPriceAndAmount">
            <span className="itemPrice">{price} $</span>
            <span className='amountCounter'>
                <button>-</button>
                <input className="amountCounter" type="number" name="amount" value="1" min="1" max="20" step="1"></input>
                <button>+</button>
            </span>
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
  };

  export default ShopItem