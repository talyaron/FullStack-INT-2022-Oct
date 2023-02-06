var UserReview = /** @class */ (function () {
    function UserReview(name, review, stars) {
        this.name = name;
        this.review = review;
        this.stars = stars;
    }
    return UserReview;
}());
var Book = /** @class */ (function () {
    function Book(name, price, summary) {
        this.name = name;
        this.price = price;
        this.summary = summary;
    }
    return Book;
}());
var reviews = [];
