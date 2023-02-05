function saveToLocalStorage(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var review = ev.target.elements.review.value;
        var stars = ev.target.elements.stars.value;
        reviews.push(new UserReview(name, review, stars));
        console.log(reviews);
        ev.target.reset();
        if (!itemsRoot)
            throw new Error("itemsRoot is null");
        localStorage.setItem('reviews', JSON.stringify(reviews));
        itemsRoot.innerHTML = renderReviews(reviews);
    }
    catch (error) {
        console.error(error);
    }
}
;
function renderReviews(reviews) {
    try {
        if (!reviews || !Array.isArray(reviews))
            throw new Error('reviews is not an array');
        var html = reviews
            .map(function (review) {
            return "\n            <div class=\"itemsRoot\">\n            <div class=\"item\">\n              <div class=\"item-details\">\n                <div class=\"item-title\">User Name: " + review.name + "</div>\n                <div class=\"item-description\">Star: " + review.stars + "</div>\n                <div class=\"item-description\">Review: " + review.review + "</div>\n\n              </div>\n            </div>\n        ";
        })
            .join(" ");
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
