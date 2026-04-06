import { CartItem, CartOutletContext } from '../types';
import ShopItem from './ShopItem';
import { useOutletContext } from 'react-router-dom';

type PostProps = {
  itemsArray: CartItem[]
}

const Post = ({ itemsArray }: PostProps) => {
  const [cartItems, setCartItems] = useOutletContext<CartOutletContext>();

  const findCartItemAmount = (itemId: number) => {  //search for amount in cart array
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.amount : 0;
  };

  const addItemToCart = (item: CartItem) => {    
    let wasAddedBefore = false;   //will be true, if i add in cart item with same id
    console.log("was added to cart: ", item);
    let newCartItems = cartItems.map(cartItem => {
      if(cartItem.id == item.id) {
          wasAddedBefore = true;
          return { ...cartItem, amount: (cartItem.amount ?? 0) + 1 };
      } else {
          return cartItem;
      }
   });

   if (wasAddedBefore) { //if same item exist - just increase it amount
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
        {itemsArray.map((item: CartItem) => {
            const amount = findCartItemAmount(item.id); // getting actual amount for this item
            return <ShopItem 
                      item={item}
                      key={item.id} 
                      amount={amount}
                      addItemToCart={addItemToCart}
                    />;
        })}
    </>
  );
};

export default Post;
