var page = "";
for (var j = 0; j <= availbleUsers.length - 1; j++) {
    page += "<div class=\"userItem\"> \n            " + availbleUsers[j].name + "\n          </div>";
}
console.log(page);
var html = document.querySelector("#exsistingUsers");
if (html !== null) {
    html.innerHTML = page;
    console.log(html);
}
function handleAddTask(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var category = ev.target.elements.category.value;
        var description = ev.target.elements.description.value;
        var dueDate = ev.target.elements.dueDate.value;
        tasksDad.push(new Task(name, category, description, dueDate));
        localStorage.setItem('tasksDad', JSON.stringify(tasksDad));
        ev.target.reset();
        renderTask(tasksDad);
        console.log(tasksDad);
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddUser(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var nickName = ev.target.elements.nickName.value;
        var pictureURL = ev.target.elements.pictureURL.value;
        var tasks = ev.target.elements.tasksArr.value;
        users.push(new User(name, nickName, pictureURL, tasks));
        ev.target.reset();
        renderUser(users);
        console.log(users);
    }
    catch (error) {
        console.error(error);
    }
}
function renderTask(arr) {
    console.log(arr);
    var page = "";
    for (var j = 0; j <= arr.length - 1; j++) {
        page += "<div class=\"taskItem\"> \n              <h3>name: " + arr[j].name + "</h3>\n              <h3>category:" + arr[j].category + "</h3>\n              <h3>Description:" + arr[j].description + "</h3> <button onclick=\"handleUpdateItem('" + arr[j].uid + "')\">Update</button></div>\n              <h3>Duedate:" + arr[j].dueDate + "</h3>\n              <button onclick=\"handleDeleteItem('" + arr[j].uid + "')\">Remove</button>\n              </div>";
    }
    console.log(page);
    var html = document.querySelector("#list");
    if (html !== null) {
        html.innerHTML = page;
        console.log(html);
    }
}
function renderUser(arr) {
    console.log(arr);
    var page = "";
    for (var j = 0; j <= arr.length - 1; j++) {
        page += "<div class=\"taskItem\"> \n              <h3>name: " + arr[j].name + "</h3>\n              <h3>Nickname:" + arr[j].nickName + "</h3>\n              <h3>Picture:" + arr[j].pictureURL + "</h3>\n              </div>";
    }
    console.log(page);
    var html = document.querySelector("#users");
    if (html !== null) {
        html.innerHTML = page;
        console.log(html);
    }
}
function handleDeleteItem(uid) {
    try {
        console.log(uid);
        var index = tasksDad.findIndex(function (Task) { return Task.uid === uid; });
        if (index === -1)
            throw new Error("item not found");
        tasksDad.splice(index, 1);
        renderTask(tasksDad);
        localStorage.setItem("tasksDad", JSON.stringify(tasksDad));
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdateItem(uid) {
    try {
        var description = void 0;
        description = prompt("Enter a new description:");
        var index = tasksDad.findIndex(function (Task) { return Task.uid === uid; });
        if (index === -1)
            throw new Error("task not found");
        if (description)
            tasksDad[index].description = description;
        renderTask(tasksDad);
    }
    catch (error) {
        console.error(error);
    }
}
