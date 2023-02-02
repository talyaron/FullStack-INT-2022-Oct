var booksContiner = document.querySelector(".booksContiner");
var userReviews = document.querySelector(".userReview");
//מרנדרת על המסך את כל האובייקטים
booksContiner.innerHTML = renderBooks(books);
function renderReviews(reviews) {
    try {
        if (!reviews || !Array.isArray(reviews))
            throw new Error("books is not an arry");
        var html = reviews
            .map(function (reviews) {
            return "\n            <div class=\"box__review\">\n            <div><p>" + reviews.userName + "</p></div>\n            <div><h1>" + reviews.review + "</h1></div>\n            <div><p>" + reviews.stars + "</p></div>\n            </div> ";
        })
            .join(" ");
        console.log(html);
        // const element = document.querySelector(`#${renderElementId}`);
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
        var userName = ev.target.elements.userName.value;
        var review = ev.target.elements.review.value;
        var stars = ev.target.elements.stars.value;
        reviews.push(new UserReview(userName, review, stars));
        console.log(reviews);
        ev.target.reset();
        if (!userReviews)
            throw new Error("userReviews is null");
        userReviews.innerHTML = renderReviews(reviews);
    }
    catch (error) {
        console.error(error);
    }
}
function renderBooks(books) {
    try {
        if (!books || !Array.isArray(books))
            throw new Error("books is not an arry");
        var html = books
            .map(function (book) {
            console.log(renderReviews(book.reviews));
            return "\n        <div class=\"box\">\n        <img  src=\"" + book.picOfBook + "\" alt=\"\">\n        <div><h1>" + book.name + "</h1></div>\n        <div><p>" + book.summary + "</p></div>\n        <div class='box__review'>" + renderReviews(book.reviews) + "</div>\n        </div> ";
        })
            .join(" ");
        console.log(html);
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
;
function saveReview() {
    console.log("save reviews");
    localStorage.setItem("reviews", JSON.stringify(reviews));
}
