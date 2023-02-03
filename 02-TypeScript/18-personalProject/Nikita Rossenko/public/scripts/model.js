var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
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
    function MovieSeats(id) {
        this.id = id;
        this.seats = [
            { 0: "" },
            { 1: "" },
            { 2: "" },
            { 3: "" },
            { 4: "" },
            { 5: "" },
            { 6: "" },
            { 7: "" },
            { 8: "" },
            { 9: "" },
            { 10: "" },
            { 11: "" },
            { 12: "" },
            { 13: "" },
            { 14: "" },
            { 15: "" },
            { 16: "" },
            { 17: "" },
            { 18: "" },
            { 19: "" },
            { 20: "" },
        ];
    }
    return MovieSeats;
}());
