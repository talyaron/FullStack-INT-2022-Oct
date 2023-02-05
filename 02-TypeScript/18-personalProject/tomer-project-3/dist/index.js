var _reviews = getItemsFromStorage();
if (_reviews) {
    reviews.push.apply(reviews, _reviews);
}
renderReviews(reviews, "itemsRoot");
console.log(reviews);
