var booksContiner = document.querySelector(".booksContiner");
var userReviews = document.querySelector(".userReview");
//מרנדרת על המסך את כל האובייקטים
function renderBooks(books) {
    try {
        if (!books || !Array.isArray(books))
            throw new Error("books is not an arry");
        var html = books
            .map(function (books) {
            return "\n        <div class=\"box\">\n        <img  src=\"" + books.picOfBook + "\" alt=\"\">\n        <div><h1>" + books.name + "</h1></div>\n        <div><p>" + books.summary + "</p></div>\n        </div> ";
        })
            .join("");
        console.log(html);
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
;
booksContiner.innerHTML = renderBooks(books);
function renderreview(reviews) {
    try {
        if (!reviews || !Array.isArray(reviews))
            throw new Error("books is not an arry");
        var html = reviews
            .map(function (reviews) {
            return "\n            <div class=\"box__review\">\n            <div><h1>" + reviews.review + "</h1></div>\n            <div><p>" + reviews.stars + "</p></div>\n            </div> ";
        })
            .join("");
        console.log(html);
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
;
function addReview(ev) {
    try {
        ev.preventDefault();
        var review = ev.target.elements.review.value;
        var stars = ev.target.elements.stars.value;
        reviews.push(new UserReview(review, stars));
        console.log(reviews);
        ev.target.reset();
        if (!userReviews)
            throw new Error("userReviews is null");
        userReviews.innerHTML = renderreview(reviews);
    }
    catch (error) {
        console.error(error);
    }
}
