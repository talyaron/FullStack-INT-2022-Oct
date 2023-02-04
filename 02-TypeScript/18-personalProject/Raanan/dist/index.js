var displayMovies = function (movies) {
    var movieList = document.querySelector("#movieList");
    movieList.innerHTML = "";
    movies.forEach(function (movie) {
        var movieItem = document.createElement("li");
        movieItem.innerHTML = "\n        <h3>" + movie.title + "</h3>\n        <p>" + movie.description + "</p>\n        <a href=\"#\">Read Review</a>\n        <button class=\"editMovie\">Edit</button>\n      ";
        movieItem.querySelector(".editMovie").addEventListener("click", function () {
            var newTitle = prompt("Enter the new title:");
            var newDescription = prompt("Enter the new description:");
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
