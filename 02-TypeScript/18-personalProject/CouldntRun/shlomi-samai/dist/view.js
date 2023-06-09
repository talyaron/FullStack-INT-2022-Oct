function loadpostsPage() {
    // loadpostsToSorage();
    renderStory();
    render(getItemsFromStorage());
}
function loadpostsToSorage() {
    localStorage.setItem("posts", JSON.stringify(posts));
}
function loadUsersPage() {
    getUserFromStorage();
    // loadUsersToSorage();
    renderusers(getUserFromStorage());
}
function loadUsersToSorage() {
    localStorage.setItem("users", JSON.stringify(users));
}
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
        var newUsers = JSON.parse(postsString);
        return (newUsers);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
