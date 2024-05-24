import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import ShopItem from './ShopItem'
import './Shop.css'

function Shop() {

  return (
    <>
      <Navbar/>

      <div className='pageWrapper'>
        <div className='shopItemsContainer'>
          <ShopItem isAdded="true"/>
          <ShopItem isAdded="true"/>
          <ShopItem/>
          <ShopItem/>
          <ShopItem/>
          <ShopItem/>
          <ShopItem/>
          <ShopItem/>
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