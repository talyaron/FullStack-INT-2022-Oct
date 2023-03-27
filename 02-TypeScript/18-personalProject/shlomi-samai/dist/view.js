function loadpostsPage() {
    loadpostsToSorage();
    render(getItemsFromStorage());
    renderStory(getUserFromStorage());
    ף;
}
function loadpostsToSorage() {
    localStorage.setItem("posts", JSON.stringify(posts));
}
function loadUsersPage() {
    loadUsersToSorage();
    renderusers(getUserFromStorage());
}
function loadUsersToSorage() {
    localStorage.setItem("users", JSON.stringify(users));
}
function getItemsFromStorage() {
    try {
        const postsString = localStorage.getItem("posts");
        if (!postsString)
            throw new Error("Couldn't find items in storage");
        const items = JSON.parse(postsString);
        return (items);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
function getUserFromStorage() {
    try {
        const postsString = localStorage.getItem("users");
        if (!postsString)
            throw new Error("Couldn't find items in storage");
        const users = JSON.parse(postsString);
        return (users);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
