let renderHistoryToDoList: string[] = [];

function handleGetHistories() {
	try {
		return fetch("http://localhost:3010/api/histories")
			.then((res) => res.json())
			.then(({ histories }) => {
				try {
					if (!histories) throw new Error("didnt find histories");

					return histories;
				} catch (error) {
					console.error(error);
				}
			});
	} catch (error) {
		console.error(error);
	}
}

function renderHistories() {
	try {
		const tasksPromise = handleGetHistories();

		if (!tasksPromise) return;

		tasksPromise.then((histories) => {
			histories.forEach((history) => {
				renderHistoryToDoList.push(`<div class="task" id="task-${history.task._id}">
                <p>${history.task.name}</p>
				<div class="task-right-wrapper">
					<div class="check-box-task" id="checkBox-${
						history.task._id
					}" style='background: ${
					history.task.status === "finished" && "green"
				}'></div>
                <div>${history.type}</div>
				</div>
            </div>
			`);

				const tasksElement = document.getElementById("histories");
				if (!tasksElement) throw new Error("coundnt find tasks element on DOM");

				tasksElement.innerHTML = renderHistoryToDoList.reverse().join("");
			});
		});
	} catch (error) {
		console.error(error);
	}
}

renderHistories();
