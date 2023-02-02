function getReviewsFromStorage() {
    try {
        //get items from storage
        var reviewsString = localStorage.getItem("reviews");
        if (!reviewsString)
            throw new Error("Couldn't find items in storage");
        //convert to array
        var reviews = JSON.parse(reviewsString);
        return reviews;
        console.log(reviews);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function renderBookOptions() {
    try {
        if (!books)
            throw new Error("Couldnt find books");
        var optionsHTML = books.map(function (book) { return "<option value=" + book.uid + ">" + book.name + "</option>"; });
        return "<select>" + optionsHTML + "</select>";
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
