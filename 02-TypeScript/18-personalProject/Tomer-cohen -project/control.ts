const booksContiner: any= document.querySelector(`.booksContiner`);
const userReviews:any= document.querySelector(`.userReview`)


function addReview(ev:any){
    try {
        const userName=ev.target.elements.userName.value;
        const review= ev.target.elements.review.value;
        const stars= ev.target.elements.stars.value;
        // const bookId = ev.target.element.bookId.value;
        
        
        if(userReviews)
        userReviews.innerHTML = renderReviews(reviews);
        reviews.push(new UserReview(userName,review,stars))
        console.log(reviews);
        ev.target.reset()
        
        ev.preventDefault();
    } catch (error) {
        console.error(error);
    }
}
function renderReviews(reviews:UserReview[]){
    try {
        // console.log('renderReviews',reviews)
        if(!Array.isArray(reviews))
        throw new Error(`books is not an array`);
        
        const html= reviews
        .map((reviews)=>{
            return`
            <div class="box__review">
            <div><p>${reviews.userName}</p></div>
            <div><h1>${reviews.review}</h1></div>
            <div><p>${reviews.stars}</p></div>
            </div> `;
        })
        .join(` `);
        console.log(html)
        // console.log(html);
        // const element = document.querySelector(`#${renderElementId}`);
        return html;
    } catch (error) {
        console.error(error);
        // return undefined;
    }
};

function renderBooks(books:Book[]):string{
    try {
        if(!books || !Array.isArray(books))
        throw new Error(`books is not an arry`);
        // console.log(books)
        const html2= books
        .map((book)=>{
            // console.log('render books', renderReviews(book.reviews))
            return`
            <div class="box">
            <img  src="${book.picOfBook}" alt="">
            <div><h1>${book.name}</h1></div>
            <div><p>${book.summary}</p></div>
            <div class='box__review'>${renderReviews(book.reviews)}</div>
            </div> `;
        })
        .join(` `);
        // console.log(html);
        return html2;
    } catch (error) {
        // console.error(error);
        return``;
    }
};
booksContiner.innerHTML = renderBooks(books);


function saveReview() {
    try {
        if(reviews){

        localStorage.setItem("html",JSON.stringify(UserReview))
        // let reviews = JSON.parse(localStorage.getItem("reviews"));
        
        
    }
    } catch (error) {
        console.error(error)
    }
}



