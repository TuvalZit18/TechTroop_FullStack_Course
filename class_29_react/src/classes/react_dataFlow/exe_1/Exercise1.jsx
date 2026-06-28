import { useState } from "react";
import "./Exercise1.css";
const Exercise1 = () => {
  const [data, setData] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0,
  });
  const handlePreviousImage = () => {
    const currentImage =
      data.currentImg - 1 < 0 ? data.images.length - 1 : data.currentImg - 1;
    setData({
      ...data,
      currentImg: currentImage % data.images.length,
    });
  };
  const handleNextImage = () => {
    const currentImage = data.currentImg + 1;
    setData({
      ...data,
      currentImg: currentImage % data.images.length,
    });
  };
  return (
    <div>
      <button onClick={handlePreviousImage}>Previous</button>
      <img src={data.images[data.currentImg]} />
      <button onClick={handleNextImage}>Next</button>
    </div>
  );
};

export default Exercise1;
