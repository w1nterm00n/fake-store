import ShopItem from './ShopItem';
import { useOutletContext } from 'react-router-dom';



const Post = ({ itemsArray }) => {
  const [cartItems, setCartItems] = useOutletContext();

  const findCartItemAmount = (itemId) => {  //search for amount in cart array
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.amount : 0;
  };

  const addItemToCart = (item) => {    
    let wasAddedBefore = false;   //will be true, if i add in cart item with same id
    let newCartItems = cartItems.map(cartItem => {
      if(cartItem.id == item.id) {
          wasAddedBefore = true;
          return { ...cartItem, amount: cartItem.amount + 1 };
      } else {
          return cartItem;
      }
   });

   if (wasAddedBefore === true) { //if same item exist - just increase it amount
    setCartItems(newCartItems);
   } else {   //if not exist - create new item with amount 1
      const newItem = { ...item, amount: 1 };
      setCartItems(prevCartItems => {
        const newCartItems = [...prevCartItems, newItem];
        return newCartItems;
      });
   }
  };

  return (
    <>
        {itemsArray.map((item) => {
            const amount = findCartItemAmount(item.id); // getting actual amount for this item
            return <ShopItem 
                      key={item.id} 
                      item={item} 
                      name={item.title} 
                      image={item.image}
                      category={item.category} 
                      description={item.description} 
                      price={item.price}
                      amount={amount} 
                      addItemToCart={addItemToCart}
                    />;
        })}
    </>
  );
};

export default Post;
