var movies = [
    {
        name: "Glass Onion A Knives Out Mystery",
        price: 25.99,
        rentedBy: 1
    },
    {
        name: "Black Panther Wakanda Forever",
        price: 15.99,
        rentedBy: 1
    },
    {
        name: "uncharted",
        price: 10.99,
        rentedBy: 2
    }
];
var users = [
    {
        id: 1,
        firstName: "Shimon",
        lastName: "Or"
    },
    {
        id: 2,
        firstName: "Itay",
        lastName: "Gelberg"
    },
    {
        id: 3,
        firstName: "Simon",
        lastName: "Levi"
    },
    {
        id: 4,
        firstName: "Ayala",
        lastName: "Vilo"
    },
    {
        id: 5,
        firstName: "Udi",
        lastName: "Bron"
    }
];
function dollarToShekel(movieName) {
    try {
        if (movieName == "Glass Onion A Knives Out Mystery") {
            return movies[0].price * 3.5;
        }
        if (movieName == "Black Panther Wakanda Forever") {
            return movies[1].price * 3.5;
        }
        if (movieName == "uncharted") {
            return movies[2].price * 3.5;
        }
    }
    catch (error) {
        console.error("we ha got an error on our hands");
    }
}
var userInput = prompt("please enter a movie name to rent:\n  Glass Onion A Knives Out Mystery\n  Black Panther Wakanda Forever\n  uncharted");
if (typeof userInput === "undefined") {
    alert("error input");
}
var moviePrice = dollarToShekel(userInput);
alert("thank you for choosing the movie  " + userInput + " and it's price in nis is " + moviePrice);
//ex:2
function howRentedMovie(movie, id) {
    if (movie.rentedBy === id) {
        for (var i = 0; i < users.length; i++) {
            var user = null;
            if (users[i].id === id) {
                user = users[i];
            }
            if (user !== null) {
                console.log(user.firstName + " " + user.lastName + " have rented the movie " + movie.name);
            }
        }
    }
}
function howRentedMovie1(movie, id) {
    if (movie.rentedBy === id) {
        for (var i = 0; i < users.length; i++) {
            var user = null;
            if (users[i].id === id) {
                user = users[i];
            }
            if (user !== null) {
                console.log(user.firstName + " " + user.lastName + " have rented the movie " + movie.name);
            }
        }
    }
}
howRentedMovie(movies[1], 1);
howRentedMovie(movies[2], 2);
