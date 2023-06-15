

function renderLoggedInUserName(userName) {
  try {
    const userNameRoot: HTMLDivElement | null = document.querySelector("#userNameRoot")
    if (!userNameRoot) throw new Error("userNameRoot not found")

    userNameRoot.innerText = `welcome ${userName}`
  } catch (error) {
    console.error(error)
  }
}

function renderMovies() {
  try {
    fetch("/api/movies/get-movies")
      .then((res) => res.json())
      .then(({ movies }) => {
        const moviesRoot: HTMLDivElement | null = document.querySelector("#moviesRoot")
        if (!moviesRoot) throw new Error("movies root not found on DOM")
        const html = movies.map((movie) => {
          return `
          <div class="movie" onclick="movieCookie('${movie._id}')">
            <h2>${movie.name}</h2>
            <p>${movie.genre}</p>
            <p>${movie.minutes} minutes</p>
            <img src = ${movie.img}></img>
          </div>
          `
        }).join(" ")

        moviesRoot.innerHTML = html
      });
  } catch (error) {
    console.error(error)
  }
}
