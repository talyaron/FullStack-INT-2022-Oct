// initiating a variable that will hold all the users
var netflixUsers = [];
var movieList = {};
var userBtn = document.querySelectorAll(".chooseUser");
var movieBtn = document.querySelectorAll(".chooseMovie");
// function that will crate a user based on our interface template
function addUser(userName, videoList) {
    var _this = this;
    this.userName = userName;
    this.videoList = videoList;
    // Return a list of peope that watched the movie chosen
    this.checkIfMovieWasWatched = function (movie) { return _this.videoList[movie]; };
    // return users name
    this.getUserName = function () {
        return _this.userName;
    };
    // add a movie to users watch list
    this.addMovieToList = function (movie) {
        _this.videoList[movie] = false;
    };
    //adding user to list of users on platform
    netflixUsers.push(this);
}
var userOne = new addUser("Vladislav Bykanov", {
    matrix: false,
    avatar: false,
    "the godfather": true
});
var userTwo = new addUser("John Doe", {
    matrix: false,
    avatar: false,
    "the godfather": true
});
// console.log(userOne.checkIfMovieWasWatched("matrix"));
// console.log(userOne.getUserName());
userOne.addMovieToList("Titanic");
console.log(netflixUsers);
console.log(userOne.videoList["avatar"]);
console.log(userOne.videoList["Titanic"]);
// console.log(movieList);
var keys = Object.keys(netflixUsers[1].videoList);
var values = Object.values(netflixUsers[1].videoList)[0];
// console.log(keys);
// console.log(values);
// console.log(movieList);
// adding the movie as viewed for the chosen user
function markMovieAsViewedForPerson(movie, user) {
    return movieList[movie].push(user);
}
// console.log each movie that was watched and who watched it
netflixUsers.forEach(function (user) {
    Object.entries(user.videoList).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (value == true) {
            if (!movieList[key]) {
                movieList[key] = [];
            }
            movieList[key].push(user.userName);
            // console.log(key, user.userName);
        }
    });
});
// const account = {
//   userName: "Vladi",
//   videoList: {
//     "The Matrix": ["Vladi", "John", "Jerry"],
//     "Lord of the rings": ["Vladi", "Sara", "Michel"],
//   },
//   checkIfMovieWasWatched(movie: string): string[] {
//     return this.videoList[movie];
//   },
//   get getUserName() {
//     return this.userName;
//   },
//   set addNewMovie(movie: string) {
//     this.videoList[movie] = [];
//   },
// };
var word = "hello";
var upperWord = word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
// console.log(upperWord);
