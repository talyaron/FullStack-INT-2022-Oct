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
console.log(newUser);
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
    set addVideo(movie) {
        this.videoList[movie] = [];
    }
};
// console.log(account.videoViewedBy("The Matrix"));
console.log(account.addVideo('Snatch'));
