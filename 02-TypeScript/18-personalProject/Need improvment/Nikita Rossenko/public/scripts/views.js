var allUsersString = localStorage.getItem('allUsers');
var isLoggedInString = localStorage.getItem('isLoggedIn');
var isLoggedIn = false;
var loggedInUser = '';
if (isLoggedInString) {
    var isLoggedInObject = JSON.parse(isLoggedInString);
    isLoggedIn = isLoggedInObject['isLoggedIn'];
    loggedInUser = isLoggedInObject['username'];
}
else {
    isLoggedIn = false;
}
