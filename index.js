function fetchBooks() {
  // Send a fetch request to the API endpoint
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => {
      // Check if the fetch request was successful
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Call the renderBooks function with the JSON data
      renderBooks(data);
    })
    .catch((error) => {
      // Handle fetch errors
      console.error("Error fetching books:", error);
    });
}
