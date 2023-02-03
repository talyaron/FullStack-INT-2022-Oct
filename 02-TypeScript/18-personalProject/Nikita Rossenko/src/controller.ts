let allUsersString = localStorage.getItem('allUsers');

if (!allUsersString){
    const emptyArray:Array<User> = [];
    localStorage.setItem('allUsers',JSON.stringify(emptyArray))
}

let moviesString = localStorage.getItem('movies');
let moviesSeatsString = localStorage.getItem('moviesSeats');

if (!moviesString && !moviesSeatsString){
    const emptyMoviesArray:Array<Movie> = [];
    const emptyMoviesSeatsArray:Array<MovieSeats> = [];
    for (let i = 1 ; i <=2 ; i++){
        for (let id = 1 ; id<=10 ; id++){
            const movie = new Movie('Movie Name', id, `../public/images/${id}.jpg`,"description");
            const movieSeats = new MovieSeats(id);
            emptyMoviesArray.push(movie);
            emptyMoviesSeatsArray.push(movieSeats);
        }
        localStorage.setItem('movies',JSON.stringify(emptyMoviesArray))
        localStorage.setItem('moviesSeats',JSON.stringify(emptyMoviesSeatsArray))
    }
}