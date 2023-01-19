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
    function books(bookTitle, price, catagory, auther, image) {
        this.bookTitle = bookTitle;
        this.price = price;
        this.catagory = catagory;
        this.auther = auther;
        this.image = image;
    }
    return books;
}());
var items = [];
var you = new items("You", 46.21, "crime", " Caroline Kepnes", "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4711/9781471137372.jpg");
console.log(items);
