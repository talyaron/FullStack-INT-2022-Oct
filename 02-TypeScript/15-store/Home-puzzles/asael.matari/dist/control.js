function handlDetails(ev) {
    try {
        ev.preventDefault();
        var fullName = ev.target.fullname.value;
        var email = ev.target.email.value;
        var url = ev.target.Url.value;
        var password = ev.target.password.value;
        var color = ev.target.color.value;
        arrayOfUsers.push(new UserDetail(fullName, email, url, password, color));
        console.log(container);
        if (!container)
            throw new Error("container variable is empty");
        container.innerHTML = render(arrayOfUsers);
    }
    catch (error) {
        console.error(error);
    }
}
function render(users) {
    try {
        if (!arrayOfUsers)
            throw new Error("you don't insert a variable");
        var html = users.map(function (user) {
            return "<div class=\"item\" style=\"background-color:" + user.color + "\">\n            <h3>" + user.fullName + "</h3>\n            <div>Email: " + user.email + " </div>\n            <div><img src=\" " + user.url + "\"></div>\n            <div>Password: " + user.password + "</div>\n            <div>Color: " + user.color + "</div>\n            <button onclick=\"handleDeleteItem('" + user.uid + "')\">Remove</button>\n          </div>\n          ";
        }).join(" ");
        return html;
    }
    catch (error) {
        console.error(error);
    }
}
