var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var movieList = [
    {
        name: "Home Alone",
        price: 12.99,
        availableForRent: true
    },
    {
        name: "Avatar",
        price: 9.99,
        availableForRent: false
    },
    {
        name: "The Avengers",
        price: 14.99,
        availableForRent: false
    },
    {
        name: "Jurrasic Park",
        price: 6.99,
        availableForRent: false
    },
];
var singleUser = {
    name: 'Karen',
    movies: movieList
};
// let answer = prompt('Welcome to Blockbuster, we currently offer the following movies: Home Alone, Avatar, The Avengers, Jurrasic Park.')
var moviePrice = function (movie) {
    var priceInShekel = movie.price * 3.53;
    return priceInShekel;
};
var movieRenter = function (movie, user) {
    return __assign(__assign({}, movie), { renter: user });
};
movieRenter(movieList[0], singleUser);
