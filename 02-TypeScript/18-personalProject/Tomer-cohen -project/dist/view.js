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
