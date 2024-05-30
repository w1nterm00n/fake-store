import ShopItem from './ShopItem';
import { useOutletContext } from 'react-router-dom';



const Post = ({ itemsArray }) => {
  const [cartItems, setCartItems] = useOutletContext();

  const addItemToCart = (item) => {
    setCartItems(prevCartItems => {
      const newCartItems = [...prevCartItems, item];
      return newCartItems;
    });
  };

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
