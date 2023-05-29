function hendelUserSingIn(event) {
    try {
        console.log(event);
        event.preventDefault();
        var name = event.target.elements.name.value;
        var password = event.target.elements.password.value;
        var selected = document.getElementById('selected');
        var studentTeacherIndex = selected.selectedIndex;
        var studentTeacher = "";
        if (studentTeacherIndex === 0)
            studentTeacher = 'teacher';
        if (studentTeacherIndex === 1)
            studentTeacher = 'student';
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No password");
        // const newUser: any = { name, password };
        //     fetch("/API/users/singin-users")
        //       .then((res) => res.json())
        //       .then(({ users }) => {
        //         try {
        //           if (!users) throw new Error("didnt find users");
        //           console.log(users);
        //           renderUsers(users);
        //         } catch (error) {
        //           console.error(error);
        //         }
        //       });
    }
    catch (error) {
        console.error(error);
    }
}
//send to server:
// fetch("/API/users/singin-user", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newUser),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// } catch (error) {
//   console.error(error);
// }
// }
function handleUserNameUpdate(event, uid) {
    try {
        console.log(uid);
        var name = event.target.textContent;
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
function handleAddUser(event) {
    try {
        event.preventDefault();
        var name = event.target.elements.name.value;
        var password = event.target.elements.password.value;
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No password");
        var newUser = { name: name, password: password };
        //send to server:
        fetch("/api/users/add-user", {
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
        fetch("/api/users/delete-user", {
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
