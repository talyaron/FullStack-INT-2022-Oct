// initiating a variable that will hold all the users
var netflixUsers = [];
var viewedMovieList = {};
var listOfUsersWhoWatchedTheMovieChosen = document.querySelector(".listOfUsersWhoWatchedTheMovieChosen");
var creatUserName = document.querySelector(".creatUserName");
var addMovieToNewUsersList = document.querySelector(".addMovieToNewUsersList");
var userNameClickedOn = document.querySelector(".userPage__userName");
var userPage = document.querySelector(".userPage");
var userMovieList = document.querySelector(".userPage__movieList");
// const userBtnList = document.querySelector(".userBtnList") as HTMLUListElement;
// const movieBtnList = document.querySelector(
//   ".movieBtnList"
// ) as HTMLUListElement;
// catching clicks on buttons and displaying the people who watched them
window.addEventListener("click", function (e) {
    var target = e.target;
    var text = target.textContent;
    // if clicked on movie button display users that watched it
    if (target.className === "movie") {
        listOfUsersWhoWatchedTheMovieChosen.style.display = "block";
        // clear list of movies besides first child of ul element which is a title (hX tag)
        while (listOfUsersWhoWatchedTheMovieChosen.childNodes.length > 2) {
            listOfUsersWhoWatchedTheMovieChosen.removeChild(listOfUsersWhoWatchedTheMovieChosen.lastChild);
        }
        if (!(text.toLowerCase() in viewedMovieList)) {
            console.log(text);
        }
        // text on button
        // go through watched movies object
        Object.entries(viewedMovieList).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var movieValues = value;
            // display users who watched the movie that was clicked on
            if (key.toLowerCase() == (text === null || text === void 0 ? void 0 : text.toLowerCase())) {
                for (var i in movieValues) {
                    var li = document.createElement("li");
                    li.textContent = movieValues[i];
                    listOfUsersWhoWatchedTheMovieChosen.appendChild(li);
                }
            }
        });
    }
    // if clicked on user button display movies on his list
    else if (target.className === "userName") {
        userNameClickedOn.textContent = target.textContent;
        userPage.style.display = "block";
        netflixUsers.forEach(function (user) {
            if (user.userName === target.textContent) {
                //clear ul element
                userMovieList.replaceChildren();
                // displaying list of movies of the user selected
                Object.entries(user.videoList).forEach(function (_a) {
                    var key = _a[0];
                    var li = document.createElement("li");
                    li.textContent = key;
                    userMovieList.appendChild(li);
                });
            }
        });
    }
});
window.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && creatUserName.value.length > 5) {
        console.log("working");
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
var userThree = new addUser("Jerry Smith", {
    matrix: true,
    avatar: false,
    "the godfather": false
});
userTwo.markMovieViewed("matrix");
userOne.addMovieToList("Titanic");
userOne.markMovieViewed("Titanic");
console.log(viewedMovieList);
console.log(netflixUsers);
// adding the movie as viewed for the chosen user
function markMovieAsViewedForPerson(movie, user) {
    return viewedMovieList[movie].push(user);
}
// adding the name of the user that watched the movie to viewedMovieList
netflixUsers.forEach(function (user) {
    Object.entries(user.videoList).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (value == true) {
            if (!viewedMovieList[key]) {
                viewedMovieList[key] = [];
            }
            viewedMovieList[key].push(user.userName);
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
// let word = "hello";
// let upperWord = word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
// console.log(upperWord);
