const Item = ({ item, price }) => {
  return <div>{`${item}: $${price}`}</div>;
};

export default Item;
