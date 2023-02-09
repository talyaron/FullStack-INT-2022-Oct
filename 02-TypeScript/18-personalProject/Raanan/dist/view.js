"use strict";
// view.ts
exports.__esModule = true;
exports.handleRankingButtonClick = exports.createMovieListElement = exports.createMovieElement = exports.displayMovieList = void 0;
// Displays the movie list on the page by updating the innerHTML of the `movieListElement` and adding click event listeners to the ranking buttons in the `rankingBar`.
function displayMovieList(MovieList, rankingBar, movieListElement) {
    try {
        // Clears the current content of the `movieListElement`.
        movieListElement.innerHTML = "";
        // Adds the movie elements to the `movieListElement`.
        for (var _i = 0, MovieList_1 = MovieList; _i < MovieList_1.length; _i++) {
            var movie = MovieList_1[_i];
            var movieElement = createMovieElement(movie);
            movieListElement.appendChild(movieElement);
        }
        // Adds click event listeners to the ranking buttons in the `rankingBar`.
        var rankingElements = rankingBar.querySelectorAll("button");
        for (var _a = 0, rankingElements_1 = rankingElements; _a < rankingElements_1.length; _a++) {
            var rankingElement = rankingElements_1[_a];
            rankingElement.addEventListener("click", handleRankingButtonClick(MovieList, rankingBar, movieListElement));
        }
    }
    catch (error) {
        console.error("Error displaying movie list:", error);
    }
}
exports.displayMovieList = displayMovieList;
// Creates a HTML element for a single movie
function createMovieElement(movie) {
    try {
        // Create the main movie container element
        var movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        // Create the poster element and set its attributes
        var posterElement = document.createElement("img");
        posterElement.src = movie.poster;
        posterElement.alt = "Poster for " + movie.name;
        movieElement.appendChild(posterElement);
        // Create the title element and set its inner text
        var titleElement = document.createElement("h3");
        titleElement.innerText = movie.name;
        movieElement.appendChild(titleElement);
        // Create the description element and set its inner text
        var descriptionElement = document.createElement("p");
        descriptionElement.innerText = movie.description;
        movieElement.appendChild(descriptionElement);
        // Create the ranking element and set its inner text
        var rankingElement = document.createElement("p");
        rankingElement.innerText = "Ranking: " + movie.ranking;
        movieElement.appendChild(rankingElement);
        return movieElement;
    }
    catch (error) {
        console.error("Error creating movie element:", error);
        return null;
    }
}
exports.createMovieElement = createMovieElement;
// Creates a HTML element that represents the entire movie list
function createMovieListElement(movies) {
    try {
        // Create a div element to represent the movie list
        var movieListElement = document.createElement("div");
        movieListElement.id = "movie-list";
        // Loop through each movie in the list
        for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
            var movie = movies_1[_i];
            // Create a HTML element for each movie
            var movieElement = createMovieElement(movie);
            if (!movieElement) {
                return null;
            }
            // Append the movie element to the movie list element
            movieListElement.appendChild(movieElement);
        }
        // Return the movie list element
        return movieListElement;
    }
    catch (error) {
        // Log an error message if something goes wrong
        console.error("Error creating movie list element:", error);
        return null;
    }
}
exports.createMovieListElement = createMovieListElement;
// Handles the ranking button click event and updates the movie ranking
function handleRankingButtonClick(movieList, rankingBar, movieListElement) {
    return function (event) {
        try {
            // Get the target element that was clicked
            var target = event.target;
            // Get the movie id from the target element's data-movie-id attribute
            var movieIdString = target.getAttribute("data-movie-id");
            // Validate that movie id string is a valid number
            if (!movieIdString || isNaN(Number(movieIdString))) {
                console.error("Error: Invalid movie id.");
                return;
            }
            // Convert the movie id string to a number
            var movieId_1 = Number(movieIdString);
            // Prompt the user to enter a new ranking
            var newRankingString = prompt("Enter new ranking:");
            // Validate that the new ranking string is a valid number
            if (!newRankingString || isNaN(Number(newRankingString))) {
                alert("Invalid ranking value. Please enter a number.");
                return;
            }
            // Convert the new ranking string to a number
            var newRanking = Number(newRankingString);
            // Find the movie in the list
            var movie = movieList.find(function (movie) { return movie.id.toString() === movieId_1.toString(); });
            if (!movie) {
                console.error("Error: Could not find movie in list.");
                return;
            }
            // Update the movie's ranking
            movie.ranking = newRanking;
            // Redisplay the movie list
            displayMovieList(movieList, rankingBar, movieListElement);
        }
        catch (error) {
            console.error("Error handling ranking button click:", error);
        }
    };
}
exports.handleRankingButtonClick = handleRankingButtonClick;
// reviews.ts----------------------------------------------------------------
// Import the array of review objects from the Model
var Model_1 = require("./Model");
// Get a reference to the element that will display the reviews
var reviewList = document.querySelector(".review-list");
// Loop through the array of reviews and generate the HTML for each one
Model_1.reviews.forEach(function (review) {
    var reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    var titleElement = document.createElement("h3");
    titleElement.textContent = review.title;
    reviewElement.appendChild(titleElement);
    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = review.description;
    reviewElement.appendChild(descriptionElement);
    var usernameElement = document.createElement("p");
    usernameElement.textContent = review.username;
    reviewElement.appendChild(usernameElement);
});
