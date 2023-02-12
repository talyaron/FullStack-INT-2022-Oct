var solution = randomSolutionSelector();
console.log("solution:", solution === null || solution === void 0 ? void 0 : solution.name);
var _users = getUsersDataFromStorage();
var _loggedInUser = getLoggedInUserFromStorage();
if (_users) {
    users.push.apply(users, _users);
}
if (_loggedInUser) {
    loggedInUser = _loggedInUser;
}
renderUserData(users, "userDataRoot");
