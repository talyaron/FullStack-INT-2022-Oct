var homePage = "";
for (var j = 0; j <= availbleUsers.length - 1; j++) {
    homePage += "<div class=\"userItem\"> \n            " + availbleUsers[j].name + "\n            <button onclick=\"renderTaskPerUser('" + availbleUsers[j].uid + "',availbleUsers)\">showTasksPerUser</button>\n          </div>";
}
console.log(availbleUsers);
console.log(homePage);
var html = document.querySelector("#exsistingUsers");
if (html !== null) {
    html.innerHTML = homePage;
    console.log(html);
}
function handleAddUser(ev) {
    debugger;
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var nickName = ev.target.elements.nickName.value;
        var pictureURL = ev.target.elements.pictureURL.value;
        users.push(new User(name, nickName, pictureURL));
        ev.target.reset();
        renderUser(users);
        console.log(users);
    }
    catch (error) {
        console.error(error);
    }
}
function renderUser(users) {
    var page = "";
    for (var j = 0; j <= users.length - 1; j++) {
        page += "<div class=\"userItem\"> \n              " + users[j].name + "\n              <button onclick=\"renderTaskPerUser('" + users[j].uid + "',users)\">showTasksPerUser</button>\n            </div>";
    }
    var html = document.querySelector("#newUsers");
    if (html !== null) {
        html.innerHTML = page;
        console.log(html);
    }
}
function renderTaskPerUser(uid, arr) {
    debugger;
    var page = "";
    for (var j = 0; j <= arr.length - 1; j++) {
        if (arr[j].uid === uid && arr[j].taskObjArr.length >= 1) {
            for (var i = 0; i <= arr[j].taskObjArr.length - 1; i++) {
                page += "<div class=\"taskItem\">\n              <button onclick=\"handleAddTask('" + availbleUsers[j].uid + "',users)\">addTask</button> \n              <h3>name: " + arr[j].taskObjArr[i].name + "</h3>\n              <h3>category:" + arr[j].taskObjArr[i].category + "</h3>\n              <h3>Description:" + arr[j].taskObjArr[i].description + "</h3> <button onclick=\"handleUpdateItem('" + arr[j].uid + "')\">Update</button>\n              <button onclick=\"handleDeleteItem('" + arr[j].uid + "',users,'" + arr[j].name + "')\">Remove</button>\n              </div>";
            }
        }
        else {
            "no previous taks";
            page += "<div class=\"taskItem\">\n        <button onclick=\"handleAddTask('" + arr[j].uid + "',users)\">addTask</button> \n        <button onclick=\"handleUpdateItem('" + arr[j].uid + "')\">Update</button>\n        <button onclick=\"handleDeleteItem('" + arr[j].uid + "',users,'" + arr[j].name + "')\">Remove</button>\n        </div>";
        }
    }
    console.log(page);
    var html = document.querySelector("#list");
    if (html !== null) {
        html.innerHTML = page;
        console.log(html);
    }
}
function handleAddTask(uid, users) {
    try {
        var name = prompt("enter your name");
        var category = prompt("enter the category");
        var description = prompt("enter a description");
        if (name != null && category != null && description != null) {
            for (var j = 0; j <= users.length - 1; j++) {
                if (users[j].uid === uid) {
                    users[j].taskObjArr.push(new Task(name, category, description));
                    renderTaskPerUser(users[j].uid, users);
                }
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteItem(uid, users, name) {
    try {
        debugger;
        for (var j = 0; j <= users.length - 1; j++) {
            if (users[j].uid === uid) {
                for (var i = 0; i <= users[j].taskObjArr.length - 1; i++) {
                    if (users[j].taskObjArr[i].name === name) {
                        users[j].taskObjArr.splice(i, 1);
                    }
                }
            }
            renderTaskPerUser(uid, users);
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
    catch (error) {
        console.error(error);
    }
}
//   function handleUpdateItem(uid: string) {
//     try {
//       let description;
//       description= prompt ("Enter a new description:");
//       const index = tasksDad.findIndex((Task) => Task.uid === uid);
//       if (index === -1) throw new Error("task not found");
//       if (description)
//       tasksDad[index].description= description;
//       renderTask(tasksDad);
//     } catch (error) {
//       console.error(error);
//     }
//   }
