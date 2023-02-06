function getItemsFromStorage() {
    try {
        var postsString = localStorage.getItem("posts");
        if (!postsString)
            throw new Error("Couldn't find items in storage");
        var items = JSON.parse(postsString);
        return (items);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
function getUserFromStorage() {
    try {
        var postsString = localStorage.getItem("users");
        if (!postsString)
            throw new Error("Couldn't find items in storage");
        var users = JSON.parse(postsString);
        return (users);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
