interface ITask {
	_id: string;
	name: string;
	status: `in progress` | `finished`;
}

let renderToDoList: string[] = [];

function handleGetTasks() {
	try {
		return fetch("http://localhost:3010/api/tasks")
			.then((res) => res.json())
			.then(({ tasks }) => {
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

function handleGetTask(id: string) {
	try {
		return fetch(`http://localhost:3010/api/tasks/${id}`)
			.then((res) => res.json())
			.then(({ task }) => {
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
	const inputElement = document.getElementById(
		"newTaskInput"
	) as HTMLInputElement;
	if (!inputElement || !inputElement.value) return;

	const newTaskName = inputElement.value;

	const newTaskPromise = handleCreateTask(newTaskName);

	if (!newTaskPromise) return;

	newTaskPromise
		.then((newTask) => {
			const tasksElement = document.getElementById("tasks");
			if (!tasksElement)
				throw new Error("Couldn't find tasks element in the DOM");

			const newTaskElement = document.createElement("div");
			newTaskElement.classList.add("task");
			newTaskElement.id = `task-${newTask._id}`;
			newTaskElement.innerHTML = `
		  <p>${newTask.name}</p>
		  <div class="task-right-wrapper">
			<div class="check-box-task" id="checkBox-${newTask._id}" onclick="handleChangeStatus('${newTask._id}')"></div>
			<button onclick="handleDeleteTask('${newTask._id}')">delete</delete>
		  </div>
		`;

			tasksElement.appendChild(newTaskElement);

			inputElement.value = "";
		})
		.catch((error) => {
			console.error(error);
		});
}

function handleCreateTask(name: string) {
	try {
		return fetch("http://localhost:3010/api/tasks", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name }),
		})
			.then((res) => res.json())
			.then(({ task }) => {
				if (!task) throw new Error("Failed to create task");
				return task;
			});
	} catch (error) {
		console.error(error);
	}
}

function handleUpdateTask(id: string, task: Partial<ITask>) {
	try {
		return fetch(`http://localhost:3010/api/tasks/${id}`, {
			method: "PATCH",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...task }),
		});
	} catch (err) {
		console.log(err);
	}
}

function handleDeleteTask(id: string) {
	try {
		const removeTaskPromise = handleRemoveTask(id);

		if (!removeTaskPromise) return;

		removeTaskPromise
			.then(() => {
				const taskElement = document.getElementById(`task-${id}`);
				if (!taskElement) return;

				taskElement.remove();
			})
			.catch((error) => {
				console.error(error);
			});
	} catch (error) {
		console.error(error);
	}
}

function handleRemoveTask(id: string) {
	try {
		return fetch(`http://localhost:3010/api/tasks/${id}`, {
			method: "DELETE",
		});
	} catch (err) {
		console.log(err);
	}
}

function handleChangeStatus(id) {
	try {
		const taskPromise = handleGetTask(id);

		if (!taskPromise) return;

		taskPromise.then((task) => {
			const taskInProgress = task.status === "in progress";

			const checkBox = document.getElementById(`checkBox-${id}`);

			if (!checkBox) return;

			checkBox.style.background = taskInProgress ? "green" : "unset";

			handleUpdateTask(id, {
				status: taskInProgress ? "finished" : "in progress",
			});
		});
	} catch (err) {
		console.error(err);
	}
}

function renderTasks() {
	try {
		const tasksPromise = handleGetTasks();

		if (!tasksPromise) return;

		tasksPromise.then((tasks) => {
			tasks.forEach((task: ITask) => {
				renderToDoList.push(`<div class="task" id="task-${task._id}">
                <p>${task.name}</p>
				<div class="task-right-wrapper">
					<div class="check-box-task" id="checkBox-${task._id}" style='background: ${
					task.status === "finished" && "green"
				}' onclick="handleChangeStatus('${task._id}')"></div>
					<button onclick="handleDeleteTask('${task._id}')">delete</delete>
				</div>
            </div>
			`);

				const tasksElement = document.getElementById("tasks");
				if (!tasksElement) throw new Error("coundnt find tasks element on DOM");

				tasksElement.innerHTML = renderToDoList.join("");
			});
		});
	} catch (error) {
		console.error(error);
	}
}

renderTasks();
