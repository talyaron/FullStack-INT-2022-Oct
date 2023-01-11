var movies = [
    {
        title: "Harry Potter",
        price: 30,
        rentedBy: 1
    },
    {
        title: "Lord of the rings",
        price: 20,
        rentedBy: 2
    }
];
var users = [
    {
        id: 1,
        firstName: "Lior",
        lastName: "Grishin"
    },
    {
        id: 2,
        firstName: "Itay",
        lastName: "Gelberg"
    },
    {
        id: 3,
        firstName: "Karin",
        lastName: "Levi"
    },
    {
        id: 4,
        firstName: "Ayala",
        lastName: "Perolovich"
    },
    {
        id: 5,
        firstName: "Uriel",
        lastName: "Bargil"
    }
];
function usdToNis(movie) {
    return (movie.price * 3.53).toFixed(2);
}
// exercise 2
function haveMovie(movie, id) {
    if (movie.rentedBy === id) {
        for (var i = 0; i < users.length; i++) {
            var user = null;
            if (users[i].id === id) {
                user = users[i];
            }
            if (user !== null) {
                console.log(user.firstName + " " + user.lastName + " have the movie " + movie.title);
            }
        }
    }
    else {
        console.log("User with id: " + id + " doesn't have the movie " + movie.title);
    }
}
haveMovie(movies[0], 1);
