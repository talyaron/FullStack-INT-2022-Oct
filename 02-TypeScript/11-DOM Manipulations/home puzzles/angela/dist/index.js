var popUp = document.querySelector("#popup");
function openPopup() {
    popUp === null || popUp === void 0 ? void 0 : popUp.classList.add("open-popup");
}
function closePopup() {
    popUp === null || popUp === void 0 ? void 0 : popUp.classList.remove("open-popup");
}
openPopup();
closePopup();
var books = /** @class */ (function () {
    function books(bookTitle, price, category, auther, iamge) {
        this.bookTitle = bookTitle;
        this.price = price;
        this.category = category;
        this.auther = auther;
        this.iamge = iamge;
    }
    return books;
}());
var items = [];
var theBlackDahlia = new items("The Black Dahlia", 50.78, "crime", "James Ellroy", "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0995/9780099537861.jpg");
var you = new items();
