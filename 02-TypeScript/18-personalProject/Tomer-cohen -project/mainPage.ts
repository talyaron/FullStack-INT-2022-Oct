const _reviews = getReviewsFromStorage();

if (_reviews) {
    reviews.push(..._reviews);
}

renderreviews(reviews);