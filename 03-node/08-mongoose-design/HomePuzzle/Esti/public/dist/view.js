function renderUsers(users) {
    try {
        if (!users)
            throw new Error("No users");
        var html = users
            .map(function (user) {
            return renderUser(user);
        })
            .join(" ");
        var usersElement = document.querySelector(".container");
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
        return "<div class=\"userCard\">\n              <p contenteditable=\"true\" oninput=\"handleUserNameUpdate(event, '" + user.uid + "')\">" + user.name + "</p>\n              <button onclick='handleDeleteUser(\"" + user._id + "\")'>DELETE</button>\n              </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
