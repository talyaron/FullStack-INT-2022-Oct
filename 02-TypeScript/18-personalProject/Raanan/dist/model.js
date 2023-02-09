"use strict";
exports.__esModule = true;
exports.Movie = void 0;
// Define an array of review objects
var reviews = [
    {
        title: "The Matrix",
        description: "An action-packed sci-fi classic!",
        username: "John Doe",
        id: 1
    },
    {
        title: "Inception",
        description: "A mind-bending thriller!",
        username: "Jane Doe",
        id: 2
    },
];
var MovieList = /** @class */ (function () {
    function MovieList() {
    }
    // Adjust the ranking of a movie
    MovieList.adjustRanking = function (movieId, amount) {
        try {
            var movieIndex = this.movies.findIndex(function (movie) { return movie.id === movieId; });
            if (movieIndex === -1) {
                throw new Error("Movie with id " + movieId + " not found");
            }
            this.movies[movieIndex].ranking += amount;
        }
        catch (error) {
            console.error(error);
        }
    };
    // Sort the movies in the list by either ranking or name
    MovieList.sortMovies = function (sortBy) {
        if (sortBy === void 0) { sortBy = "ranking"; }
        try {
            if (sortBy === "ranking") {
                this.movies.sort(function (a, b) { return b.ranking - a.ranking; });
            }
            else if (sortBy === "name") {
                this.movies.sort(function (a, b) { return (a.name > b.name ? 1 : -1); });
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    // Add a movie to the list
    MovieList.addMovie = function (movie) {
        try {
            this.movies.push(movie);
        }
        catch (error) {
            console.error(error);
        }
    };
    // Get the current list of movies
    MovieList.getMovies = function () {
        try {
            return this.movies;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    };
    MovieList.movies = [];
    return MovieList;
}());
var Movie = /** @class */ (function () {
    /**
    
        Constructor for the Movie class
        @param id Unique identifier for the movie
        @param name Title of the movie
        @param description Description of the movie
        @param ranking Ranking of the movie
        @param poster URL of the movie poster
        */
    function Movie(id, name, description, ranking, poster) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.ranking = ranking;
        this.poster = poster;
    }
    return Movie;
}());
exports.Movie = Movie;
