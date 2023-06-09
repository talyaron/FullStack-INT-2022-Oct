renderTasks(tasks.filter(function (task) { return task.username === username; }));
if (usernamePlaceholder) {
    usernamePlaceholder.innerText = "Hello " + username + " - ";
}
