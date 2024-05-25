import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Pagination from './Pagination'
// import ShopItem from './ShopItem'
import Post from './Post'
import './Shop.css'
import { useState, useEffect } from 'react';




function Shop() {
  const [itemsArray, setItemsArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

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


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = itemsArray.slice(indexOfFirstPost, indexOfLastPost);
  //массив эл-тов, которые отобразятся на этой стр

  const handlePagination = (pageNumber) => {
    console.log("yaay ", pageNumber);
    setCurrentPage(pageNumber);
  }


  return (
    <>
      <Navbar page="shop"/>

      <div className='pageWrapper'>
        <div className='shopItemsContainer'>
          <Post itemsArray={currentPosts}/>
        </div>
        <Pagination length={itemsArray.length} postsPerPage={postsPerPage}
        handlePagination={handlePagination} currentPage={currentPage} />


        </div>

      <Footer/>
    </>
  )
}

export default Shop