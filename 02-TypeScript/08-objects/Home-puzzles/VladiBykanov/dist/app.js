// initiating a variable that will hold all the users 
var netflixUsers = [];
// function that will crate a user based on our template
function AddNetflixUser(userName, videoList) {
    var _this = this;
    this.userName = userName;
    this.videoList = videoList;
    this.videoViewedBy = function () {
        return _this.videoList;
    };
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
console.log(account.videoViewedBy("The Matrix"));
account.addNewMovie = 'movie';
console.log(account);
netflixUsers.push(account, newUser);
console.log(netflixUsers);
