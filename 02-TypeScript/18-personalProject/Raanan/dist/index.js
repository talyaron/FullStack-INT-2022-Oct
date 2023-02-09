// index.ts
var model_1 = require("./model");
var view_1 = require("./view");
// declare movieList variable of type MovieList
var movieList;
// wait for the window to load, then execute the code inside
window.addEventListener("load", function () {
    try {
        // create a new instance of MovieList
        movieList = new MovieList();
        // initialize the movie list with pre-defined movies
        MovieList.movies = [
            new Movie("1", "The Shawshank Redemption", "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", 9.2, "shawshank.jpg"),
            new Movie("2", "The Godfather", "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", 9.2, "godfather.jpg"),
            new Movie("3", "The Godfather: Part II", "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.", 9.0, "godfather2.jpg"),
            new Movie("4", "The Dark Knight", "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.", 9.0, "darkknight.jpg"),
            new Movie("5", "12 Angry Men", "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.", 8.9, "12angrymen.jpg"),
        ];
        // get the movie container element
        var movieContainer_1 = document.getElementById('movie-container');
        // check if the movie container element exists
        if (movieContainer_1) {
            // loop through each movie and render the movie element in the movie container
            MovieList.movies.forEach(function (movie) {
                try {
                    // create a movie element using the createMovieElement method from the view module
                    var movieElement = view_1.createMovieElement(movie);
                    // check if the movie element is not null
                    if (movieElement) {
                        // append the movie element to the movie container
                        movieContainer_1.appendChild(movieElement);
                    }
                }
                catch (error) {
                    console.error(error);
                }
            });
        }
    }
    catch (error) {
        console.error(error);
    }
});
