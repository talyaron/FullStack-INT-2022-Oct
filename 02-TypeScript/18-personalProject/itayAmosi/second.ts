const _users= getItemsFromStorage();

if(_users){
    users.push(..._users);

}
renderUsers(users,"itemsRoot");
