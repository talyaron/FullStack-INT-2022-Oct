const addTask = (title, description, dueTime) => {
  const newTask = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(title);
  newTask.append(bTag);
  newTask.append(`- ${dueTime}, ${description}`);
  tasksContainer?.append(newTask);
};

function addTaskToModel(title: string, description: string, dueTime: string) {
  try {
    tasks.push(new Task(title, description, dueTime, username));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  } catch (error) {
    console.error(error);
  }
}

function renderTasks(tasksToAdd) {
  tasksToAdd.forEach((task) =>
    addTask(task.title, task.description, task.dueTime)
  );
}
