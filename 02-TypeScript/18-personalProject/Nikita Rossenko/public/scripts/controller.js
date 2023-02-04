if (!allUsersString) {
    var emptyArray = [];
    localStorage.setItem('allUsers', JSON.stringify(emptyArray));
}
var moviesString = localStorage.getItem('movies');
var moviesSeatsString = localStorage.getItem('moviesSeats');
if (!moviesString && !moviesSeatsString) {
    var emptyMoviesArray = [];
    var emptyMoviesSeatsArray = [];
    for (var id = 1; id <= 10; id++) {
        var movie = new Movie('Movie Name', id, "../public/images/" + id + ".jpg", "Description");
        var movieSeats = new MovieSeats(id, 48);
        emptyMoviesArray.push(movie);
        emptyMoviesSeatsArray.push(movieSeats);
        localStorage.setItem('movies', JSON.stringify(emptyMoviesArray));
        localStorage.setItem('moviesSeats', JSON.stringify(emptyMoviesSeatsArray));
    }
}
