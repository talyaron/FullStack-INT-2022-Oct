function loadpostsPage() {
    loadpostsToSorage();
    render(getItemsFromStorage());
    renderStory(getUserFromStorage());
}
function loadpostsToSorage() {
    localStorage.setItem("posts", JSON.stringify(posts));
}
function loadUsersPage() {
    debugger;
    getUserFromStorage();
    loadUsersToSorage();
    renderusers(getUserFromStorage());
}
function loadUsersToSorage() {
    localStorage.setItem("users", JSON.stringify(users));
}
function getItemsFromStorage() {
    try {
        debugger;
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
        const newUsers = JSON.parse(postsString);
        return (newUsers);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
