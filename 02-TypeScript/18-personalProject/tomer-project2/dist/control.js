var booksContiner = document.querySelector(".booksContiner");
booksContiner.innerHTML = renderBooks(books);
function renderBooks(books) {
    try {
        if (!books || !Array.isArray(books))
            throw new Error("books is not an arry");
        // console.log(books)
        var html = books
            .map(function (book) {
            return "\n            <div class=\"box\">\n            <img  src=\"" + book.picOfBook + "\" alt=\"\">\n            <div><h1>" + book.name + "</h1></div>\n            <div><p>" + book.summary + "</p></div>\n            <div class='box__review'></div>\n            </div> ";
        })
            .join(" ");
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
;
function saveToLocalStorage(ev) {
    var userName = ev.target.elements.userName.value;
    var review = ev.target.elements.review.value;
    var stars = ev.target.elements.stars.value;
    var newReview = new UserReview(userName, review, stars);
    localStorage.setItem('userReview', JSON.stringify(newReview));
}
function addReviewToBook(book, userName, review, stars) {
    // Create a new UserReview instance
    var userReview = new UserReview(userName, review, stars);
    // Add the new UserReview instance to the book's reviews
    book.reviews.push(userReview);
    // Add the book to the UserReview's books
    userReview.books.push(book);
}
