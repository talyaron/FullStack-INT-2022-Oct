// control.ts
// Function to adjust the ranking of a movie by its ID
// If the adjustment fails, the error message is logged to the console
function adjustRanking(movieId) {
    try {
        MovieList.adjustRanking(movieId, 1);
        updateMovieListDisplay();
    }
    catch (error) {
        console.error(error);
    }
}
// Function to sort the movie list by either ranking or name
// If the sorting fails, the error message is logged to the console
function sortMovies(sortBy) {
    try {
        MovieList.sortMovies(sortBy);
        updateMovieListDisplay();
    }
    catch (error) {
        console.error(error);
    }
}
// Function to update the display of the movie list
// If the update fails, the error message is logged to the console
function updateMovieListDisplay() {
    try {
        // Selecting the movie list element from the DOM
        var movieListElement = document.querySelector("#movie-list");
        // Checking if the movie list element was found in the DOM
        if (!movieListElement) {
            throw new Error("Unable to find the movie list element in the DOM");
        }
        // Clearing the inner HTML of the movie list element
        movieListElement.innerHTML = "";
        // Iterating over each movie in the movie list
        for (var _i = 0, _a = MovieList.movies; _i < _a.length; _i++) {
            var movie = _a[_i];
            // Creating a movie element for each movie
            var movieElement = createMovieElement(movie);
            // Appending the movie element to the movie list element only if it's not null
            if (movieElement) {
                movieListElement.appendChild(movieElement);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
//  reviews.html----------------------------------------------------------------
// Define the functions that will handle the like and unlike buttons
function likeReview(id) {
    console.log("Like review with ID " + id);
}
function unlikeReview(id) {
    console.log("Unlike review with ID " + id);
}
