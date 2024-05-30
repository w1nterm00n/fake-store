import Footer from '../footer/Footer'
import Pagination from './Pagination'
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
      let items = addAmountToObjects(json) //add "amount" prop to every item
      setItemsArray(items);
    })
    .catch((error) => console.error(error));
  }, []);

  // Scroll to top of the page, when currentPage is change
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [currentPage]);

  //function adds "amount" prop to every object in array
  function addAmountToObjects(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      console.error("Input is not a non-empty array");
      return arr;
    }
    const newArr = arr.map(obj => {
      const newObj = { ...obj };
      newObj.amount = 0;
      return newObj;
    });
    return newArr;
  }


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = itemsArray.slice(indexOfFirstPost, indexOfLastPost);
  //currentPosts - is the array of elements, that will display on this page

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  return (
    <>
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