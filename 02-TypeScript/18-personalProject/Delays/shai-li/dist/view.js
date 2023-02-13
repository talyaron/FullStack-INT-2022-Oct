var _a;
var addNewTaskButton = document.querySelector("#addNewTaskBtn");
var tasksContainer = document.querySelector("#newTask");
var filterInput = document.querySelector(".filter");
var usernamePlaceholder = document.querySelector("#usernamePlaceholder");
var username = (_a = localStorage.getItem("current-user")) !== null && _a !== void 0 ? _a : "";
if (filterInput) {
    filterInput.addEventListener("change", function (e) {
        var filterValue = e.target.value;
        var tasksToRender = filterValue === "all"
            ? tasks
            : tasks.filter(function (task) {
                return (filterValue === "completed" && task.completed) ||
                    (filterValue === "incomplete" && !task.completed);
            });
        if (tasksContainer) {
            tasksContainer.innerHTML = "";
            renderTasks(tasksToRender);
        }
    });
}
addNewTaskButton === null || addNewTaskButton === void 0 ? void 0 : addNewTaskButton.addEventListener("submit", function (e) {
    e.preventDefault();
    var titleInput = document.querySelectorAll("input")[0];
    var descriptionInput = document.querySelectorAll("input")[1];
    var dueTimeInput = document.querySelectorAll("select")[0];
    addTask(titleInput.value, descriptionInput.value, dueTimeInput.value);
    addTaskToModel(titleInput.value, descriptionInput.value, dueTimeInput.value);
    titleInput.value = "";
    descriptionInput.value = "";
    dueTimeInput.value = "";
});
