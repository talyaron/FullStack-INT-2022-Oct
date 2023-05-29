"use strict";
exports.__esModule = true;
function handleGetUsers() {
    console.log("test");
    try {
        fetch("/api/users/get-users")
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
        return "<div class=\"userCard\">\n            <p > " + user.name + " </p>\n            <p contenteditable oninput=\"handleUserNameUpdate(event, '" + user.uid + "')\">" + user.name + "</p>\n            <button onclick='handleDeleteUser(\"" + user._id + "\")'>DELETE</button>\n            <select defaultValue='student' onchange='handleUpdateUserType(event, \"" + user._id + "\")'>\n              <option value='student'>Student</option>\n              <option value='teacher'>Teacher</option>\n            </select>\n            </div>";
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
        fetch("/api/users/update-user-name", {
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
        var password = ev.target.elements.password.value;
        var typeUser = ev.target.elements.teacherStudentSelect.value;
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No password");
        if (!typeUser)
            throw new Error("No selected");
        var newUser = { name: name, password: password, typeUser: typeUser };
        conso;
        "Content-Type";
        "application/json",
        ;
    }
    finally { }
    body: JSON.stringify({ _id: _id }),
    ;
}
then(function (res) { return res.json(); })
    .then(function (_a) {
    var users = _a.users;
    renderUsers(users);
})["catch"](function (error) {
    console.error(error);
});
try { }
catch (error) {
    console.error(error);
}
// function handleUpdateUserType(ev: any, userId: string) {
//   try {
//     const userType = ev.target.value;
//     console.log(userType)
//     fetch("/api/users/update-user-type", {
//       method: "PATCH",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId, userType }),
//     })
//     .then((res) => res.json())
//       .then(({ users }) => {
//         renderUsers(users);
//       })
//       .catch((error) => {
//         console.error(error);
//       });;
//   } catch (error) {
//     console.error(error);
//   }
// }
