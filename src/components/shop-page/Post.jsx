import ShopItem from './ShopItem';
import { useOutletContext } from 'react-router-dom';



const Post = ({ itemsArray }) => {
  const [itemsAmount, setItemsAmount] = useOutletContext();



  // function which adds item to localStorage
  const addItemToCart = (item) => {
    // let cartStorage = localStorage.getItem("cart");
    // let cart = JSON.parse(cartStorage);
    // cart[0].items.push(item);
    // cartStorage = JSON.stringify(cart);
    // localStorage.setItem("cart", cartStorage);
  
    setItemsAmount(+itemsAmount + 1);
  };
  // function which adds item to localStorage


  return (
    <>
        {itemsArray.map((item) => {
            return <ShopItem key={item.id} item={item} name={item.title} image={item.image}
            category={item.category} description={item.description} price={item.price}
            addItemToCart={addItemToCart}/>;
        })}
    </>
  );
};

export default Post;
