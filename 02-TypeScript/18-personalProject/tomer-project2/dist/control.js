var booksContiner = document.querySelector(".booksContiner");
booksContiner.innerHTML = renderBooks(books, 'renderElementID');
function renderBooks(books, renderElementID) {
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
function renderReviews(reviews, renderElementID) {
    try {
        if (!reviews || !Array.isArray(reviews))
            throw new Error('reviews is not an array');
        console.log(reviews);
        var reviewsHTML = reviews
            .map(function (reviews) {
            return "\n            <div class=\"reviewBox\">\n            <div><h1>" + reviews.userName + "</h1></div>\n            <div><p>" + reviews.review + "</p></div>\n            <div><p>" + reviews.stars + "</p></div>\n            ";
        })
            .join(' ');
        return reviewsHTML;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function addReview(ev) {
    var userName = ev.target.elements.userName.value;
    var review = ev.target.elements.review.value;
    var stars = ev.target.elements.stars.value;
    var newReview = new UserReview(userName, review, stars);
    reviews.push(new UserReview(userName, review, stars));
    ev.target.reset();
    console.log(reviews);
    if (!reviewsRoot)
        throw new Error("reviewsRoot is null");
    renderReviews(reviews, 'reviewsRoot');
    localStorage.setItem('UserReview', JSON.stringify(newReview));
}
// function saveToLocalStorage(ev:any){
//     const userName=ev.target.elements.userName.value;
//     const review= ev.target.elements.review.value;
//     const stars= ev.target.elements.stars.value;
//     const newReview= new UserReview(userName,review,stars)
//     localStorage.setItem('UserReview',JSON.stringify(newReview))
// }
