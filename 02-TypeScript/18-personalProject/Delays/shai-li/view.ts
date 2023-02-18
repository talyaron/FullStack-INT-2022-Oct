const addNewTaskButton: HTMLElement | null = document.querySelector("#addNewTaskBtn");
const tasksContainer: HTMLElement | null = document.querySelector("#newTask");
const filterInput = document.querySelector<HTMLElement>(".filter");
const usernamePlaceholder: HTMLElement | null =document.querySelector<HTMLElement>("#usernamePlaceholder");
const username = localStorage.getItem("current-user") ?? "";



if(filterInput){
  filterInput.addEventListener("change", (e) => {
    const filterValue: "all" | "completed" | "incomplete" = e.target.value;
    const tasksToRender =
      filterValue === "all"
        ? tasks
        : tasks.filter(
            (task) =>
              (filterValue === "completed" && task.completed) ||
              (filterValue === "incomplete" && !task.completed)
          );
    if (tasksContainer) {
      tasksContainer.innerHTML = "";
      renderTasks(tasksToRender);
    }
    
  });
}

addNewTaskButton?.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleInput = document.querySelectorAll("input")[0];
  const descriptionInput = document.querySelectorAll("input")[1];
  const dueTimeInput = document.querySelectorAll("select")[0];

  addTask(titleInput.value, descriptionInput.value, dueTimeInput.value);
  addTaskToModel(titleInput.value, descriptionInput.value, dueTimeInput.value);

  titleInput.value = "";
  descriptionInput.value = "";
  dueTimeInput.value = "";
});

