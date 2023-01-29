function renderMovies() {
    var containerMovie = document.querySelector('.container-movies');
    containerMovie.innerHTML = '';
    movies.forEach(function (movie) {
        containerMovie.innerHTML += "\n    <div class=\"movie\" DATA=\"" + movie.name + "\">\n    <div class=\"img\"> <img src=\"" + movie.url + "\"></div>\n    <h3>" + movie.name + "</h3>\n    <p class=\"description\">" + movie.des + "</p>\n    <div class=\"stars\">\n    " + giveStar(Number(movie.stars)) + "\n    </div>\n    <small>release date: " + movie.releaseDate + "</small>\n</div>";
    });
}
