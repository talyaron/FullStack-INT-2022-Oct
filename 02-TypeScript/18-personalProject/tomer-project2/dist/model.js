var Book = /** @class */ (function () {
    function Book(picOfBook, name, summary) {
        this.picOfBook = picOfBook;
        this.name = name;
        this.summary = summary;
        this.reviews = [];
        this.uid = uid();
    }
    return Book;
}());
var UserReview = /** @class */ (function () {
    function UserReview(userName, review, stars) {
        this.userName = userName;
        this.review = review;
        this.stars = stars;
    }
    return UserReview;
}());
var books = [];
var reviews = [];
var warZone = new Book("https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg", "war zone", "about war the in a zoon");
books.push(warZone);
var warZoneReviews = new UserReview("tomer", "ebjnerpdr", "4");
warZone.reviews.push(warZoneReviews);
var valorant = new Book("https://images-evrit.yit.co.il/Images/Products/YediotMasters/HarryPottter7_Master.jpg", "valorant", "about war the in a zoon");
books.push(valorant);
var valorantReviews = new UserReview("toemr", "riubndb", "2");
valorant.reviews.push(valorantReviews);
console.log(books);
var corona = new Book("https://upload.wikimedia.org/wikipedia/he/thumb/3/3c/%D7%94%D7%90%D7%A8%D7%99_%D7%A4%D7%95%D7%98%D7%A8_%D7%95%D7%90%D7%91%D7%9F_%D7%94%D7%97%D7%9B%D7%9E%D7%99%D7%9D_%D7%A1%D7%A4%D7%A8.jpeg/250px-%D7%94%D7%90%D7%A8%D7%99_%D7%A4%D7%95%D7%98%D7%A8_%D7%95%D7%90%D7%91%D7%9F_%D7%94%D7%97%D7%9B%D7%9E%D7%99%D7%9D_%D7%A1%D7%A4%D7%A8.jpeg", "corona ", "about war the in a zoon");
books.push(corona);
var coronaReview = new UserReview("vladi", "very good", "1");
corona.reviews.push(coronaReview);
var covid19 = new Book("https://upload.wikimedia.org/wikipedia/he/c/cc/%D7%94%D7%90%D7%A8%D7%99_%D7%A4%D7%95%D7%98%D7%A8_%D7%95%D7%9E%D7%A1%D7%93%D7%A8_%D7%A2%D7%95%D7%A3_%D7%94%D7%97%D7%95%D7%9C_%D7%A1%D7%A4%D7%A8.jpeg", "covid-19", "about war the in a zoon");
books.push(covid19);
var covid19Review = new UserReview("itay", "nice one", "5");
covid19.reviews.push(covid19Review);
