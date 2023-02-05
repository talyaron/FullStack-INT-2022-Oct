
function saveToLocalStorage(ev){
    try {
        ev.preventDefault();
        console.log(ev)
        const name= ev.target.elements.name.value;
        const review= ev.target.elements.review.value;
        const stars= ev.target.elements.stars.value;
        reviews.push(new UserReview(name,review,stars))
        console.log(reviews)
        ev.target.reset();
        if(!itemsRoot)throw new Error("itemsRoot is null");

        localStorage.setItem('reviews',JSON.stringify(reviews));

        itemsRoot.innerHTML = renderReviews(reviews);
    } catch (error) {
        console.error(error)
    }

};

function renderReviews(reviews: UserReview[]){
    try {
        if(!reviews|| !Array.isArray(reviews))
        throw new Error('reviews is not an array')

        const html = reviews
        .map((review) => {
            return `
            <div class="itemsRoot">
            <div class="item">${review.stars}
              <div class="item-icon"></div>
              <div class="item-details">
                <div class="item-title">${review.name}</div>
                <div class="item-description">${review.review}</div>
              </div>
            </div>
        `;
          })
        .join(` `);

        return html;
    } catch (error) {
        console.error(error)
        return''
    }

}



