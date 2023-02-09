var _users = getItemsFromStorage();
if (_users) {
    users.push.apply(users, _users);
}
renderUsers(users, "itemsRoot");
