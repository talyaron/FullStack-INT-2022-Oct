var homePage = "";
debugger;
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
    renderUser(users);
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var nickName = ev.target.elements.nickName.value;
        var pictureURL = ev.target.elements.pictureURL.value;
        debugger;
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
    debugger;
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
    debugger;
    for (var j = 0; j <= arr.length - 1; j++) {
        debugger;
        if (arr[j].uid === uid && arr.length >= 1) {
            for (var i = 0; i <= arr[j].taskObjArr.length - 1; i++) {
                page += "<div class=\"taskItem\">\n              <form onsubmit=\"handleAddTask(event)\">\n              <input type=\"text\" name=\"name\" placeholder=\"name\" required />\n              <input type=\"text\" name=\"category\" placeholder=\"category\" required />\n              <input type=\"text\" name=\"description\" placeholder=\"description\" required />\n              <input type=\"date\" name=\"dueDate\" placeholder=\"dueDate\"  />\n              <input type=\"submit\" value=\"ADD\">\n              </form>\n              <button onclick=\"handleAddTask('" + availbleUsers[j].uid + "',availbleUsers)\">addTask</button> \n              <h3>name: " + arr[j].taskObjArr[i].name + "</h3>\n              <h3>category:" + arr[j].taskObjArr[i].category + "</h3>\n              <h3>Description:" + arr[j].taskObjArr[i].description + "</h3> <button onclick=\"handleUpdateItem('" + arr[j].uid + "')\">Update</button>\n              <button onclick=\"handleDeleteItem('" + arr[j].uid + "')\">Remove</button>\n              </div>";
            }
        }
        else {
            page += "<div class=\"taskItem\">\n        <form onsubmit=\"handleAddTask(event)\">\n        <input type=\"text\" name=\"name\" placeholder=\"name\" required />\n        <input type=\"text\" name=\"category\" placeholder=\"category\" required />\n        <input type=\"text\" name=\"description\" placeholder=\"description\" required />\n        <input type=\"date\" name=\"dueDate\" placeholder=\"dueDate\"  />\n        <input type=\"submit\" value=\"ADD\">\n        </form>\n        <button onclick=\"handleAddTask('" + availbleUsers[j].uid + "',availbleUsers)\">addTask</button> \n        <button onclick=\"handleUpdateItem('" + arr[j].uid + "')\">Update</button>\n        <button onclick=\"handleDeleteItem('" + arr[j].uid + "')\">Remove</button>\n        </div>";
        }
        console.log(page);
        var html_1 = document.querySelector("#list");
        if (html_1 !== null) {
            html_1.innerHTML = page;
            console.log(html_1);
        }
    }
}
// function handleAddTask(ev) {
//     try {
//         ev.preventDefault();
//         const name = ev.target.elements.name.value;
//         const category = ev.target.elements.category.value;
//         const description = ev.target.elements.description.value;
//         const dueDate = ev.target.elements.dueDate.value;
//         tasksDad.push(new Task(name, category, description, dueDate))
//         localStorage.setItem('tasksDad',JSON.stringify(tasksDad));
//         ev.target.reset();
//         renderTask(tasksDad)
//         console.log(tasksDad)
//     }
//     catch (error) {
//         console.error(error)
//     }
// }
// function renderTask(arr:Task[]):void {
//     console.log(arr);
//     let page = "";
//     for (let j = 0; j <= arr.length - 1; j++) {
//       page += `<div class="taskItem"> 
//               <h3>name: ${arr[j].name}</h3>
//               <h3>category:${arr[j].category}</h3>
//               <h3>Description:${arr[j].description}</h3> <button onclick="handleUpdateItem('${arr[j].uid}')">Update</button></div>
//               <h3>Duedate:${arr[j].dueDate}</h3>
//               <button onclick="handleDeleteItem('${arr[j].uid}')">Remove</button>
//               </div>`;
//     }
//     console.log(page);
//     const html: HTMLDivElement | null = document.querySelector("#list");
//     if (html !== null) {
//       html.innerHTML = page;
//       console.log(html);
//     }
//   }
//   function handleDeleteItem(uid: string) {
//     try {
//       console.log(uid);
//       const index = tasksDad.findIndex((Task) => Task.uid === uid);
//       if (index === -1) throw new Error("item not found");
//       tasksDad.splice(index, 1);
//       renderTask(tasksDad);
//       localStorage.setItem("tasksDad", JSON.stringify(tasksDad))
//     } catch (error) {
//       console.error(error);
//     }
//   }
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
