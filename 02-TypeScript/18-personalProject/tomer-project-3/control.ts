

function addToLocalStorage(event:any){
    try {
        event.preventDefault();
        const name= event.target.elements.name.value;
        const bookName= event.target.elements.bookName.value;
        const review= event.target.elements.review.value;
        const stars= event.target.elements.stars.value;
        event.target.reset();
        reviews.push(new UserReview(name,review,stars, bookName))
        if(!itemsRoot)throw new Error("itemsRoot is null");
        renderReviews(reviews,"itemsRoot")
    } catch (error) {
        console.error(error)
    }
};

function renderBooks(books:Book[],renderElementId):void{
    try {   
        if(!books|| !Array.isArray(books))
        throw new Error(`books is not an array`)
        const htmlBook= books
        .map((books)=>{
            return`
            <div class="bookContainer">
            <div class="bookFrame">
              <div class="bookName">${books.name}</div>
              <img src="${books.url}" alt="Book Picture" class="bookPicture">
              <div class="summary">Summary:${books.summary}</div>
              <div class="price">Price:${books.price}</div>
            </div>
            <div id="usersReviews">
            
            </div>
            `
        })
        .join(` `)
        const element = document.querySelector(`#${renderElementId}`);
        if(!element) throw new Error(`couldent find element `)
        element.innerHTML=htmlBook;
    } catch (error) {
        console.error(error)
    }
}


function renderReviews(reviews: UserReview[], renderElementId:string):void{
    try {
        
        if(!reviews|| !Array.isArray(reviews))
        throw new Error('reviews is not an array')

        const html = reviews
        .map((review) => {
            return `
            
            <div class="item">
              <div class="item-details">
                <div class="item-title">User Name: ${review.name}</div>
                <div class="item-description">Name: ${review.bookName}</div>
                <div class="item-description">Star: ${review.stars}</div>
                <div class="item-description">Review: ${review.review}</div>

              </div>
            </div>
        `;
          })
        .join(` `);

        console.log(reviews)
        const element = document.querySelector(`#${renderElementId}`);
          if(!element) throw new Error(`couldent find element `)
          element.innerHTML=html;
    } catch (error) {
        console.error(error)
        
    }

}

function saveTolocalStorge(){
    localStorage.setItem(`reviews`,JSON.stringify(reviews))
}


