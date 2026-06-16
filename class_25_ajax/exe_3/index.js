addEventListener("DOMContentLoaded", () => {
  getBooks();

  function getBooks() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=40`,
      )
      .then((response) =>
        response.data.items.forEach((item) => {
          console.log(
            `Title: ${item.volumeInfo.title}.\nAuthors: ${item.volumeInfo.authors}\nISBN: ${item.volumeInfo.industryIdentifiers}.`,
          );
        }),
      )
      .catch((error) => {
        console.error("Error fetching book:", error);
      });
  }
});
