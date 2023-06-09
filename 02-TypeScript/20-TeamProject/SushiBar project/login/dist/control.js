function goToHomePage() {
    try {
        if (!homeLink)
            throw new Error("We can't show the customer page");
        homeLink.click();
    }
    catch (error) {
        console.error("The system failed");
    }
}
function showOption() {
    if (!morePage)
        throw new Error("We can't show the option page");
    morePage.style.display = "inline";
}
function closeOption() {
    if (!morePage)
        throw new Error("We can't show the option page");
    morePage.style.display = "none";
}
function logInToAdminPage(event) {
    try {
        event.preventDefault();
        var userName_1 = event.target.elements.userName.value;
        var password = event.target.elements.password.value;
        if (!usersList)
            throw new Error("We don't have any administrator users");
        var user = usersList.find(function (user) { return user.userName == userName_1; });
        if (!user) {
            alert("We can't find an account that match to your user name...");
        }
        else if (password != user.password) {
            alert("The password don't match to your user name... Try again");
        }
        else {
            if (!adminLink)
                throw new Error("We can't show the customer page");
            adminLink.click();
        }
    }
    catch (error) {
        console.error("something don't work with the log in function");
    }
}
