const booksContiner: any= document.querySelector(`.booksContiner`);
booksContiner.innerHTML = renderBooks(books);

function renderBooks(books:Book[]):string{
    try {
        if(!books || !Array.isArray(books))
        throw new Error(`books is not an arry`);
        // console.log(books)
        const html= books
        .map((book)=>{

            return`
            <div class="box">
            <img  src="${book.picOfBook}" alt="">
            <div><h1>${book.name}</h1></div>
            <div><p>${book.summary}</p></div>
            <div class='box__review'></div>
            </div> `;
        })
        .join(` `);
        
        return html;
    } catch (error) {
        console.error(error);
        return``;
    }
};

function saveToLocalStorage(ev:any){
    const userName=ev.target.elements.userName.value;
    const review= ev.target.elements.review.value;
    const stars= ev.target.elements.stars.value;
    const newReview= new UserReview(userName,review,stars)

    localStorage.setItem('userReview',JSON.stringify(newReview))

}


function addReviewToBook(book: Book, userName: string, review: string, stars: string) {
    // Create a new UserReview instance
    const userReview = new UserReview(userName, review, stars);
  
    // Add the new UserReview instance to the book's reviews
    book.reviews.push(userReview);
  
    // Add the book to the UserReview's books
    userReview.books.push(book);
  }

  