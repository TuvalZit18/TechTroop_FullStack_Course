import Landing from "./Landing";
import Home from "./Home";

const Page = ({ data }) => {
  if (data.currentPage === "Landing")
    return <Landing store={data.store} user={data.user} />;
  if (data.currentPage === "Home")
    return <Home store={data.store} shouldDiscount={data.shouldDiscount} />;
};

export default Page;
