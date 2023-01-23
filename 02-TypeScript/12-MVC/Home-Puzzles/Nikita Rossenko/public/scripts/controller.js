function createNewTask(addTask) {
    var title = prompt('Please enter a title');
    var description = prompt('Please enter a description');
    if (title && description && addTask) {
        var task = "<div class=\"task\">\n        <p>" + title + "</p>\n        <p>" + description + "</p>\n        <button>Done!</button>\n        </div>";
        addTask.innerHTML += task;
    }
}
tasks1Button === null || tasks1Button === void 0 ? void 0 : tasks1Button.addEventListener('click', function (addTasks1) {
    createNewTask(tasks1);
});
tasks2Button === null || tasks2Button === void 0 ? void 0 : tasks2Button.addEventListener('click', function (addTasks2) {
    createNewTask(tasks2);
});
tasks3Button === null || tasks3Button === void 0 ? void 0 : tasks3Button.addEventListener('click', function (addTasks3) {
    createNewTask(tasks3);
});
