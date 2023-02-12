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
        var movie = new Movie('Movie Name', id, "../public/images/" + id + ".jpg", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dicta at officia facilis eligendi maiores, aperiam expedita nemo cumque, sequi explicabo. Quaerat nisi porro pariatur vitae, earum facilis obcaecati minus?", 'none');
        var movieSeats = new MovieSeats(id, 48);
        emptyMoviesArray.push(movie);
        emptyMoviesSeatsArray.push(movieSeats);
        localStorage.setItem('movies', JSON.stringify(emptyMoviesArray));
        localStorage.setItem('moviesSeats', JSON.stringify(emptyMoviesSeatsArray));
    }
}
