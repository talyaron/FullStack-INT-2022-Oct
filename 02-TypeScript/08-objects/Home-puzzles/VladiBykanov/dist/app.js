function AddNetflixUser(userName, videoList) {
    var _this = this;
    this.userName = userName;
    this.videoList = videoList;
    this.videoViewedBy = function () {
        return _this.videoList;
    };
}
var account = {
    userName: "Vladi",
    videoList: {
        "The Matrix": ["Vladi", "John", "Jerry"],
        "Lord of the rings": ["Vladi", "Sara", "Michel"]
    },
    videoViewedBy: function (movie) {
        return this.videoList[movie];
    }
};
console.log(account.videoViewedBy("The Matrix"));
