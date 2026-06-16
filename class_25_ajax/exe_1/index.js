addEventListener("DOMContentLoaded", () => {
  getBookByISBN(9782806269171);

  function getBookByISBN(ISBN) {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
      });
  }
});
