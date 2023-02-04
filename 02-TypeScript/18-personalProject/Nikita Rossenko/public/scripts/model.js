var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
        this.movies = [];
    }
    return User;
}());
var Movie = /** @class */ (function () {
    function Movie(name, id, image, description) {
        this.name = name;
        this.id = id;
        this.image = image;
        this.description = description;
    }
    return Movie;
}());
var MovieSeats = /** @class */ (function () {
    function MovieSeats(id, seats) {
        this.id = id;
        this.seatsArray = this.seatsCount(seats);
    }
    MovieSeats.prototype.seatsCount = function (seats) {
        var seatsArray = [{}];
        for (var i = 1; i <= seats; i++) {
            var seatObject = { seatNumber: i, selectedBy: '', isFree: true };
            seatsArray.push(seatObject);
        }
        return seatsArray;
    };
    return MovieSeats;
}());
