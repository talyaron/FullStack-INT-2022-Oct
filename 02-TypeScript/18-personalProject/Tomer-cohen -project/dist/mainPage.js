var _reviews = getReviewsFromStorage();
if (_reviews) {
    reviews.push.apply(reviews, _reviews);
}
renderReviews(reviews);
