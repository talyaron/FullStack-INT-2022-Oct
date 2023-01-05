var users = [{
        firstName: "Shlomi",
        lastName: "levi",
        usernumber: 123
    },
    {
        firstName: "racheli",
        lastName: "cohen",
        usernumber: 124
    },
    {
        firstName: "sara",
        lastName: "regev",
        usernumber: 125
    }
];
var movies = [{
        name: "Action-Movie",
        price: 5,
        rentedBy: 123
    },
    {
        name: "Drama-Movie",
        price: 6,
        rentedBy: 124
    },
    {
        name: "Comedy-Movie",
        price: 7,
        rentedBy: 125
    },
];
var usdToNis = function (movie) {
    return (movie.price * 3.53).toFixed(2);
};
var result = usdToNis(movies[1]);
console.log(result);
var haveMovie = function (movie, usernumber) {
    if (movie.rentedBy === usernumber) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].usernumber === usernumber) {
                if (users[i] !== null) {
                    console.log(users[i].firstName + " have the movie " + movie.name);
                }
            }
        }
    }
    else {
        console.log("user with usernumber " + usernumber + " does not has the movie " + movie.name);
    }
};
haveMovie(movies[1], 124);
