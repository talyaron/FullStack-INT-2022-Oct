// initiating a variable that will hold all the users
var netflixUsers = [];
var viewedMovieList = {};
var userWatchedMovie = document.querySelector(".userWatchedMovie");
var creatUserName = document.querySelector(".creatUserName");
var addMovieToSelectedUserList = document.querySelector(".addMovieToSelectedUserList");
var userNameDisplayed = document.querySelector(".userPage__userName");
var userPage = document.querySelector(".userPage");
var userMovieList = document.querySelector(".userPage__movieList");
var userBtnList = document.querySelector(".userBtnList");
var movieBtnList = document.querySelector(".movieBtnList");
// catching clicks on buttons and displaying info accordingly
window.addEventListener("click", function (e) {
    var target = e.target;
    var text = target.textContent;
    // if clicked on movie button display users that watched it
    if (target.className === "movie") {
        userWatchedMovie.style.display = "block";
        userPage.style.display = "none";
        // clear list of movies besides first child of ul element which is a title (hX tag)
        while (userWatchedMovie.childNodes.length > 2) {
            userWatchedMovie.removeChild(userWatchedMovie.lastChild);
        }
        // check if no one watched this movie and display message
        if (!(text.toLowerCase() in viewedMovieList)) {
            var li = document.createElement("li");
            li.textContent = "No one watched this movie yet";
            userWatchedMovie.appendChild(li);
        }
        else {
            // text on button
            // go through watched movies object
            Object.entries(viewedMovieList).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var movieValues = value;
                // display users who watched the movie that was clicked on
                if (key.toLowerCase() == text.toLowerCase()) {
                    for (var i in movieValues) {
                        var li = document.createElement("li");
                        li.textContent = movieValues[i];
                        userWatchedMovie.appendChild(li);
                    }
                }
            });
        }
    }
    // if clicked on user button display movies on his list
    else if (target.className === "userName") {
        userNameDisplayed.textContent = target.textContent;
        userPage.style.display = "block";
        userWatchedMovie.style.display = "none";
        displayUserMovieList();
    }
});
function displayUserMovieList() {
    netflixUsers.forEach(function (user) {
        if (user.userName === userNameDisplayed.textContent) {
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
// listen for ENTER press
window.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && creatUserName.value.length > 5) {
        var newUser = new addUser(creatUserName.value, {});
        creatUserName.value = "";
        createUserButton();
    }
    // making sure user is displayed and movie name is entered
    else if (e.key == "Enter" &&
        userPage.style.display == "block" &&
        addMovieToSelectedUserList.value.length > 3) {
        netflixUsers.forEach(function (user) {
            // adding movie to list of user movies
            if (user.userName == userNameDisplayed.textContent) {
                user.videoList[addMovieToSelectedUserList.value] = false;
                // display new movie on page as button
                createMovieButton();
                displayUserMovieList();
                addMovieToSelectedUserList.value = "";
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
    "the godfather": false,
    armageddon: true
});
userTwo.markMovieViewed("matrix");
userOne.addMovieToList("titanic");
userOne.markMovieViewed("titanic");
userThree.markMovieViewed("titanic");
// adding the name of the user that watched the movie to viewedMovieList
function markFilmViewedForUsers() {
    try {
        //empty object before running
        Object.keys(viewedMovieList).forEach(function (key) {
            delete viewedMovieList[key];
        });
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
    }
    catch (error) {
        alert(error);
    }
}
function createUserButton() {
    userBtnList.replaceChildren();
    netflixUsers.forEach(function (user) {
        var li = document.createElement("li");
        var btn = document.createElement("button");
        btn.classList.add("userName");
        btn.textContent = user.userName;
        li.append(btn);
        userBtnList.append(li);
    });
}
function createMovieButton() {
    try {
        movieBtnList.replaceChildren();
        var listOfMovies_1 = [];
        netflixUsers.forEach(function (user) {
            Object.entries(user.videoList).forEach(function (_a) {
                var key = _a[0];
                var word = key;
                var upperWord = word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
                if (listOfMovies_1.some(function (value) { return value === key; })) {
                    return false;
                }
                else {
                    listOfMovies_1.push(key);
                    var li = document.createElement("li");
                    var btn = document.createElement("button");
                    btn.classList.add("movie");
                    btn.textContent = upperWord;
                    li.append(btn);
                    movieBtnList.append(li);
                }
            });
        });
    }
    catch (error) {
        alert(error);
    }
}
createUserButton();
createMovieButton();
markFilmViewedForUsers();
console.log(viewedMovieList);
console.log(netflixUsers);
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
