function handleGetUsers() {
    console.log("test");
    try {
        fetch("/api/get-users")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            try {
                if (!users)
                    throw new Error("didnt find users");
                console.log(users);
                renderUsers(users);
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
function renderUsers(users) {
    try {
        if (!users)
            throw new Error("No users");
        var html = users
            .map(function (user) {
            return renderUser(user);
        })
            .join(" ");
        var usersElement = document.querySelector("#users");
        if (!usersElement)
            throw new Error("coundnt find users element on DOM");
        usersElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderUser(user) {
    try {
        console.log(user);
        return "<div class=\"userCard\">\n            <img src=\"" + user.src + "\" alt=\"user name is " + user.name + "\">\n            <p contenteditable oninput=\"handleUserNameUpdate(event, '" + user.uid + "')\">" + user.name + "</p>\n            <button onclick='handleDeleteUser(\"" + user._id + "\")'>DELETE</button>\n            <button onclick='handleUpdateName(\"" + user + "\")'>UPDATE NAME</button>\n            </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
function handleUserNameUpdate(ev, uid) {
    try {
        console.log(uid);
        var name = ev.target.textContent;
        fetch("/api/update-user-name", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, uid: uid })
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddUser(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var src = ev.target.elements.src.value;
        if (!name)
            throw new Error("No name");
        if (!src)
            throw new Error("No src");
        var newUser = { name: name, src: src };
        //send to server:
        fetch("/api/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
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
function handleDeleteUser(_id) {
    try {
        console.log(_id);
        fetch("/api/delete-user", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            renderUsers(users);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
/// finish update of the name, there is an issue with line 136 not getting any information from the HTML
var handleUpdateName = function (user) {
    var updateUser = document.getElementById("userCard");
    console.log(updateUser);
    if (updateUser)
        updateUser.innerHTML += "<div class=\"updateForm\">\n  <form onsubmit=\"updateName(\"" + user._id + "\")\">\n  <input type=\"text\" name=\"new name\" placeholder=\"new name\" required>\n  <button type=\"submit\">UPDATE</button>\n</form>\n\n  </div>";
};
var updateName = function (_id) {
    try {
        fetch("/api/update-user", {
            method: "UPDATE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            renderUsers(users);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
};
