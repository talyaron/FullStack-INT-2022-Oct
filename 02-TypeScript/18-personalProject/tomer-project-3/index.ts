const _reviews= getItemsFromStorage();

if(_reviews){
    reviews.push(..._reviews);

}
renderReviews(reviews,"itemsRoot");
console.log(reviews)


renderBooks(books,"bookContainer")