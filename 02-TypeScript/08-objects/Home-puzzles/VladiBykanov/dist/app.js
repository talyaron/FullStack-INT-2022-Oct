// initiating a variable that will hold all the users
var netflixUsers = [];
var userBtn = document.querySelectorAll('.chooseUser');
var movieBtn = document.querySelectorAll('.chooseMovie');
// function that will crate a user based on our interface template
function AddNetflixUser(userName, videoList) {
    var _this = this;
    this.userName = userName;
    this.videoList = videoList;
    this.videoViewedBy = function () {
        return _this.videoList;
    };
    netflixUsers.push(this);
}
var newUser = new AddNetflixUser("John Doe", {
    "The Holiday": [],
    "Alles op tafel": []
});
// console.log(newUser);
var account = {
    userName: "Vladi",
    videoList: {
        "The Matrix": ["Vladi", "John", "Jerry"],
        "Lord of the rings": ["Vladi", "Sara", "Michel"]
    },
    videoViewedBy: function (movie) {
        return this.videoList[movie];
    },
    get getName() {
        return this.userName;
    },
    set addNewMovie(movie) {
        this.videoList[movie] = [];
    }
};
// console.log(account.videoViewedBy("The Matrix"));
// account.addNewMovie = 'movie';
// console.log(account);
netflixUsers.push(account);
console.log(account.userName);
// console.log(netflixUsers[1].userName);
netflixUsers.forEach(function (user) { return console.log(user.userName); });
