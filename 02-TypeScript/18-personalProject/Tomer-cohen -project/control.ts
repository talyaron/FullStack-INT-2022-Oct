const booksContiner: any= document.querySelector(`.booksContiner`);
const userReviews:any= document.querySelector(`.userReview`)


//מרנדרת על המסך את כל האובייקטים

function renderBooks(books:book[]):string{
try {
    if(!books || !Array.isArray(books))
    throw new Error(`books is not an arry`);

    const html= books
    .map((books)=>{
        return`
        <div class="box">
        <img  src="${books.picOfBook}" alt="">
        <div><h1>${books.name}</h1></div>
        <div><p>${books.summary}</p></div>
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
booksContiner.innerHTML = renderBooks(books);
function renderreview(reviews:UserReview[]):string{
    try {
        if(!reviews || !Array.isArray(reviews))
        throw new Error(`books is not an arry`);
    
        const html= reviews
        .map((reviews)=>{
            return`
            <div class="box__review">
            <div><h1>${reviews.review}</h1></div>
            <div><p>${reviews.stars}</p></div>
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

function addReview(ev:any){
    try {
        ev.preventDefault();

        const review= ev.target.elements.review.value;
        const stars= ev.target.elements.stars.value;

        reviews.push(new UserReview(review,stars))
        console.log(reviews);
        ev.target.reset()

        if(!userReviews) throw new Error(`userReviews is null`);
        userReviews.innerHTML = renderreview(reviews);

    } catch (error) {
        console.error(error);
    }
}


