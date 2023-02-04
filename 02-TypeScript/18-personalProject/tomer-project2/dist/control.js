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
function saveToLocalStorage(ev) {
    var userName = ev.target.elements.userName.value;
    var review = ev.target.elements.review.value;
    var stars = ev.target.elements.stars.value;
    var newReview = new UserReview(userName, review, stars);
    localStorage.setItem('UserReview', JSON.stringify(newReview));
}
function getItemsFromStorage() {
    try {
        //get items from storage
        var BooksString = localStorage.getItem("UserReview");
        if (!BooksString)
            throw new Error("Couldn't find items in storage");
        //convert to array
        var books = JSON.parse(BooksString);
        return books;
    }
    catch (error) {
        console.error(error);
    }
    console.log(books);
}
