

function addToLocalStorage(event:any){
    try {
        event.preventDefault();
        const name= event.target.elements.name.value;
        const review= event.target.elements.review.value;
        const stars= event.target.elements.stars.value;
        event.target.reset();
        reviews.push(new UserReview(name,review,stars))
        console.log(reviews)
        if(!itemsRoot)throw new Error("itemsRoot is null");
        renderReviews(reviews,"itemsRoot")
    } catch (error) {
        console.error(error)
    }

};

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
                <div class="item-description">Star: ${review.stars}</div>
                <div class="item-description">Review: ${review.review}</div>

              </div>
            </div>
        `;
          })
        .join(` `);
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

