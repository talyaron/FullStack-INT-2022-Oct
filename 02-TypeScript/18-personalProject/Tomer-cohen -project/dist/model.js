var Book = /** @class */ (function () {
    function Book(picOfBook, name, summary) {
        this.picOfBook = picOfBook;
        this.name = name;
        this.summary = summary;
        this.uid = uid();
    }
    return Book;
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
books.push(new Book("https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg", "war zone", "about war the in a zoon"));
books.push(new Book("https://upload.wikimedia.org/wikipedia/he/thumb/3/3c/%D7%94%D7%90%D7%A8%D7%99_%D7%A4%D7%95%D7%98%D7%A8_%D7%95%D7%90%D7%91%D7%9F_%D7%94%D7%97%D7%9B%D7%9E%D7%99%D7%9D_%D7%A1%D7%A4%D7%A8.jpeg/250px-%D7%94%D7%90%D7%A8%D7%99_%D7%A4%D7%95%D7%98%D7%A8_%D7%95%D7%90%D7%91%D7%9F_%D7%94%D7%97%D7%9B%D7%9E%D7%99%D7%9D_%D7%A1%D7%A4%D7%A8.jpeg", "war zone", "about war the in a zoon"));
books.push(new Book("https://images-evrit.yit.co.il/Images/Products/YediotMasters/HarryPottter7_Master.jpg", "war zone", "about war the in a zoon"));
books.push(new Book("https://upload.wikimedia.org/wikipedia/he/c/cc/%D7%94%D7%90%D7%A8%D7%99_%D7%A4%D7%95%D7%98%D7%A8_%D7%95%D7%9E%D7%A1%D7%93%D7%A8_%D7%A2%D7%95%D7%A3_%D7%94%D7%97%D7%95%D7%9C_%D7%A1%D7%A4%D7%A8.jpeg", "war zone", "about war the in a zoon"));
console.log(books);
var reviews = [];
