const Landing = ({ user, store }) => {
  const hottestItem = store.find((item) => item.hottest === true);
  console.log("🚀 ~ Landing ~ hottestItem:", hottestItem);
  return (
    <div>
      {hottestItem ? (
        <div>
          Welcome, {user}. The hottest item is {hottestItem.item} for $
          {hottestItem.price}
        </div>
      ) : (
        <div>Welcome, {user}.</div>
      )}
      <hr />
    </div>
  );
};

export default Landing;
