function registerHandler(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    var passwordConfirm = e.target.elements.passwordConfirm.value;
    var passwordConfirmInput = document.querySelector("#passwordConfirm");
    var usernameInput = document.querySelector("#username");
    var popMessage = document.querySelector('#regitserPopMessage');
    if (username && password && passwordConfirm) {
        if (password != passwordConfirm) {
            if (passwordConfirmInput && !popMessage) {
                passwordConfirmInput.insertAdjacentHTML("afterend", "<span id='popMessage'>Passwords don't match!</span>");
                passwordConfirmInput.addEventListener("click", function (e) {
                    var popMessage = document.querySelector('#regitserPopMessage');
                    if (popMessage) {
                        popMessage.remove();
                    }
                });
                var passwordInput = document.querySelector("#password");
                if (passwordInput) {
                    passwordInput.addEventListener("click", function (e) {
                        var popMessage = document.querySelector('#regitserPopMessage');
                        if (popMessage) {
                            popMessage.remove();
                        }
                    });
                }
            }
            return false;
        }
        else {
            allUsersString = localStorage.getItem('allUsers');
            if (allUsersString) {
                if (allUsersString) {
                    var allUsersArray = JSON.parse(allUsersString);
                    if (allUsersArray.length > 0) {
                        var userExist_1 = false;
                        allUsersArray.forEach(function (user) {
                            if (user.username.toLowerCase() == username.toLowerCase()) {
                                if (passwordConfirmInput && !popMessage && usernameInput) {
                                    passwordConfirmInput.insertAdjacentHTML("afterend", "<span id='regitserPopMessage'>This Username is already exists!</span>");
                                    usernameInput.addEventListener("click", function (e) {
                                        var popMessage = document.querySelector('#regitserPopMessage');
                                        if (popMessage) {
                                            popMessage.remove();
                                        }
                                    });
                                }
                                userExist_1 = true;
                                return;
                            }
                        });
                        if (!userExist_1) {
                            var newUser = new User(username, password);
                            allUsersArray.push(newUser);
                            localStorage.setItem('allUsers', JSON.stringify(allUsersArray));
                            location.href = 'login.html';
                        }
                    }
                    else {
                        var newUser = new User(username, password);
                        allUsersArray.push(newUser);
                        localStorage.setItem('allUsers', JSON.stringify(allUsersArray));
                        location.href = 'login.html';
                    }
                }
            }
        }
    }
}
