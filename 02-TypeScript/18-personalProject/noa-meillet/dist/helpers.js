function getClubCardsForUser(id) {
    try {
        if (!clubCardsList) {
            console.error("there is no club cards at all");
            return undefined;
        }
        return clubCardsList.filter(function (user) { return user.userId == id; });
    }
    catch (error) {
        console.error("error loading club cards for user");
    }
}
function getAmountOfPoints(storePoints, userPoints) {
    try {
        if (storePoints == -1)
            return "this store do not acumulate points";
        else
            return userPoints;
    }
    catch (error) {
        console.error("error loading amount of points for user");
        return -1;
    }
}
function newUserLogIn(newUserId, newUserFullName) {
    try {
        if (!link)
            throw new Error("We can't show the user page");
        localStorage.setItem("user id", newUserId);
        localStorage.setItem("user name", newUserFullName);
    }
    catch (error) {
        console.error("We can't log with the new user to the system");
    }
}
