
const _books= getItemsFromStorage()
if(!_books){
    books.push(..._books);
}

renderBooks(books,"booksContiner")
console.log(books)