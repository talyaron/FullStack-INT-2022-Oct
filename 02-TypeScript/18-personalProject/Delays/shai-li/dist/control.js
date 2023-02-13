var addTask = function (title, description, dueTime) {
    var newTask = document.createElement("li");
    var bTag = document.createElement("b");
    bTag.append(title);
    newTask.append(bTag);
    newTask.append("- " + dueTime + ", " + description);
    tasksContainer === null || tasksContainer === void 0 ? void 0 : tasksContainer.append(newTask);
};
function addTaskToModel(title, description, dueTime) {
    try {
        tasks.push(new Task(title, description, dueTime, username));
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(tasks);
    }
    catch (error) {
        console.error(error);
    }
}
function renderTasks(tasksToAdd) {
    tasksToAdd.forEach(function (task) {
        return addTask(task.title, task.description, task.dueTime);
    });
}
