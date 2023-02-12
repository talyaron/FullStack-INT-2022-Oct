const solution = randomSolutionSelector();
console.log("solution:" , solution?.name);

const _users = getUsersDataFromStorage();
const _loggedInUser = getLoggedInUserFromStorage();


if (_users) {
    users.push(..._users);
}

if (_loggedInUser) {
    loggedInUser = _loggedInUser;
}

renderUserData(users, "userDataRoot");