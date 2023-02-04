var _books = getItemsFromStorage();
if (!_books) {
    books.push.apply(books, _books);
}
renderBooks(books, "booksContiner");
console.log(books);
