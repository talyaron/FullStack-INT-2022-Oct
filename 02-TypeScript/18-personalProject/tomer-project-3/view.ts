const itemsRoot = document.querySelector('#itemsRoot');

function getItemsFromStorage(): UserReview[]|undefined{
    try {
        const reviewsString= localStorage.getItem(`reviews`);
        if(!reviewsString)throw new Error(`cant find`);

        const reviews= JSON.parse(reviewsString);
        return reviews;

    } catch (error) {
        console.error(error)
        return undefined;
    }
}