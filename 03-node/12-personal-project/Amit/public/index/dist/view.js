function renderLoggedInUserName(userName) {
    try {
        var userNameRoot = document.querySelector("#userNameRoot");
        if (!userNameRoot)
            throw new Error("userNameRoot not found");
        userNameRoot.innerText = "welcome " + userName;
    }
    catch (error) {
        console.error(error);
    }
}
function renderMovies() {
    try {
        fetch("/api/movies/get-movies")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var movies = _a.movies;
            var moviesRoot = document.querySelector("#moviesRoot");
            if (!moviesRoot)
                throw new Error("movies root not found on DOM");
            var html = movies.map(function (movie) {
                return "\n          <div class=\"movie\" onclick=\"movieCookie('" + movie._id + "')\">\n            <h2>" + movie.name + "</h2>\n            <p>" + movie.genre + "</p>\n            <p>" + movie.minutes + " minutes</p>\n            <img src = " + movie.img + "></img>\n          </div>\n          ";
            }).join(" ");
            moviesRoot.innerHTML = html;
        });
    }
    catch (error) {
        console.error(error);
    }
}
