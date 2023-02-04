var __users = getUsersDataFromStorage();
if (__users) {
    users.push.apply(users, __users);
}
console.log("__user", __users);
