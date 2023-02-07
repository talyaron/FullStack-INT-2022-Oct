var UserReview = /** @class */ (function () {
    function UserReview(
    //   public books:Book,
    name, review, stars, bookName) {
        this.name = name;
        this.review = review;
        this.stars = stars;
        this.bookName = bookName;
    }
    return UserReview;
}());
var Book = /** @class */ (function () {
    function Book(name, url, price, summary) {
        this.name = name;
        this.url = url;
        this.price = price;
        this.summary = summary;
    }
    return Book;
}());
var reviews = [];
var books = [];
books.push(new Book("MASTER & APPRENTICE", "https://images.penguinrandomhouse.com/cover/9780525619376", "100", "about star wars"));
books.push(new Book("THE HIGH REPUBLIC: THE FALLEN STAR", "https://cdn.waterstones.com/bookjackets/large/9781/5291/9781529150162.jpg", "100", "about star wars"));
books.push(new Book("ATTACK OF THE CLONES", "https://images.penguinrandomhouse.com/cover/9780345428820", "100", "about star wars"));
