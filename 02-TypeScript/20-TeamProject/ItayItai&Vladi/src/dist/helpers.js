var insertLeftOfLisk = function (zone, mouseX) {
    var staticLists = zone.querySelectorAll(".boardContainer__main__list:not(.isDragging)");
    var closestTask = null;
    var closestOffset = Number.NEGATIVE_INFINITY;
    staticLists.forEach(function (list) {
        var cardBoundaries = list.getBoundingClientRect();
        var offset = mouseX - cardBoundaries.left - cardBoundaries.width / 2;
        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = list;
        }
    });
    return closestTask;
};
var insertAboveTask = function (zone, mouseY) {
    var staticCards = zone.querySelectorAll(".boardContainer__main__list__card:not(.isDragging)");
    var closestTask = null;
    var closestOffset = Number.NEGATIVE_INFINITY;
    staticCards.forEach(function (card) {
        var cardBoundaries = card.getBoundingClientRect();
        var offset = mouseY - cardBoundaries.top - cardBoundaries.height / 2;
        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = card;
        }
    });
    return closestTask;
};
function userListFromStorage() {
    var getLocalStorage = localStorage.getItem("signedUpUsers");
    if (getLocalStorage) {
        var userList = JSON.parse(getLocalStorage);
        return userList;
    }
    return [];
}
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function checkIfEmailExists(email) {
    var userList = userListFromStorage();
    var findEmail = userList.find(function (user) { return user.email === email; });
    if (findEmail)
        return true;
    return false;
}
var randomColor = function () { return Math.floor(Math.random() * 16777215).toString(16); };
