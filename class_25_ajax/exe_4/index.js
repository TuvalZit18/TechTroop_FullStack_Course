addEventListener("DOMContentLoaded", () => {
  const inputImage = document.querySelector(".imageInput");
  const btnSearch = document.querySelector(".btnSearch");
  const gifIMG = document.querySelector(".gifIMG");
  btnSearch.addEventListener("click", () => {
    getImage(inputImage.value);
  });
  function getImage(query) {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=SuzQhyWk24kWT7bKgB9MZiXqHmEL9Ms0&q=${query}&limit=1&rating=g`,
      )
      .then(
        (response) =>
          (gifIMG.src = response.data.data[0].images.fixed_height.url),
      )
      .catch((error) => console.error("Error fetching gif:", error));
  }
});
