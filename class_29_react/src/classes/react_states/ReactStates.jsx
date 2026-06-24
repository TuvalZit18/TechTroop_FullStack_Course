import { useState } from "react";
import ClassLayout from "../template/ClassLayout";
import Hudini from "./exe_1/Hudini";
import Page from "./exe_2/Page";

const ReactStates = () => {
  const [data, setData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: true,
    currentPage: "Landing",
  });
  return (
    <div>
      <ClassLayout name="React States">
        <Hudini />
        <Page data={data} />
        <button
          onClick={() =>
            setData({
              ...data,
              currentPage: data.currentPage === "Landing" ? "Home" : "Landing",
            })
          }
        >
          Change Page
        </button>
      </ClassLayout>
    </div>
  );
};

export default ReactStates;
