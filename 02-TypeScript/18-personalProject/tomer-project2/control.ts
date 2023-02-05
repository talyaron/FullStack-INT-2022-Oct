const booksContiner: any= document.querySelector(`.booksContiner`);
const reviewsContiner:any= document.querySelector('#reviewsRoot');
reviewsContiner.innerHTML = renderReviews(reviews,'_renderElementID');


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

function renderReviews(reviews:UserReview[],_renderElementID:string){
    try {
        
        if(!reviews|| !Array.isArray(reviews))
        throw new Error('reviews is not an array')
        console.log(reviews)
        const reviewsHTML= reviews
        .map((reviews)=>{
            return`
            <div class="reviewBox">
            <div><h1>${reviews.userName}</h1></div>
            <div><p>${reviews.review}</p></div>
            <div><p>${reviews.stars}</p></div>
            `
        })
        .join(' ');
        return reviewsHTML;
    } catch (error) {
        console.error(error);
        return""
    }
}

function addReview(ev){
try {
   
    let userName=ev.target.elements.userName.value;
    let review=ev.target.elements.review.value;
    let stars=ev.target.elements.stars.value;
    // let newReview= new UserReview(userName,review,stars)
    reviews.push(new UserReview(userName,review,stars))
    
    ev.target.reset();
    if (!reviewsRoot) throw new Error("reviewsRoot is null");
    
    renderReviews(reviews,'#reviewsRoot')
    localStorage.setItem('UserReview',JSON.stringify(reviews))
    console.log(review);
} catch (error) {
    console.error(error)
}

}




// function saveToLocalStorage(ev:any){
//     const userName=ev.target.elements.userName.value;
//     const review= ev.target.elements.review.value;
//     const stars= ev.target.elements.stars.value;
//     const newReview= new UserReview(userName,review,stars)


//     localStorage.setItem('UserReview',JSON.stringify(newReview))

// }


