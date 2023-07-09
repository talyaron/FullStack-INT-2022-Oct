var renderHistoryToDoList = [];
function handleGetHistories() {
    try {
        return fetch("http://localhost:3010/api/histories")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var histories = _a.histories;
            try {
                if (!histories)
                    throw new Error("didnt find histories");
                return histories;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderHistories() {
    try {
        var tasksPromise = handleGetHistories();
        if (!tasksPromise)
            return;
        tasksPromise.then(function (histories) {
            histories.forEach(function (history) {
                renderHistoryToDoList.push("<div class=\"task\" id=\"task-" + history.task._id + "\">\n                <p>" + history.task.name + "</p>\n\t\t\t\t<div class=\"task-right-wrapper\">\n\t\t\t\t\t<div class=\"check-box-task\" id=\"checkBox-" + history.task._id + "\" style='background: " + (history.task.status === "finished" && "green") + "'></div>\n                <div>" + history.type + "</div>\n\t\t\t\t</div>\n            </div>\n\t\t\t");
                var tasksElement = document.getElementById("histories");
                if (!tasksElement)
                    throw new Error("coundnt find tasks element on DOM");
                tasksElement.innerHTML = renderHistoryToDoList.reverse().join("");
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
renderHistories();
