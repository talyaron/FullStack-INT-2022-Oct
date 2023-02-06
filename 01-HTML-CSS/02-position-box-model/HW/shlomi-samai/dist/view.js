function getItemsFromStorage() {
    try {
        var postsString = localStorage.getItem("posts");
        if (!postsString)
            throw new Error("Couldn't find items in storage");
        var items = JSON.parse(postsString);
        render(items);
    }
    catch (error) {
        console.error(error);
    }
}
