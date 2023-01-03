// initiating a variable that will hold all the users
var netflixUsers = [];
var movieList = {};
var userWatchedMovie = document.querySelector(".userWatchedMovie");
// const userBtnList = document.querySelector(".userBtnList") as HTMLUListElement;
// const movieBtnList = document.querySelector(
//   ".movieBtnList"
// ) as HTMLUListElement;
window.addEventListener("click", function (e) {
    var target = e.target;
    if (target.className === "movie") {
        userWatchedMovie.style.display = 'block';
        while (userWatchedMovie.childNodes.length > 2) {
            userWatchedMovie.removeChild(userWatchedMovie.lastChild);
        }
        // text on button
        var text_1 = target.textContent;
        Object.entries(movieList).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var movieValues = value;
            if (key.toLowerCase() == (text_1 === null || text_1 === void 0 ? void 0 : text_1.toLowerCase())) {
                for (var i in movieValues) {
                    var li = document.createElement("li");
                    li.textContent = movieValues[i];
                    userWatchedMovie.appendChild(li);
                }
            }
        });
    }
});
// function that will crate a user based on our interface template
function addUser(userName, videoList) {
    var _this = this;
    this.userName = userName;
    this.videoList = videoList;
    // Return true if user watched the movie
    this.checkIfMovieWasWatched = function (movie) {
        return _this.videoList[movie];
    };
    // return users name
    this.getUserName = function () {
        return _this.userName;
    };
    // add a movie to users watch list
    this.addMovieToList = function (movie) {
        _this.videoList[movie] = false;
    };
    this.markMovieViewed = function (movie) { return (_this.videoList[movie] = true); };
    //adding user to list of users on platform
    netflixUsers.push(this);
}
var userOne = new addUser("User One", {
    matrix: false,
    avatar: false,
    "the godfather": true
});
var userTwo = new addUser("User Two", {
    matrix: false,
    avatar: false,
    "the godfather": true
});
userTwo.markMovieViewed("matrix");
// console.log(userOne.checkIfMovieWasWatched("matrix"));
// console.log(userOne.getUserName());
userOne.addMovieToList("Titanic");
console.log(netflixUsers);
// console.log(userOne.videoList["avatar"]);
// console.log(userOne.videoList["Titanic"]);
// console.log(movieList);
var keys = Object.keys(netflixUsers[1].videoList);
var values = Object.values(netflixUsers[1].videoList)[0];
// console.log(keys);
// console.log(values);
console.log(movieList);
// adding the movie as viewed for the chosen user
function markMovieAsViewedForPerson(movie, user) {
    return movieList[movie].push(user);
}
// adding the name of the user that watched the movie to movieList
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
