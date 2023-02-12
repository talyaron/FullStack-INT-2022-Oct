var itemsRoot = document.querySelector('#itemsRoot');
function getItemsFromStorage() {
    try {
        var reviewsString = localStorage.getItem("reviews");
        if (!reviewsString)
            throw new Error("cant find");
        var reviews = JSON.parse(reviewsString);
        return reviews;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
