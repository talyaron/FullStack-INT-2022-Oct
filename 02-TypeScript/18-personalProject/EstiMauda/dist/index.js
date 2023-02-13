var formSingin = document.querySelector(".formSingin");
var formSingup = document.querySelector(".formSingup");
function handleSingin(event) {
    var password = event.target.elements.password.valueAsNumber;
}
function handleSingup(event) {
    var userName = event.target.elements.name.value;
    var password = event.target.elements.password.valueAsNumber;
    // const passwordRepeat = event.target.elements.passwordRepeat.valueAsNumber;
    console.log("handleSingup");
    chackPassword();
    users.push(new Users(userName, password));
    randelDetails();
}
function handleAddUsers(ev) {
    try {
        ev.preventDefault();
        //   console.log(ev);
        //   const name = ev.target.elements.name.value;
        //   const password = ev.target.elements.password.valueAsNumber;
        //   const level = ev.target.elements.level.valueAsNumber;
        //   users.push(new Users(name,  password, level));
        //   // localStorage.setUsers('users',JSON.stringify(users));
        //   console.log(users);
        //   ev.target.reset();
        //   console.log(name);
        //   if (!usersRoot) throw new Error("usersRoot is null");
        //   renderusers(users, "usersRoot");
    }
    catch (error) {
        console.error(error);
    }
}
function handleViewPassword() {
    try {
        var passwordElement = document.querySelector(".pass");
        console.dir(passwordElement);
        if (passwordElement.type === "password") {
            passwordElement.type = "text";
            console.log(passwordElement.type);
        }
        else {
            passwordElement.type = "password";
            console.log(passwordElement.type);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function chackPassword() {
    try {
        var passwordElement = document.querySelector(".password");
        var passwordReapetElement = document.querySelector(".passwordRepeat");
        console.dir(passwordElement);
        console.dir(passwordReapetElement);
        do {
            alert("The password is not same Try again");
            passwordElement.inputIndex = 0;
            passwordReapetElement.innerHTML = 0;
        } while (passwordElement.inputIndex != passwordReapetElement.innerHTML);
    }
    catch (error) {
        console.error(error);
    }
}
function renderusers(users, renderElementId) {
    try {
        if (!users || !Array.isArray(users))
            throw new Error("users is not an array");
        var html = users
            .map(function (Users) {
            return "\n    <div class=\"Users\">\n      <h3>" + Users.name + "</h3>\n      <div>level: " + Users.level + "</div>\n    </div>\n    ";
        })
            .join(" ");
        console.log(html);
        var element = document.querySelector("#" + renderElementId);
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteUsers(uid) {
    try {
        console.log(uid);
        var index = users.findIndex(function (Users) { return Users.uid === uid; });
        if (index === -1)
            throw new Error("Users not found");
        users.splice(index, 1);
        if (!usersRoot)
            throw new Error("UsersRoot is undefined");
        renderusers(users, "usersRoot");
        // localStorage.setUsers("users", JSON.stringify(users))
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveusers() {
    console.log('save users');
    localStorage.setUsers('users', JSON.stringify(users));
}
// renderUsers(users, "usersRoot");
