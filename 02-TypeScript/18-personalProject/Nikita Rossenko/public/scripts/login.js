function loginHandler(e) {
    e.preventDefault();
    var allUsersString = localStorage.getItem('allUsers');
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    var passwordInput = document.querySelector("#password");
    var popMessage = document.querySelector('#loginPopMessage');
    localStorage.setItem('isLoggedIn', 'false');
    if (allUsersString) {
        var allUsersArray = JSON.parse(allUsersString);
        var foundUser_1 = false;
        if (username && password) {
            allUsersArray.forEach(function (user) {
                if (user.username.toLowerCase() === username.toLowerCase() && user.password === password) {
                    console.log("okay");
                    foundUser_1 = true;
                    var isLoggedInString = "{\"isLoggedIn\":true,\"username\":\"" + username + "\"}";
                    localStorage.setItem('isLoggedIn', isLoggedInString);
                    location.href = 'index.html';
                }
            });
            if (!foundUser_1) {
                if (passwordInput && !popMessage) {
                    passwordInput.insertAdjacentHTML("afterend", "<span id='loginPopMessage'>Username don't exists or wrong password!</span>");
                }
            }
        }
    }
}
