addEventListener("DOMContentLoaded", () => {
  getBook("isbn", 9789814561778);
  getBook("title", "How to Win Friends and Influence People");
  function getBook(type, value) {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${type}:${value}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
      });
  }
});
