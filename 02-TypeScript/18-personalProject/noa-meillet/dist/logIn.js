var _users = getUsersFromStorage();
if (_users) {
    usersList.push.apply(usersList, _users);
}
