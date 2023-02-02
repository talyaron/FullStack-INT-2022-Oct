const booksContiner: any= document.querySelector(`.booksContiner`);
const userReviews:any= document.querySelector(`.userReview`)


//מרנדרת על המסך את כל האובייקטים

booksContiner.innerHTML = renderBooks(books);
function renderreviews(reviews:UserReview[]):string{
    try {
        if(!reviews || !Array.isArray(reviews))
        throw new Error(`books is not an arry`);
        
        const html= reviews
        .map((reviews)=>{
            return`
            <div class="box__review">
            <div><p>${reviews.userName}</p></div>
            <div><h1>${reviews.review}</h1></div>
            <div><p>${reviews.stars}</p></div>
            </div> `;
        })
        .join(``);
        console.log(html);
        // const element = document.querySelector(`#${renderElementId}`);
        return html;
    } catch (error) {
        console.error(error);
        return``;
    }
};

function addReview(ev:any){
    try {
        ev.preventDefault();
        const userName=ev.target.elements.userName.value;
        const NameOfBook= ev.target.element.NameOfBook.value;
        const review= ev.target.elements.review.value;
        const stars= ev.target.elements.stars.value;
        
        reviews.push(new UserReview(userName,NameOfBook,review,stars))
        console.log(reviews);
        ev.target.reset()
        
        if(!userReviews) throw new Error(`userReviews is null`);
        userReviews.innerHTML = renderreviews(reviews);
    } catch (error) {
        console.error(error);
    }
}
function renderBooks(books:Book[]):string{
try {
    if(!books || !Array.isArray(books))
    throw new Error(`books is not an arry`);

    const html= books
    .map((book)=>{
        return`
        <div class="box">
        <img  src="${book.picOfBook}" alt="">
        <div><h1>${book.name}</h1></div>
        <div><p>${book.summary}</p></div>
        <div>${renderreviews(book.reviews)}</div>
        </div> `;
    })
    .join(``);
    console.log(html);
    return html;
} catch (error) {
    console.error(error);
    return``;
}
};
function saveReview() {
    console.log(`save reviews`)
    localStorage.setItem(`reviews`,JSON.stringify(reviews))
}



