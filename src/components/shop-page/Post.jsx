import ShopItem from './ShopItem';
// import './Post.css';

const Post = ({ itemsArray }) => {

  return (
    <>
        {itemsArray.map((item) => {
            return <ShopItem key={item.id} name={item.title} image={item.image}
            cathegory={item.cathegory} description={item.description} price={item.price}/>;
        })}


      {/* {posts.map((data, index) => (
        <div className='list' key={index}>
          <p>{data.title}</p>
        </div>
      ))} */}
    </>
  );
};

export default Post;
