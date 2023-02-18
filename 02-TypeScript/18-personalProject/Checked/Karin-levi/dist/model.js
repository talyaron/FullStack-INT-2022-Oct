var Video = /** @class */ (function () {
    function Video(link, name, views, likes, reviews) {
        this.link = link;
        this.name = name;
        this.views = views;
        this.likes = likes;
        this.reviews = reviews;
        this.uid = uid();
    }
    return Video;
}());
var User = /** @class */ (function () {
    function User(name, img) {
        this.name = name;
        this.img = img;
    }
    return User;
}());
var Review = /** @class */ (function () {
    function Review(user, review) {
        this.user = user;
        this.review = review;
    }
    return Review;
}());
