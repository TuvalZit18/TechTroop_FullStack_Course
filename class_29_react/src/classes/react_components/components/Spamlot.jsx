import Spam from "./Spam";

const Spamalot = () => {
  const count = 500;
  return [...Array(count)].map((_, index) => <Spam key={index} />);
};
export default Spamalot;
