import ShopItem from './ShopItem';
// import './Post.css';

const Post = ({ itemsArray }) => {

  //т.е. если "cart" в localStorage не существует - создаём "cart"
  if (!localStorage.getItem("cart")) {
    var cartStorage = JSON.stringify([
      {
        name: "cart",
        items: [],
      },
    ]);
    localStorage.setItem("cart", cartStorage);
  }
  //card in localStorage


  // function which adds item to localStorage
  const addItemToCart = (item) => {
    //добавить к этому item-у amount
    let cartStorage = localStorage.getItem("cart");
    let cart = JSON.parse(cartStorage);
    cart[0].items.push(item);
    cartStorage = JSON.stringify(cart);
    localStorage.setItem("cart", cartStorage);

    console.log("Item added to cart:", item);
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
