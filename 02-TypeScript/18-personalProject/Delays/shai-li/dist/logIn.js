var form = document.querySelector("#loginForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        addUser();
    });
}
function addUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var matchingUser = users.find(function (existingUser) { return existingUser.username === username; });
    if (!matchingUser) {
        var user = new User(username, password);
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }
    else {
        if (matchingUser.password !== password) {
            alert("Wrong Password!");
            return;
        }
    }
    localStorage.setItem("current-user", username);
    window.location.assign("./index.html");
}
