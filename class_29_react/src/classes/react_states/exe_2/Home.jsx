import Item from "./Item";

const Home = ({ shouldDiscount, store }) => {
  return (
    <div>
      <h4>Store</h4>
      <div>
        {store.map((storeItem) => (
          <Item
            item={storeItem.item}
            price={
              shouldDiscount
                ? (storeItem.price * (1 - storeItem.discount)).toFixed(2)
                : storeItem.price
            }
            key={storeItem.item}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default Home;
