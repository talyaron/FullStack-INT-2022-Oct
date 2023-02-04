const __users = getUsersDataFromStorage();



if (__users) {
    users.push(...__users);
}

console.log("__user" , __users);