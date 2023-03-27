function handleUsers() {
    console.log("test");
    try {
        fetch("/api/getUsers")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            try {
                if (!users)
                    throw new Error("didnt found users");
                console.log(users);
                renderUserList(users);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderUserList(users) {
    try {
        if (!users)
            throw new Error("no users found");
        var html = users.map(function (user) {
            return "<div class=\"userCard\">\n        <img src =\"" + user.src + "\" alt=\"user name is " + user.name + "\"/>\n        <p> " + user.name + "</p>\n        </div>";
        })
            .join(" ");
        var userElements = document.querySelector("#users");
        console.log(userElements);
        if (!userElements)
            throw new Error("coulds find users element in dom");
        userElements.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handelAdd(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var src = ev.target.elements.src.value;
        if (!name)
            throw new Error("no name");
        if (!src)
            throw new Error("No src");
        var newUser = { name: name, src: src };
        fetch("/api/add-userdetils", {
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
