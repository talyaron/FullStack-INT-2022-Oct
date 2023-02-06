function addToLocalStorage(event) {
    try {
        event.preventDefault();
        var name = event.target.elements.name.value;
        var review = event.target.elements.review.value;
        var stars = event.target.elements.stars.value;
        event.target.reset();
        reviews.push(new UserReview(name, review, stars));
        console.log(reviews);
        if (!itemsRoot)
            throw new Error("itemsRoot is null");
        renderReviews(reviews, "itemsRoot");
    }
    catch (error) {
        console.error(error);
    }
}
;
function renderReviews(reviews, renderElementId) {
    try {
        if (!reviews || !Array.isArray(reviews))
            throw new Error('reviews is not an array');
        var html = reviews
            .map(function (review) {
            return "\n            \n            <div class=\"item\">\n              <div class=\"item-details\">\n                <div class=\"item-title\">User Name: " + review.name + "</div>\n                <div class=\"item-description\">Star: " + review.stars + "</div>\n                <div class=\"item-description\">Review: " + review.review + "</div>\n\n              </div>\n            </div>\n        ";
        })
            .join(" ");
        var element = document.querySelector("#" + renderElementId);
        if (!element)
            throw new Error("couldent find element ");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function saveTolocalStorge() {
    localStorage.setItem("reviews", JSON.stringify(reviews));
}
