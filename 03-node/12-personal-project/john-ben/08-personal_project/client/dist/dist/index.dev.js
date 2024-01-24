"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var renderToDoList = [];

function handleGetTasks() {
  try {
    return fetch("http://localhost:3010/api/task").then(function (res) {
      return res.json();
    }).then(function (_a) {
      var tasks = _a.tasks;

      try {
        if (!tasks) throw new Error("didnt find users");
        return tasks;
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function handleGetTask(id) {
  try {
    return fetch("http://localhost:3010/api/task/" + id).then(function (res) {
      return res.json();
    }).then(function (_a) {
      var task = _a.task;

      try {
        if (!task) throw new Error("didnt find users");
        return task;
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function handleAddTask() {
  var inputElement = document.getElementById("newTaskInput");
  if (!inputElement || !inputElement.value) return;
  var newTaskName = inputElement.value;
  var newTaskPromise = handleCreateTask(newTaskName);
  if (!newTaskPromise) return;
  newTaskPromise.then(function (newTask) {
    var tasksElement = document.getElementById("tasks");
    if (!tasksElement) throw new Error("Couldn't find tasks element in the DOM");
    var newTaskElement = document.createElement("div");
    newTaskElement.classList.add("task");
    newTaskElement.innerHTML = "\n\t\t  <p>" + newTask.name + "</p>\n\t\t  <div class=\"task-right-wrapper\">\n\t\t\t<div class=\"check-box-task\" id=\"checkBox-" + newTask._id + "\" onclick=\"handleChangeStatus('" + newTask._id + "')\"></div>\n\t\t\t<button onclick=\"handleDeleteTask('" + newTask._id + "')\">delete</delete>\n\t\t  </div>\n\t\t";
    tasksElement.appendChild(newTaskElement);
    inputElement.value = "";
  })["catch"](function (error) {
    console.error(error);
  });
}

function handleCreateTask(name) {
  try {
    return fetch("http://localhost:3010/api/task", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    }).then(function (res) {
      return res.json();
    }).then(function (_a) {
      var task = _a.task;
      if (!task) throw new Error("Failed to create task");
      return task;
    });
  } catch (error) {
    console.error(error);
  }
}

function handleUpdateTask(id, task) {
  try {
    return fetch("http://localhost:3010/api/task/" + id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(__assign({}, task))
    });
  } catch (err) {
    console.log(err);
  }
}

function handleDeleteTask(id) {
  try {
    var removeTaskPromise = handleRemoveTask(id);
    console.log(id);
    if (!removeTaskPromise) return;
    removeTaskPromise.then(function () {
      var taskElement = document.getElementById("task-" + id);
      if (!taskElement) return;
      taskElement.remove();
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleRemoveTask(id) {
  try {
    return fetch("http://localhost:3010/api/task/" + id, {
      method: "DELETE"
    });
  } catch (err) {
    console.log(err);
  }
}

function handleChangeStatus(id) {
  try {
    var taskPromise = handleGetTask(id);
    if (!taskPromise) return;
    taskPromise.then(function (task) {
      var taskInProgress = task.status === "in progress";
      var checkBox = document.getElementById("checkBox-" + id);
      if (!checkBox) return;
      checkBox.style.background = taskInProgress ? "green" : "unset";
      handleUpdateTask(id, {
        status: taskInProgress ? "finished" : "in progress"
      });
    });
  } catch (err) {
    console.error(err);
  }
}

function renderTasks() {
  try {
    var tasksPromise = handleGetTasks();
    if (!tasksPromise) return;
    tasksPromise.then(function (tasks) {
      tasks.forEach(function (task) {
        renderToDoList.push("<div class=\"task\">\n                <p>" + task.name + "</p>\n\t\t\t\t<div class=\"task-right-wrapper\">\n\t\t\t\t\t<div class=\"check-box-task\" id=\"checkBox-" + task._id + "\" style='background: " + (task.status === "finished" && "green") + "' onclick=\"handleChangeStatus('" + task._id + "')\"></div>\n\t\t\t\t\t<button onclick=\"handleDeleteTask('" + task._id + "')\">delete</delete>\n\t\t\t\t</div>\n            </div>\n\t\t\t");
        var tasksElement = document.getElementById("tasks");
        if (!tasksElement) throw new Error("coundnt find tasks element on DOM");
        tasksElement.innerHTML = renderToDoList.join("");
      });
    });
  } catch (error) {
    console.error(error);
  }
}

renderTasks();