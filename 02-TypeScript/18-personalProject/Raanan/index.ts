const displayMovies = (movies: Movie[]) => {
  const movieList: Element | null = document.querySelector("#movieList");
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const movieItem: Element | null = document.createElement("li");
    movieItem.innerHTML = `
      <h3>${movie.title}</h3>
      <p>${movie.description}</p>
      <a href="#">Read Review</a>
      <button class="editMovie">Edit</button>
    `;
    movieItem.querySelector(".editMovie").addEventListener("click", () => {
      const newTitle = prompt("Enter the new title:");
      const newDescription = prompt("Enter the new description:");
      if (newTitle && newDescription) {
        movie.title = newTitle;
        movie.description = newDescription;
        displayMovies(latestMovies);
      }
    });
    movieList.appendChild(movieItem);
  });
};

displayMovies(latestMovies);