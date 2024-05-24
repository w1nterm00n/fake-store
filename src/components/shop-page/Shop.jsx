import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import ShopItem from './ShopItem'
import './Shop.css'
import { useState, useEffect } from 'react';




function Shop() {
  const [itemsArray, setItemsArray] = useState([]);

  //fetching all items to rendering them
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
    mode: "cors",
  })
    .then((response) => response.json())
    .then(json=>{
      setItemsArray(json);
    })
    .catch((error) => console.error(error));
  }, []);


  return (
    <>
      <Navbar page="shop"/>

      <div className='pageWrapper'>
        <div className='shopItemsContainer'>

          {itemsArray.map((item) => {
            return <ShopItem key={item.id} name={item.title} image={item.image}
            cathegory={item.cathegory} description={item.description} price={item.price}/>;
          })}
        </div>

        <span className='paginationButtons'>
          <button>
            <div className='triangleContainer-right'>
              <div className='triangle-right'></div>
            </div>
          </button>
          <button>
            <div className='triangleContainer-left'>
              <div className='triangle-left'></div>
            </div>
          </button>
        </span>

        </div>

      <Footer/>
    </>
  )
}

export default Shop