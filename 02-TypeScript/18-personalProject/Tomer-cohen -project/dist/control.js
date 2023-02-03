var booksContiner = document.querySelector(".booksContiner");
var userReviews = document.querySelector(".userReview");
function addReview(ev) {
    try {
        var userName = ev.target.elements.userName.value;
        var review = ev.target.elements.review.value;
        var stars = ev.target.elements.stars.value;
        // const bookId = ev.target.element.bookId.value;
        if (userReviews)
            userReviews.innerHTML = renderReviews(reviews);
        reviews.push(new UserReview(userName, review, stars));
        console.log(reviews);
        ev.target.reset();
        ev.preventDefault();
    }
    catch (error) {
        console.error(error);
    }
}
function renderReviews(reviews) {
    try {
        // console.log('renderReviews',reviews)
        if (!Array.isArray(reviews))
            throw new Error("books is not an array");
        var html = reviews
            .map(function (reviews) {
            return "\n            <div class=\"box__review\">\n            <div><p>" + reviews.userName + "</p></div>\n            <div><h1>" + reviews.review + "</h1></div>\n            <div><p>" + reviews.stars + "</p></div>\n            </div> ";
        })
            .join(" ");
        console.log(html);
        // console.log(html);
        // const element = document.querySelector(`#${renderElementId}`);
        return html;
    }
    catch (error) {
        console.error(error);
        // return undefined;
    }
}
;
function renderBooks(books) {
    try {
        if (!books || !Array.isArray(books))
            throw new Error("books is not an arry");
        // console.log(books)
        var html2 = books
            .map(function (book) {
            // console.log('render books', renderReviews(book.reviews))
            return "\n            <div class=\"box\">\n            <img  src=\"" + book.picOfBook + "\" alt=\"\">\n            <div><h1>" + book.name + "</h1></div>\n            <div><p>" + book.summary + "</p></div>\n            <div class='box__review'>" + renderReviews(book.reviews) + "</div>\n            </div> ";
        })
            .join(" ");
        // console.log(html);
        return html2;
    }
    catch (error) {
        // console.error(error);
        return "";
    }
}
;
booksContiner.innerHTML = renderBooks(books);
function saveReview() {
    try {
        if (reviews) {
            localStorage.setItem("html", JSON.stringify(UserReview));
            // let reviews = JSON.parse(localStorage.getItem("reviews"));
        }
    }
    catch (error) {
        console.error(error);
    }
}
