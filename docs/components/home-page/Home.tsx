import Footer from '../footer/Footer'
import storeImage from '../../assets/storeImage.jpg'
import cartImage from '../../assets/cartImage32.png'
import './Home.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ApiProduct, Item } from '../types';

  const demoItem: Item = {
    title: "Item name",
    category: "category",
    description: "no description",
    image: storeImage,
  }

  //mapper
  const toItem = (p: ApiProduct): Item => ({
      title: p.title || "Unnamed",
      category: p.category || "unknown",
      description: p.description || "no description",
      image: p.image || storeImage,
  });
  

function Home(): JSX.Element {
  const [item, setItem] = useState<Item>(demoItem);

  //fetching item for featuredProduct section
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/13", {
    mode: "cors",
  })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json() as Promise<ApiProduct>
    })
    .then(json=>{ 
      const mapped = toItem(json)
      setItem(mapped);
    })
    .catch((error: unknown) => {
      if (error instanceof Error) console.error(error.message);
      else console.error(error);
    });
  }, []);



  return (
    <>
    {/* mainDescription */}
      <div className='pageWrapper'>
        <section className='mainDescription'>
          <div className='sectionContent'>
            <h1>Durable. Practical. Everyday.</h1>
            <p className='description'>Our store offers a wide range of well-crafted, sensible  
              items designed to fit your 
              everyday needs without compromising on  quality or style.
            </p>
              <Link className='blueButton' to="/shop">Shop</Link>
          </div>

          <div className='imageWrapper'>
            <img src={storeImage} alt="store image" />
          </div>
        </section>
      </div>

      {/* whyChooseUs */}
        <div className='whyChooseUs pageWrapper'>
            <div className='imageWrapper'>
              <img src={cartImage} alt="cotton image" />
            </div>

            <div className='whyChooseUsContent'>
              <h3 className='outline'>Why Choose us?</h3>
              <p className='description'>
              Explore our eclectic assortment of unique and random items. 
              From quirky gadgets and novelty gifts to veryday essentials,
               our random stuff section is full of surprises. 
               Perfect for gift-giving or simply treating yourself,
              you'll never know what hidden gems you might discover.
              </p>
            </div>
        </div>


      {/* featuredProduct */}
      <div className='pageWrapper'>
        <section className='featuredProduct'>
          <div className='featuredProductContent'>
            <h4 className='outline'>{item.title}</h4>
            <p className='category'>{item.category}</p>
            <p className='description'>{item.description}</p>
          </div>


          <div className='imageWrapper'>
            <img src={item.image || storeImage} alt="item image" />
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Home