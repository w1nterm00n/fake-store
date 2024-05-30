import Footer from '../footer/Footer'
import storeImage from '../../assets/storeImage.jpg'
import cartImage from '../../assets/cartImage32.png'
import './Home.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';



  let randomItem = {
    name: "Item name",
    category: "cathegory",
    description: "blah blah blah",
    image: {storeImage},
  }


function Home() {
  const [item, setItem] = useState(randomItem);

  //fetching item for featuredProduct section
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/13", {
    mode: "cors",
  })
    .then((response) => response.json())
    .then(json=>{
      console.log(json);
      let newItem = {
        name: json.title,
        category: json.category,
        description: json.description,
        image: json.image,
      }
      setItem(newItem);
    })
    .catch((error) => console.error(error));
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
            <button className='blueButton'>
              <Link to="/shop">Shop</Link>
            </button>
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
            <h4 className='outline'>{item.name}</h4>
            <p className='cathegory'>{item.category}</p>
            <p className='description'>{item.description}</p>
          </div>


          <div className='imageWrapper'>
            <img src={item.image} alt="item image" />
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Home