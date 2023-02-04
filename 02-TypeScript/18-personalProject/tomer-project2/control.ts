const booksContiner: any= document.querySelector(`.booksContiner`);
booksContiner.innerHTML = renderBooks(books,'renderElementID');

function renderBooks(books:Book[],renderElementID:string):string{
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

    localStorage.setItem('UserReview',JSON.stringify(newReview))

}

function getItemsFromStorage() {
    try {
      //get items from storage
      const BooksString = localStorage.getItem("UserReview");
      if (!BooksString) throw new Error("Couldn't find items in storage");
  
      //convert to array
      const books = JSON.parse(BooksString);
      return books;
    } catch (error) {
        console.error(error);
        
    }
    console.log(books);
  }

