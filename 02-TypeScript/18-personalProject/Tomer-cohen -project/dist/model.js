var book = /** @class */ (function () {
    function book(picOfBook, name, summary) {
        this.picOfBook = picOfBook;
        this.name = name;
        this.summary = summary;
        this.uid = uid();
    }
    return book;
}());
var UserReview = /** @class */ (function () {
    function UserReview(userName, review, stars) {
        this.userName = userName;
        this.review = review;
        this.stars = stars;
        this.uid = uid();
    }
    return UserReview;
}());
var books = [];
books.push(new book("https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg", "war zone", "about war the in a zoon"));
books.push(new book("https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg", "war zone", "about war the in a zoon"));
books.push(new book("https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg", "war zone", "about war the in a zoon"));
books.push(new book("https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg", "war zone", "about war the in a zoon"));
console.log(books);
var reviews = [];
