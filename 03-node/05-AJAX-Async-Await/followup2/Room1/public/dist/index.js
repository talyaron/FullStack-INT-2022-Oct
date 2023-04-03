function getUser() {
    try {
        fetch("/get-users")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            try {
                renderUsers(users);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) { }
}
function renderUsers(users) {
    try {
        if (!users)
            throw new Error("No users");
        var html = users
            .map(function (user) {
            return "<div class=\"userCard\">\n            <img src=\"" + user.src + "\" alt=\"user name is " + user.name + " " + user.age + "\">\n            <p>" + user.name + "</p>\n            <p>" + user.age + "</p>\n            </div>";
        })
            .join(" ");
        var usersElement = document.querySelector("#user");
        if (!usersElement)
            throw new Error("coundnt find users element on DOM");
        usersElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddUsers(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var src = ev.target.elements.src.value;
        var age = ev.target.elements.age.value;
        if (!name)
            throw new Error("No name");
        if (!src)
            throw new Error("No src");
        if (!age)
            throw new Error("No age value");
        var newUser = { name: name, src: src, age: age };
        //send to server:
        fetch("/add-user", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
