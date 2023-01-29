 function renderMovies() {
    const containerMovie = document.querySelector('.container-movies')! as HTMLDivElement;
    containerMovie.innerHTML = ''
    movies.forEach(movie => {
        containerMovie.innerHTML += `
    <div class="movie" DATA="${movie.name}">
    <div class="img"> <img src="${movie.url}"></div>
    <h3>${movie.name}</h3>
    <p class="description">${movie.des}</p>
    <div class="stars">
    ${giveStar(Number(movie.stars))}
    </div>
    <small>release date: ${movie.releaseDate}</small>
</div>`

    })
}