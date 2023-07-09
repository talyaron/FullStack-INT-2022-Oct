var handleRegistration = function () {
    var usernameInput = document.getElementById("username-field");
    var passwordInput = document.getElementById("password-field");
    if (!usernameInput || !passwordInput)
        return;
    var username = usernameInput.value;
    var password = passwordInput.value;
    if (!username || !password)
        return null;
    try {
        return fetch("http://localhost:3010/api/auth/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username, password: password })
        });
    }
    catch (error) {
        console.error(error);
    }
};
